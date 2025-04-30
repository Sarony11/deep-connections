Primero, configura el proyecto y la región por defecto (elige una región cercana a tus usuarios o donde desees replicar los datos):

```bash
gcloud config set project [YOUR_PROJECT_ID]
gcloud config set compute/region [YOUR_REGION_NAME] # e.g., us-central1, europe-west1
```

Ahora, crea y configura el bucket de Cloud Storage y sube tus archivos:

```bash
# Define un nombre único para tu bucket. No tiene que ser el nombre del dominio/ruta.
# Sugerencia: Usa un nombre descriptivo y único globalmente.
BUCKET_NAME="inmediarevs-deep-connections-static"

# Crea el bucket
gsutil mb gs://${BUCKET_NAME}

# Sube todos los archivos de tu carpeta de proyecto local (juegos-rompe-hielo)
# Asegúrate de ejecutar este comando desde la raíz de tu carpeta de proyecto.
gsutil cp -r ./* gs://${BUCKET_NAME}/

# Configura el bucket para alojamiento de sitio web estático
gsutil web set -m index.html -e index.html gs://${BUCKET_NAME}

# Haz que los objetos del bucket sean de lectura pública usando IAM
gsutil iam ch allUsers:objectViewer gs://${BUCKET_NAME}

echo "Bucket ${BUCKET_NAME} creado, archivos subidos y configurado para hosting estático y acceso público."
```
Ahora, configura los componentes del Load Balancer HTTP:

```bash
# Define un nombre para la dirección IP externa estática
IP_NAME="inmediarevs-deep-connections-ip"

# Reserva una dirección IP externa estática global para el Load Balancer HTTP(S)
# Las IPs globales son necesarias para Load Balancers HTTP(S) de backend de Storage
gcloud compute addresses create ${IP_NAME} --global

# Obtén la dirección IP reservada (la necesitarás para el DNS más tarde)
IP_ADDRESS=$(gcloud compute addresses describe ${IP_NAME} --global --format="get(address)")
echo "Dirección IP estática reservada: ${IP_ADDRESS}"

# Define un nombre para el Backend Bucket (la representación del bucket en el Load Balancer)
BACKEND_BUCKET_NAME="deep-connections-backend"

# Crea el Backend Bucket, apuntando a tu bucket de Cloud Storage
# Habilitar CDN es opcional pero recomendado para rendimiento y costos.
gcloud compute backend-buckets create ${BACKEND_BUCKET_NAME} \
    --gcs-bucket-name=${BUCKET_NAME} \
    --enable-cdn

echo "Backend Bucket ${BACKEND_BUCKET_NAME} creado."

# Define un nombre para el mapa de URL
URL_MAP_NAME="inmediarevs-deep-connections-url-map"

# Crea el mapa de URL.
# Configura el Backend Bucket como el servicio por defecto. Esto significa que cualquier
# tráfico que no coincida con una regla de ruta específica irá a este bucket.
gcloud compute url-maps create ${URL_MAP_NAME} \
    --default-backend-bucket=${BACKEND_BUCKET_NAME}

# Agrega un path matcher para tu dominio
# El path matcher se aplica al tráfico del host inmediarevs.org
# Configuramos el mismo backend bucket como default para este host.
gcloud compute url-maps add-path-matcher ${URL_MAP_NAME} \
    --path-matcher-name="path-matcher-for-inmediarevs" \
    --default-backend-service=${BACKEND_BUCKET_NAME} \
    --new-hosts=inmediarevs.org

# Agrega una regla de ruta específica dentro del path matcher para /deep-connections
# Esta regla dirige el tráfico que comienza con /deep-connections/ (o /deep-connections)
# al mismo Backend Bucket. La regla más específica tiene prioridad sobre la regla por defecto.
gcloud compute url-maps add-path-rule ${URL_MAP_NAME} \
    --path-matcher-name="path-matcher-for-inmediarevs" \
    --paths="/deep-connections/*" \
    --service=${BACKEND_BUCKET_NAME} # Apunta al mismo Backend Bucket

# Nota sobre la ruta: La configuración '/deep-connections/*' dirigirá
# 'inmediarevs.org/deep-connections/index.html', 'inmediarevs.org/deep-connections/style.css', etc.
# El archivo 'index.html' se servirá automáticamente para 'inmediarevs.org/deep-connections/'
# debido a la configuración de sitio web estático del bucket (-m index.html).


echo "Mapa de URL ${URL_MAP_NAME} creado con reglas de enrutamiento."

# Define un nombre para el proxy HTTP de destino
HTTP_PROXY_NAME="inmediarevs-deep-connections-http-proxy"

# Crea el proxy HTTP de destino, apuntando a tu mapa de URL
gcloud compute target-http-proxies create ${HTTP_PROXY_NAME} \
    --url-map=${URL_MAP_NAME}

echo "Proxy HTTP ${HTTP_PROXY_NAME} creado."

# Define un nombre para la regla de reenvío global
FW_RULE_NAME="inmediarevs-deep-connections-forwarding-rule"

# Crea la regla de reenvío global, asociándola a la IP, el puerto 80 (HTTP) y el proxy HTTP
gcloud compute forwarding-rules create ${FW_RULE_NAME} \
    --global \
    --ports=80 \
    --address=${IP_NAME} \
    --target-http-proxy=${HTTP_PROXY_NAME}

echo "Regla de reenvío ${FW_RULE_NAME} creada para la IP ${IP_ADDRESS} en el puerto 80."

echo "Configuración del Load Balancer HTTP completada."
echo "La dirección IP estática que debes usar en tu DNS es: ${IP_ADDRESS}"
```

