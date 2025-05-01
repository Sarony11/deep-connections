var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Definimos los mazos disponibles. Cada mazo tiene un 'id' (clave), un 'name' (nombre a mostrar),
// un array de 'questions' y una propiedad 'order' ('random' o 'sequential').
var decks = {
    "conexion-rolera": {
        name: "Conexión Rolera",
        questions: [
            "¿Qué fue lo primero que te atrajo del rol (de mesa o en vivo)?",
            "¿Cuál es el personaje que has jugado y que más se parece a ti en algún aspecto?",
            "¿Hay algún personaje que hayas jugado que te haya enseñado algo sobre ti mismo/a?",
            "Describe un momento inesperado en una partida que te haya sorprendido o conmovido.",
            "¿Qué tipo de historias o géneros disfrutas más explorando en el rol?",
            "¿Qué buscas principalmente cuando te sientas a jugar una partida de rol?",
            "¿Cómo manejas los conflictos o las decisiones difíciles en el juego, ya sea como jugador o DJ/narrador?",
            "¿Hay algún personaje que hayas tenido que \"retirar\" (por muerte, jubilación, etc.) y que echas de menos?",
            "¿Qué te parece más importante en una buena mesa de juego: la historia, los personajes, las reglas, el ambiente?",
            "¿Has tenido alguna experiencia memorable interpretando a un personaje muy diferente a ti? (Por ejemplo, alguien muy diferente a ti)",
            "¿Cuál es tu mayor miedo o preocupación como jugador/a o DJ/narrador/a en una partida?",
            "¿Qué te inspira a crear un personaje o una historia para rol?",
            "¿Hay alguna habilidad o cualidad que admires en otros jugadores/DJ/narradores?",
            "¿Qué papel sueles tomar (o prefieres tomar) en un grupo de juego? (El líder, el que sigue, el que bromea, el que investiga, etc.)",
            "¿Cómo te preparas antes de una sesión de juego? (Mentalmente, leyendo, etc.)",
            "¿Hay algún tropo o cliché de rol (en historias, personajes, situaciones) que disfrutes (o detestes) particularmente? ¿Por qué?",
            "¿Qué significa para ti la \"inmersión\" en una partida de rol? ¿Qué te ayuda (o te saca) de ella?",
            "¿Qué es lo más divertido que te ha pasado *fuera* de la partida, pero relacionado con ella? (Charlas post-partida, memes, etc.)",
            "Si pudieras vivir en un mundo de rol, ¿cuál sería y por qué? (O en qué mundo de rol te gustaría vivir)",
            "¿Qué te atrae más de los juegos de rol en vivo (LARP) en comparación con los de mesa, si has jugado a ambos? ¿Encuentras alguna diferencia clave en la experiencia?"
        ],
        order: 'random', // Este mazo es aleatorio
        description: "Preguntas diseñadas para romper el hielo y conocerse mejor entre grupos y colegas roleros que compaten afición."
    },
    "disenadores-larp": {
        name: "Reflexiones para Diseñadores de LARP",
        questions: [
            "¿Qué te impulsó a diseñar tu primer rol en vivo? ¿Qué sigues buscando al crear uno nuevo?",
            "¿Hay algún tema o tipo de experiencia que sientas que defines o exploras recurrentemente en tus diseños?",
            "Describe tu proceso de diseño típico desde la chispa inicial hasta que los jugadores entran en juego.",
            "Si tuvieras que describir tu \"voz artística\" como diseñador/a de LARP en una frase, ¿cuál sería?",
            "Comparte una técnica de diseño (de escritura, reglas, organización, etc.) que hayas desarrollado o adaptado y que encuentres particularmente efectiva.",
            "¿Cómo encuentras el equilibrio entre la visión que tienes para un LARP y la libertad y agencia de los jugadores?",
            "¿Qué parte del proceso de diseño (conceptualización, escritura, construcción de mundo, logística, etc.) disfrutas más y cuál te resulta más desafiante?",
            "¿Cuál ha sido el obstáculo creativo o logístico más grande que has superado diseñando un LARP?",
            "¿Qué aspecto del diseño de rol en vivo disfrutas más: la escritura, la organización, la facilitación, otra cosa?",
            "¿Cómo piensas en la seguridad emocional y física de los jugadores al diseñar un evento? ¿Qué mecanismos o herramientas utilizas?",
            "¿Qué tipo de experiencias buscas generar para los jugadores en tus LARPs?",
            "¿Cuál es tu enfoque para crear inmersión y atmósfera en un rol en vivo?",
            "¿Hay algún diseñador/a (de LARP u otra disciplina) que te inspire particularmente? ¿Por qué?",
            "¿Cómo manejas el feedback de los jugadores después de un evento? ¿Cómo influye en tus futuros diseños?",
            "¿Qué crees que diferencia un buen diseño de rol en vivo de uno excepcional?",
            "¿Cómo decides qué reglas o mecánicas son necesarias para un LARP específico?",
            "¿Qué papel juega la improvisación (tuyas o de los jugadores/equipo) en tus diseños?",
            "¿Qué consejo le darías a alguien que está empezando a diseñar roles en vivo?",
            "¿Hay algún elemento de diseño que te gustaría experimentar pero que aún no has tenido la oportunidad?",
            "¿Cómo gestionas el estrés o la presión durante el proceso de organización de un LARP?",
            "¿Qué significa para ti el \"éxito\" de un rol en vivo que has diseñado?",
            "¿Cómo intentas que tus diseños sean accesibles para diferentes tipos de jugadores?",
            "¿Cuál es un error común que has aprendido a evitar en tus diseños?",
            "¿Qué rituales o hábitos tienes que te ayudan a entrar en tu modo creativo?",
            "¿Cómo defines el rol de los NPCs (Personajes No Jugadores) en tus eventos y cómo trabajas con ellos?",
            "¿Hay algún género o subcultura del rol en vivo que te atraiga especialmente?",
            "¿Cómo incorporas temas complejos o sensibles en tus diseños de manera responsable?",
            "¿Qué esperas que los jugadores se lleven consigo después de participar en uno de tus LARPs?",
            "¿Qué opinión tienes sobre la relación entre el arte, el juego y la comunidad en el rol en vivo?",
            "Si tuvieras recursos ilimitados, ¿cómo sería el LARP de tus sueños para diseñar?"
        ],
        order: 'random', // Este mazo es aleatorio
        description: "Mazo enfocado a diseñadores y organizadores de LARP para reflexionar sobre su proceso creativo, voz artística y técnicas."
    },
    "calibracion-larp": {
        name: "Calibración de Personajes LARP",
        questions: [
            "**Seguridad y Límites (Jugador a Jugador):** Como jugadores, ¿qué nos sentiríamos más cómodos explorando en la relación de nuestros personajes y qué temas o acciones preferiríamos manejar con especial cuidado o evitar? Hablemos de nuestras señales de seguridad si las tenemos.",
            "Describe un momento clave en el pasado que definió (o redefinió) la relación entre nuestros personajes. ¿Cómo cambió su dinámica a partir de ahí?",
            "**Pre-Narra:** Imagina un recuerdo feliz que nuestros personajes compartan. Narren brevemente esa escena juntos, turnándose o colaborando.",
            "¿Cuál es el mayor punto de tensión o conflicto recurrente en la relación de nuestros personajes?",
            "¿Qué es lo que tu personaje más admira o valora del mío? ¿Y qué es lo que más le frustra o le cuesta entender?",
            "**Jugador a Jugador:** ¿Qué tipo de \"química\" o dinámica (ej. intensa, juguetona, conflictiva, de apoyo) nos gustaría explorar y crear entre nuestros personajes?",
            "Describe brevemente cómo fue el primer encuentro significativo entre nuestros personajes. ¿Cuál fue la primera impresión (real o percibida)?",
            "¿Hay algún secreto importante que tu personaje guarde del mío (o viceversa, si se aplica)? Como jugadores, ¿hasta qué punto queremos explorar esto?",
            "**Pre-Narra:** Narren un momento en el que nuestros personajes tuvieron que apoyarse mutuamente en una situación difícil. ¿Cómo se sintieron en ese momento?",
            "¿Qué miedos o inseguridades tiene tu personaje respecto a esta relación?",
            "**Jugador a Jugador:** ¿Hay algún tema sensible dentro de la historia de nuestros personajes que debamos abordar con cuidado o con señales de seguridad adicionales?",
            "Describe un momento en el que la confianza mutua se puso a prueba.",
            "¿Qué sacrificios ha hecho tu personaje por el mío (o viceversa)?",
            "**Pre-Narra:** Narren un recuerdo doloroso o triste que nuestros personajes vivieron juntos. ¿Cómo reaccionaron?",
            "¿Qué papel juega el humor o la ligereza (si la hay) en la relación de nuestros personajes?",
            "**Jugador a Jugador:** ¿Qué nos gustaría que otros jugadores notaran o entendieran sobre la relación de nuestros personajes?",
            "Describe un rasgo de carácter de mi personaje que el tuyo encuentre particularmente atractivo o irritante (en un sentido dramático).",
            "¿Cuál es el \"pegamento\" que mantiene unidos a nuestros personajes, incluso en los peores momentos?",
            "**Pre-Narra:** Narren una pequeña discusión o desacuerdo que hayan tenido nuestros personajes. ¿Cómo terminó?",
            "¿Hay algún futuro potencial para la relación de nuestros personajes que te emocione (o te preocupe) explorar?",
            "**Jugador a Jugador:** ¿Qué señales podríamos usar si en algún momento queremos pausar, ajustar o detener una escena intensa entre nuestros personajes?",
            "Describe una tradición o un ritual (grande o pequeño) que sea único de la relación de nuestros personajes.",
            "¿Cuál es el mayor miedo de tu personaje respecto a su relación con el mío?",
            "**Pre-Narra:** Narren un momento en el que nuestros personajes compartieron un secreto importante.",
            "¿Cómo influyen otros personajes o factores externos en la relación de nuestros personajes?",
            "**Jugador a Jugador:** ¿Qué nos gustaría que *sentimos* al jugar esta relación? (Por ejemplo, tensión, comodidad, desafío).",
            "Describe un momento en el que uno de nuestros personajes sorprendió al otro de una manera significativa.",
            "¿Qué no se dicen nuestros personajes el uno al otro, pero ambos saben (o sospechan)?",
            "**Pre-Narra:** Narren un momento futuro (hipotético, no tiene por qué ocurrir en el LARP) en el que la relación de nuestros personajes ha cambiado drásticamente.",
            "**Jugador a Jugador:** ¿Cuál es el objetivo principal (o los objetivos) que tenemos como jugadores al explorar esta relación particular durante el LARP?"
        ],
        order: 'sequential', // ¡Este mazo es secuencial!
        description: "Diseñado para la calibración de personajes en LARP, con preguntas y prompts para construir vínculos, establecer límites y explorar la historia compartida."
    },
    "profundidad-personaje": {
        name: "Mazo: Profundidad de Personaje LARP", // <-- Nuevo Nombre a mostrar
        questions: [
            "Más allá de su historia, ¿cuál crees que es la herida emocional más profunda de tu personaje? ¿Cómo intenta compensarla o esconderla en su vida diaria?",
            "Si tu personaje tuviera un miedo secreto que apenas se atreve a reconocer, ¿cuál sería y cómo crees que influye en sus decisiones (inconscientemente)?",
            "Describe un \"gestus\" o manerismo físico muy particular de tu personaje cuando está bajo estrés o conteniendo una emoción fuerte.",
            "¿Qué recuerdo (feliz, triste, traumático) del pasado de tu personaje, aunque no esté explícito en el brief, sientes que le ha marcado más? ¿Por qué?",
            "Si pudieras elegir una banda sonora para la vida interior de tu personaje, ¿qué canción sería y por qué?",
            "¿Cuál es el mayor deseo insatisfecho de tu personaje? ¿Cómo afecta su forma de interactuar con el mundo?",
            "Describe cómo camina tu personaje. ¿Es rápido, lento, arrastra los pies, pecho fuera? ¿Qué dice eso de él/ella?",
            "¿Qué situación o tipo de persona saca lo peor (o lo mejor) de tu personaje?",
            "Si tu personaje pudiera tener un objeto fetiche (algo que le dé seguridad o significado), ¿cuál sería? ¿Cómo lo manejaría físicamente?",
            "¿Cuál es una contradicción interesante en la personalidad de tu personaje? ¿Cómo intentas mostrar esa contradicción al jugar?",
            "Piensa en la relación más importante de tu personaje. ¿Cómo cambia su postura corporal, tono de voz o gestos cuando está con esa persona?",
            "¿Qué mentira se dice a sí mismo/a tu personaje? ¿Cómo se refleja esa auto-mentira en su forma de hablar o actuar?",
            "Describe una expresión facial típica de tu personaje cuando está concentrado/a, enojado/a o triste.",
            "¿Qué le da esperanza a tu personaje en los momentos difíciles? ¿Dónde busca esa esperanza?",
            "Si tu personaje tuviera un \"superpoder\" no mágico, ¿cuál sería su habilidad social más destacada? ¿Cómo la usa?",
            "¿Cómo reacciona físicamente tu personaje bajo estrés o presión? (Ej. Juega con algo, se muerde el labio, evita la mirada).",
            "¿Qué creencia profunda de tu personaje nunca cuestionaría, aunque le causara problemas?",
            "Describe el tono de voz habitual de tu personaje. ¿Es suave, áspero, rápido, lento, agudo, grave? ¿Qué comunica eso?",
            "¿Cuál es un pequeño vicio o indulgencia que tu personaje se permite en privado?",
            "Piensa en un momento en el que tu personaje tuvo que tomar una decisión muy difícil. ¿Qué gesto o acción física acompañó ese momento?",
            "¿Qué le resulta más fácil a tu personaje fingir (una emoción, una intención) y qué le cuesta más disimular?",
            "Describe cómo se sienta tu personaje en diferentes situaciones (solo, con amigos, en una reunión formal).",
            "¿Qué le da a tu personaje una sensación de propósito o significado en la vida?",
            "¿Hay alguna cicatriz (física o emocional) en tu personaje que cuente una historia importante? ¿Cómo influye en su comportamiento o gestos?",
            "Si tu personaje pudiera romper una regla social sin consecuencias, ¿cuál sería?",
            "Describe cómo tu personaje usa sus manos al hablar o interactuar. ¿Son expresivas, quietas, inquietas?",
            "¿Qué no entiende tu personaje del mundo o de las personas que le rodean?",
            "¿Cuál es la mayor fortaleza emocional de tu personaje? ¿Y su mayor debilidad emocional? ¿Cómo se ven ambas?",
            "Si tu personaje tuviera un tic nervioso, ¿cuál sería? ¿Cuándo aparecería?",
            "Como jugador, ¿qué aspecto de este personaje te resulta más interesante o desafiante de interpretar?"
        ],
        order: 'sequential', // <-- Sugerimos orden secuencial para un proceso guiado
        description: "Preguntas para jugadores de LARP y ayudar a interpretar a tu perosnaje dotándolo de mayor profunidad, llenando detalles que lo completen y reflexionando sobre sus gestus y manerismos."
    },
    "conexion-profunda": {
        name: "Conexión Profunda",
        questions: [
            "¿Qué es algo que te apasionaba de niño/a y que has dejado de lado? ¿Lo echas de menos en tu vida actual?",
            "Si tuvieras un día libre completo, sin responsabilidades ni planes preestablecidos, ¿qué te gustaría hacer realmente?",
            "Comparte un miedo que hayas logrado superar. ¿Cómo te sentiste durante el proceso y qué aprendiste de él?",
            "¿Hay alguna pequeña costumbre o ritual en tu rutina diaria que sea importante o significativo para ti?",
            "Si pudieras dar un único consejo a tu \"yo\" de hace diez años, ¿cuál sería y por qué?",
            "Describe un lugar (real o imaginado) donde te sientas completamente en paz y contigo mismo/a.",
            "¿Qué has descubierto sobre ti mismo/a en el último año que te haya sorprendido?",
            "¿Hay alguna canción o libro que te haya marcado especialmente en algún momento de tu vida? ¿Por qué?",
            "Si tuvieras que describir un momento en el que te sentiste vulnerable, ¿cuál sería?",
            "¿Qué cualidad admiras más en las personas cercanas a ti?",
            "¿Hay algún sueño que tenías y que, por alguna razón, no pudiste perseguir?",
            "¿Cuál es un pequeño acto de amabilidad que has experimentado o presenciado y que recuerdas con cariño?",
            "¿Qué te quita el sueño a veces?",
            "Si pudieras tener una conversación con cualquier persona, viva o muerta, ¿quién sería y qué le preguntarías?",
            "¿Qué es algo que te hace sentir orgulloso/a de ti mismo/a?",
            "¿Cómo manejas los momentos de incertidumbre o cambio en tu vida?",
            "¿Hay alguna posesión material que tenga un gran valor sentimental para ti? Cuéntame su historia.",
            "¿Qué significa para ti la amistad?",
            "¿Cuál es un desafío que estás enfrentando ahora mismo (si te sientes cómodo/a compartiéndolo)?",
            "¿Qué te ayuda a sentirte conectado/a con los demás?",
            "¿Hay alguna creencia o valor que haya cambiado significativamente a lo largo de tu vida?",
            "¿Cuál es un logro (grande o pequeño) por el que has trabajado duro?",
            "Si pudieras cambiar una cosa del mundo, ¿cuál sería?",
            "¿Qué te saca una sonrisa garantizada?",
            "¿Hay algún lugar al que sueñes viajar algún día? ¿Por qué?",
            "¿Qué te enseña algo sobre ti mismo/a el tipo de historias o películas que disfrutas?",
            "¿Cómo recargas energías cuando te sientes agotado/a emocionalmente?",
            "¿Qué es algo que te gustaría aprender a hacer?",
            "¿Hay alguna \"pequeña victoria\" reciente en tu vida que te gustaría celebrar?",
            "¿Qué es lo más importante que has aprendido de tus relaciones (amistades, familia, pareja)?"
        ],
        order: 'random', // Este mazo es aleatorio
        description: "Preguntas para profundizar la conexión entre personas que ya se conocen, explorando vulnerabilidades, sueños y valores personales."
    }
    // Aquí podrías añadir más mazos en el futuro
};
// Función para barajar el array (algoritmo Fisher-Yates) - No cambia
function shuffleArray(array) {
    var _a;
    var shuffledArray = __spreadArray([], array, true);
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];
    }
    return shuffledArray;
}
// Variables de estado del juego
var currentDeckId = null;
var shuffledQuestions = []; // Este array contendrá las preguntas en el orden que se mostrarán (barajado o secuencial)
var currentQuestionIndex = 0; // Índice para seguir la pregunta actual
// Obtenemos referencias a los elementos HTML
var deckSelectionArea = document.getElementById('deck-selection-area');
var deckOptionsArea = document.getElementById('deck-options');
var gameArea = document.getElementById('game-area');
var currentDeckTitleElement = document.getElementById('current-deck-title');
var questionElement = document.getElementById('current-question');
var nextButton = document.getElementById('next-question-btn');
var progressElement = document.getElementById('progress-indicator');
var backToDecksButton = document.getElementById('back-to-decks-btn');
// Función que se llama para mostrar la siguiente pregunta o el mensaje de fin del mazo
function displayNextQuestion() {
    // Verificamos si el mazo actual está agotado (el índice es igual o mayor que el número total de preguntas)
    if (!currentDeckId || shuffledQuestions.length === 0 || currentQuestionIndex >= shuffledQuestions.length) {
        // Esto significa que el mazo está agotado o vacío
        console.log("Mazo '".concat(currentDeckId ? decks[currentDeckId].name : 'ninguno', "' agotado o vac\u00EDo."));
        // Actualizamos el contenido del área de pregunta para indicar que se acabó el mazo
        if (questionElement) {
            questionElement.textContent = currentDeckId ?
                "\u00A1Has completado el mazo \"".concat(decks[currentDeckId].name, "\"! \u00A1Excelente trabajo de conexi\u00F3n!") :
                "Por favor, selecciona un mazo para empezar.";
            questionElement.style.fontStyle = 'normal'; // Quitamos la cursiva
            questionElement.style.color = '#333'; // Color normal
        }
        // Ocultamos el botón "Siguiente Pregunta"
        if (nextButton) {
            nextButton.classList.add('hidden');
            nextButton.disabled = true;
        }
        // Mostramos el botón "Volver a Elegir Mazo"
        if (backToDecksButton)
            backToDecksButton.classList.remove('hidden');
        // Actualizamos el indicador de progreso al mensaje de fin
        if (progressElement) {
            progressElement.textContent = "Mazo Completado";
            progressElement.style.color = '#333';
        }
        return; // Salimos de la función, el mazo ha terminado
    }
    // Si todavía hay preguntas en el array preparado (barajado o secuencial) que no han sido mostradas
    if (questionElement) {
        // Mostramos la pregunta actual
        questionElement.textContent = shuffledQuestions[currentQuestionIndex];
        questionElement.style.fontStyle = 'italic'; // Cursiva para las preguntas
        questionElement.style.color = '#555'; // Color de pregunta
        // Actualizamos el indicador de progreso ANTES de incrementar el índice
        if (progressElement) {
            progressElement.textContent = "Pregunta ".concat(currentQuestionIndex + 1, " de ").concat(shuffledQuestions.length);
            progressElement.style.color = '#777'; // Color de progreso
        }
        currentQuestionIndex++; // Avanzamos al siguiente índice
        console.log("Mostrando pregunta ".concat(currentQuestionIndex, " de ").concat(shuffledQuestions.length, " (del mazo actual)"));
        // La lógica de fin de mazo se activará automáticamente en la próxima llamada si acabamos de mostrar la última pregunta.
    }
    else {
        // Fallback si questionElement no existe
        console.error("Elemento 'current-question' no encontrado.");
        // Aseguramos que el usuario pueda volver si hay un error
        if (nextButton) {
            nextButton.classList.add('hidden');
            nextButton.disabled = true;
        }
        if (backToDecksButton)
            backToDecksButton.classList.remove('hidden');
        if (progressElement)
            progressElement.classList.add('hidden'); // Ocultar progreso en caso de error
    }
}
// Función que se llama cuando se selecciona un mazo
function handleDeckSelection(deckId) {
    var deck = decks[deckId];
    if (!deck) {
        console.error("Mazo no encontrado:", deckId);
        if (questionElement)
            questionElement.textContent = "Error al cargar el mazo.";
        if (nextButton)
            if (nextButton)
                nextButton.disabled = true;
        if (backToDecksButton)
            if (backToDecksButton)
                backToDecksButton.classList.add('hidden');
        if (progressElement)
            if (progressElement)
                progressElement.classList.add('hidden');
        return;
    }
    // Validar si el mazo seleccionado tiene preguntas
    if (deck.questions.length === 0) {
        console.warn("El mazo '".concat(deck.name, "' est\u00E1 vac\u00EDo."));
        if (questionElement) {
            questionElement.textContent = "El mazo \"".concat(deck.name, "\" no contiene preguntas. Por favor, elige otro mazo.");
            questionElement.style.fontStyle = 'normal';
            questionElement.style.color = '#e74c3c'; // Color de error
        }
        // Ocultamos el botón Siguiente y mostramos el de volver
        if (nextButton) {
            nextButton.classList.add('hidden');
            nextButton.disabled = true;
        }
        if (backToDecksButton)
            backToDecksButton.classList.remove('hidden');
        if (progressElement)
            progressElement.classList.add('hidden'); // Ocultar progreso si el mazo está vacío
        currentDeckId = null; // No hay mazo válido seleccionado
        shuffledQuestions = [];
        currentQuestionIndex = 0;
        // Transición de vistas
        if (deckSelectionArea)
            deckSelectionArea.classList.add('hidden');
        if (gameArea)
            gameArea.classList.remove('hidden');
        if (currentDeckTitleElement) {
            currentDeckTitleElement.textContent = "Mazo: ".concat(deck.name); // Mostrar título del mazo vacío
        }
        return; // Salimos, ya manejamos el caso de mazo vacío
    }
    currentDeckId = deckId; // Guardamos el ID del mazo seleccionado
    // Actualizamos el título del área de juego
    if (currentDeckTitleElement) {
        currentDeckTitleElement.textContent = "Mazo: ".concat(deck.name);
    }
    // --- Lógica Modificada para Orden Secuencial o Aleatorio ---
    if (deck.order === 'random') {
        shuffledQuestions = shuffleArray(__spreadArray([], deck.questions, true)); // Barajamos una copia para orden aleatorio
        console.log("Mazo '".concat(deck.name, "' (Random) seleccionado. Preguntas barajadas."));
    }
    else { // deck.order === 'sequential'
        shuffledQuestions = __spreadArray([], deck.questions, true); // Usamos las preguntas en el orden original (creamos una copia)
        console.log("Mazo '".concat(deck.name, "' (Sequential) seleccionado."));
    }
    // --- Fin Lógica Modificada ---
    currentQuestionIndex = 0; // Siempre empezamos por el primer elemento del array preparado (barajado o secuencial)
    // Ocultamos el área de selección de mazo y mostramos el área de juego
    if (deckSelectionArea)
        deckSelectionArea.classList.add('hidden');
    if (gameArea)
        gameArea.classList.remove('hidden');
    // Aseguramos visibilidad y estado de botones al iniciar el juego
    if (nextButton) {
        nextButton.classList.remove('hidden'); // Aseguramos que el botón Siguiente esté visible
        nextButton.disabled = false; // Aseguramos que esté habilitado
        nextButton.textContent = "Siguiente Pregunta"; // Restauramos el texto por defecto
    }
    // Nos aseguramos de que el botón de volver esté oculto al inicio de una nueva partida
    if (backToDecksButton)
        backToDecksButton.classList.add('hidden');
    // Mostramos el indicador de progreso
    if (progressElement) {
        progressElement.classList.remove('hidden');
    }
    // Mostramos la primera pregunta y actualizamos el progreso
    displayNextQuestion(); // Esta llamada también actualiza el progreso a "Pregunta 1 de X"
    console.log("Total de preguntas en el mazo: ".concat(shuffledQuestions.length));
}
// Event listener para el botón "Siguiente Pregunta"
if (nextButton) {
    nextButton.addEventListener('click', displayNextQuestion);
}
// Event listener para el botón "Volver a Elegir Mazo"
if (backToDecksButton) {
    backToDecksButton.addEventListener('click', function () {
        console.log("Clic en 'Volver a Elegir Mazo'.");
        // Ocultamos el área de juego
        if (gameArea)
            gameArea.classList.add('hidden');
        // Mostramos el área de selección de mazo
        if (deckSelectionArea)
            deckSelectionArea.classList.remove('hidden');
        // Reseteamos el estado del juego
        currentDeckId = null;
        shuffledQuestions = [];
        currentQuestionIndex = 0;
        // Ocultamos el progreso y los botones de la zona de juego
        if (progressElement)
            progressElement.classList.add('hidden');
        if (backToDecksButton)
            backToDecksButton.classList.add('hidden');
        // Aseguramos que el botón Siguiente esté visible y habilitado para la próxima partida
        if (nextButton) {
            nextButton.classList.remove('hidden');
            nextButton.disabled = false;
            nextButton.textContent = "Siguiente Pregunta"; // Restauramos el texto por defecto
        }
        // Restablecer el texto del área de pregunta y sus estilos
        if (questionElement) {
            questionElement.textContent = "Cargando pregunta..."; // Texto inicial
            questionElement.style.fontStyle = 'normal'; // Reset styles
            questionElement.style.color = '#555'; // Reset color
        }
        console.log("Volviendo a la selección de mazo.");
    });
}
// Cuando la página se cargue completamente, configuramos la interfaz inicial y creamos las tarjetas de mazo
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente cargado.");
    // Verificamos si los elementos HTML necesarios existen
    if (!deckSelectionArea || !deckOptionsArea || !gameArea || !currentDeckTitleElement || !questionElement || !nextButton || !progressElement || !backToDecksButton) {
        console.error("Error fatal: No se encontraron todos los elementos HTML necesarios al cargar la página.");
        // Mostrar un mensaje de error visible si es posible
        var body = document.querySelector('body');
        if (body) {
            body.innerHTML = '<div class="container" style="color: red; text-align: center;"><h1>Error al cargar</h1><p>No se pudieron encontrar los elementos necesarios de la interfaz. Por favor, verifica los archivos HTML y JavaScript.</p></div>';
            // Ocultar todo lo demás (si existían)
            if (deckSelectionArea)
                deckSelectionArea.classList.add('hidden');
            if (gameArea)
                gameArea.classList.add('hidden');
        }
        return; // Detenemos la ejecución si faltan elementos cruciales
    }
    // Limpiamos el área de opciones de mazo y creamos las tarjetas dinámicamente
    if (deckOptionsArea) {
        deckOptionsArea.innerHTML = ''; // Limpiar contenido existente
        var _loop_1 = function (deckId) {
            // Asegurarse de que la propiedad pertenece al objeto y no es heredada
            if (Object.prototype.hasOwnProperty.call(decks, deckId)) {
                var deck = decks[deckId];
                // --- Inicio: Lógica para crear la estructura de tarjeta ---
                var cardContainer = document.createElement('div');
                cardContainer.classList.add('deck-card');
                cardContainer.dataset.deckId = deckId; // Almacenamos el ID del mazo en un atributo data del contenedor
                var cardInner = document.createElement('div');
                cardInner.classList.add('deck-card-inner');
                var cardFront = document.createElement('div');
                cardFront.classList.add('deck-card-front');
                var frontTitle = document.createElement('h3'); // Usamos un h3 para el título en el frente
                frontTitle.textContent = deck.name;
                cardFront.appendChild(frontTitle);
                var cardBack = document.createElement('div');
                cardBack.classList.add('deck-card-back');
                var backDescription = document.createElement('p'); // Usamos un p para la descripción en la parte trasera
                backDescription.textContent = deck.description;
                cardBack.appendChild(backDescription);
                // Añadimos la cara frontal y trasera al contenedor interior
                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                // Añadimos el contenedor interior al contenedor principal de la tarjeta
                cardContainer.appendChild(cardInner);
                // Añadimos un event listener al contenedor principal de la tarjeta para manejar la selección del mazo al hacer click
                cardContainer.addEventListener('click', function () { return handleDeckSelection(deckId); }); // Llamamos a handleDeckSelection con el ID del mazo
                // Añadimos la tarjeta completa al área de opciones de mazo
                deckOptionsArea.appendChild(cardContainer);
                // --- Fin: Lógica para crear la estructura de tarjeta ---
            }
        };
        for (var deckId in decks) {
            _loop_1(deckId);
        }
        console.log("Creados ".concat(Object.keys(decks).length, " tarjetas de mazo."));
    }
    // Aseguramos que el área de selección de mazo sea visible y el área de juego esté oculta al inicio
    // También ocultamos el progreso y los botones de volver/siguiente hasta que se seleccione un mazo
    if (deckSelectionArea)
        deckSelectionArea.classList.remove('hidden');
    if (gameArea)
        gameArea.classList.add('hidden');
    if (progressElement)
        progressElement.classList.add('hidden'); // Progreso oculto al inicio
    if (backToDecksButton)
        backToDecksButton.classList.add('hidden'); // Botón de volver oculto al inicio
    if (nextButton) { // Botón Siguiente oculto al inicio
        nextButton.classList.add('hidden'); // Ocultar el botón Siguiente al inicio
        nextButton.disabled = false; // Aseguramos que esté habilitado cuando se muestre
    }
    console.log("Configuración inicial completada. Mostrando área de selección de mazo con tarjetas.");
});