## Comandos para Configurar HTTPS:

Primero, define un nombre para tu certificado y asegúrate de estar en el proyecto y región correctos:

```bash

# Reemplaza con el nombre que quieras para tu certificado
CERT_NAME="inmediarevs-deep-connections-cert"

# Reemplaza con tu ID de proyecto y la región que usaste antes
gcloud config set project [YOUR_PROJECT_ID]
gcloud config set compute/region [YOUR_REGION_NAME]
```

Ahora, crea el certificado gestionado por Google. Deberás especificar los dominios que cubrirá (en tu caso, tu dominio principal inmediarevs.org). Si configuraste un subdominio para pruebas antes, puedes incluirlo también, aunque la configuración del Load Balancer actual apunta la IP al dominio principal.

```bash
# Crea un certificado SSL gestionado por Google para tu dominio
# Google se encargará de verificar la propiedad del dominio.
gcloud compute ssl-certificates create ${CERT_NAME} \
    --domains=inmediarevs.org
    # Si planeas usar también un subdominio como deep-connections.inmediarevs.org con este certificado, añádelo:
    # --domains=inmediarevs.org,deep-connections.inmediarevs.org

echo "Certificado SSL ${CERT_NAME} solicitado para inmediarevs.org."
echo "La verificación y aprovisionamiento del certificado puede tardar varios minutos u horas."
echo "Puedes verificar el estado con: gcloud compute ssl-certificates list"
```

Espera a que el certificado cambie su estado a ACTIVE. Esto puede tardar. Puedes usar el comando gcloud compute ssl-certificates list repetidamente para verificar el estado. No continúes hasta que el estado sea ACTIVE.

Una vez que el certificado esté ACTIVE, configura los componentes del Load Balancer para HTTPS:

```bash
# Reemplaza con el nombre de tu mapa de URL y tu IP estática (si no los definiste en tu terminal)
# URL_MAP_NAME="inmediarevs-deep-connections-url-map"
# IP_NAME="inmediarevs-deep-connections-ip"


# Define un nombre para el proxy HTTPS de destino
HTTPS_PROXY_NAME="inmediarevs-deep-connections-https-proxy"

# Crea el proxy HTTPS de destino, apuntando a tu mapa de URL y usando el certificado SSL
gcloud compute target-https-proxies create ${HTTPS_PROXY_NAME} \
    --ssl-certificates=${CERT_NAME} \
    --url-map=${URL_MAP_NAME}

echo "Proxy HTTPS ${HTTPS_PROXY_NAME} creado usando el certificado ${CERT_NAME} y el mapa de URL ${URL_MAP_NAME}."

# Define un nombre para la regla de reenvío global para HTTPS
HTTPS_FW_RULE_NAME="inmediarevs-deep-connections-https-forwarding-rule"

# Crea la regla de reenvío global para el puerto 443 (HTTPS), asociándola a la IP estática y al proxy HTTPS
gcloud compute forwarding-rules create ${HTTPS_FW_RULE_NAME} \
    --global \
    --ports=443 \
    --address=${IP_NAME} \
    --target-https-proxy=${HTTPS_PROXY_NAME}

echo "Regla de reenvío ${HTTPS_FW_RULE_NAME} creada para la IP ${IP_NAME} en el puerto 443 (HTTPS)."

echo "Configuración del Load Balancer HTTPS completada."
echo "Una vez que el certificado esté activo y la configuración se propague, podrás acceder a tu sitio vía HTTPS."
```

## Paso Final: Actualizar los Registros DNS de tu Dominio

Ve a la configuración DNS de tu dominio inmediarevs.org con tu proveedor de dominio.
Edita o crea un registro DNS de tipo A para @ (o tu dominio principal si no usas @).
Aprieta el Host o Nombre a @ o déjalo vacío (depende de tu proveedor DNS para el dominio principal).
El Valor o Dirección IP debe ser la dirección IP estática global que obtuviste en el Paso 2 (${IP_ADDRESS}).
Guarda el registro DNS. La propagación puede tardar.
Implicación importante: Una vez que el DNS se propague, todo el tráfico HTTP (puerto 80) para inmediarevs.org será dirigido a este Load Balancer. Debido a la configuración del mapa de URL, las peticiones a inmediarevs.org/deep-connections/* servirán los archivos de tu bucket, y las peticiones a inmediarevs.org/ (la raíz) también servirán el index.html de tu bucket porque es el servicio por defecto. Si esto no es lo que quieres para la raíz, tendríamos que ajustar la configuración del mapa de URL para apuntar la regla por defecto a otro lugar (como un backend que devuelva un 404), lo cual añade complejidad.