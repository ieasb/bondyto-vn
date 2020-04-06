/* global monogatari */

monogatari.component ('main-screen').template (() => {
    return `
        <div class="headerbar">
            <a href="https://asb.edu.pe"><img src="assets/images/header.png" /></a>
        </div>
        <br>
        <br>
        <h3>Episodio 1:</h3>
        <h1>Aprendo En Casa</h1>
        </div>
    `;
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
    'Help': {
        title: 'Help',
        subtitle: 'Some useful Links',
        body: `
            <p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
            <p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
        `
    },
    'SchedulingPrimary': {
        title: 'Programación de primaria',
        subtitle: 'Fuente: <a href="https://aprendoencasa.pe/static/media/Programacion_Radio_TV_5_Abril.39da82c3.pdf">Aprendo En Casa</a>',
        body: `
            <table style="width:100%">
                <tr>
                    <th>Grado</th>
                    <th>Televisión</th>
                    <th>Radio</th>
                </tr>
                <tr>
                    <td>1° y 2°</td>
                    <td>Lunes 6 - 10:30 a.m.</td>
                    <td>Lunes 6 y Miércoles 8 - 3:00 p.m.</td>
                </tr>
                <tr>
                    <td>3° y 4°</td>
                    <td>Martes 7 - 10:30 a.m.</td>
                    <td>Lunes 6 y Miércoles 8 - 3:30 p.m.</td>
                </tr>
                <tr>
                    <td>5° y 6°</td>
                    <td>Miércoles 8 - 10:30 a.m.</td>
                    <td>Lunes 6 y Miércoles 8 - 4:00 p.m.</td>
                </tr>
            </table>
        `
    },
    'SchedulingSecondary': {
        title: 'Programación de secundaria',
        subtitle: 'Fuente: <a href="https://aprendoencasa.pe/static/media/Programacion_Radio_TV_5_Abril.39da82c3.pdf">Aprendo En Casa</a>',
        body: `
            <table style="width:100%">
                <tr>
                    <th>Grado</th>
                    <th>Televisión</th>
                    <th>Radio</th>
                </tr>
                <tr>
                    <td>1° y 2°</td>
                    <td>Lunes 6 - 2:00 p.m.</td>
                    <td>Lunes 6 y Miércoles 8 - 9:00 a.m.</td>
                </tr>
                <tr>
                    <td>3°, 4° y 5°</td>
                    <td>Martes 7 - 2:00 p.m.</td>
                    <td>Lunes 6 y Miércoles 8 - 9:30 a.m.</td>
                </tr>
            </table>
        `
    },
    'HandwashingVideo': {
        title: 'Lavado de manos',
        subtitle: 'Créditos: <a href="https://www.youtube.com/channel/UCnsvJeZO4RigQ898WdDNoBw">EL PAÍS</a>',
        body: `
            <div class="video-responsive">
            <iframe src="https://www.youtube.com/embed/WSrwrxfFHII?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"   allowfullscreen></iframe>
            </div>
        `
    }
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    "": {
        "Diseño de personajes / Diagramación": "Ammy S. Machuca",
        "Programación": "Jorge Puente-Sarrín",
        "Contenido / Edición": "",
    },
    "Agradecimientos especiales": {
        "My parents": ["Mom", "Dad"], 
        "My siblings": ["Brother", "Sister"],
    },
    "Créditos de recursos externos": {
        "": "",
    }

});


// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    header: "header.png",
    banner: "banner.png"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    school: "school.png"
});


// Define the Characters
monogatari.characters ({
    'b1': {
        name: 'Bondyta',
        color: '#ff3951',
        directory: 'bondyta',
        sprites: {
            normal: "normal.png"
        }
    },
    'b2': {
        name: 'Bondyto',
        color: '#00bfff',
        directory: 'bondyto',
        sprites: {
            normal: "normal.png"
        }
    }
});

monogatari.script ({
    // The game starts here.
    'Start': [
        'show scene school with fadeIn',
        'show character b1 normal at center with fadeIn',
        'b1 Hola, mi nombre es <strong>Bondyta</strong> y desde hoy estaré acompañándote en tus clases durante el aislamiento social.',
        'b1 Bueno, como ya sabes, los profesores y nuestros padres ya habían preparado todo para el inicio de clases, pero...',
        'b1 la llegada del coronavirus COVID-19 a nuestro país hizo que los planes tengan que cambiar.',
        'b1 Sí, ya sé... hemos pasado varios días en cuarentena y eso está bien porque ¡la salud es lo más importante!',
        'b1 y cuidándonos es cómo vamos a poder cuidar a los demás.',
        'b1 ¡Ups!, creo que he hablado demasiado y no te he dejado ni siquiera decir tu nombre...',
        {
            'Input': {
                'Text': '¿Cómo te llamas?',
                'Validation': function (input) {
                    return input.trim().length > 0;
                },
                'Save': function (input) {
                    this.storage ({
                        player: {
                            name: input
                        }
                    });
                    return true;
                },
                'Revert': function () {
                    this.storage ({
                        player: {
                            name: ''
                        }
                    });
                },
                'Warning': 'Me gustaría saber tu nombre, por favor dímelo.'
            }
        },
        'b1 ¡Es un gusto conocerte, {{player.name}}!',
        'b1 Te cuento que el Gobierno está haciendo todo lo posible para que nuestra educación no se vea afectada',
        'b1 y es por eso que ha creado el programa de educación a distancia llamado "Aprendo En Casa".',
        'b1 De esta manera podremos seguir aprendiendo desde nuestras casas...',
        'b1 ya sea a través de radio, televisión o internet a partir del 6 de abril.',
        {
            'Choice': {
                'Dialog': 'b1 Cuéntame tú ahora, ¿en qué nivel estás?',
                'Yes': {
                    'Text': 'Primaria',
                    'Do': 'jump Primary'
                },
                'No': {
                    'Text': 'Secundaria',
                    'Do': 'jump Secondary'
                }
            }
        }
    ],
    'BroadcastingDetails': [
        'b1 Así que podrás ver las clases a través del canal TV Perú y el canal IPe en el horario que mencioné',
        'b1 y por cierto, si estos canales no los puedes sintonizar en tu televisor, los puedes ver por internet...',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres ver algún canal ahora mismo?',
                'TVPerú': {
                    'Text': 'Quiero ver TVPerú',
                    'Do': openTVPeru
                },
                'IPe': {
                    'Text': 'Quiero ver el canal IPe',
                    'Do': openIPe
                },
                'No': {
                    'Text': 'Quizás más tarde',
                    'Do': 'b1 No hay problema, me puedes volver a preguntar más tarde si gustas.'
                }
            }
        },
        'b1 A la hora que te corresponda según tu grado, también podrás escuchar las lecciones por Radio Nacional',
        'b1 y si quisieras, también puedo hacer que escuches la radio ahora mismo...',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres escuchar Radio Nacional?',
                'RadioNacional': {
                    'Text': 'Sí, por favor',
                    'Do': openRadioNacional
                },
                'No': {
                    'Text': 'Quizás en otro momento',
                    'Do': 'b1 No hay problema, de igual manera puedes consultármelo cuando desees.'
                }
            }
        },
        'jump End'
    ],
    'End': [
        // 'show character b1 goodbye at center',
        'b1 Antes de despedirme, quisiera recordarte que no debes salir de casa, sé que quieres salir a jugar...',
        'b1 y pasear pero en estos momentos son únicamente los adultos quienes podrán salir a comprar alimentos o medicinas.',
        'b1 Recuerda siempre lavarte las manos y por más de 20 segundos, déjame mostrarte un vídeo de cómo hacerlo correctamente.',
        'show message HandwashingVideo',
        'b1 ¡Hasta la próxima, {{player.name}}!',
        'hide character b1 with fadeOut',
        'show background #ed1b24 with fadeIn duration 7s',
        `
            centered <p style="color:#fff;font-size:32px;">#YoMeQuedoEnCasa<p>
            <br>
            <p style="color:#fff;font-size=24px;">
                asb.edu.pe<br>
                facebook.com/ieasb88047
            </p>
        `.trim(),
        'end'
    ]
});

var openAprendoEnCasaPrimary = function() {
    return openNewWindow('https://aprendoencasa.pe/#/nivel/primaria');
}

var openAprendoEnCasaSecondary = function() {
    return openNewWindow('https://aprendoencasa.pe/#/nivel/secundaria');
}

var openTVPeru = function() {
    return openNewWindow('https://www.tvperu.gob.pe/play');
}

var openIPe = function() {
    return openNewWindow('https://www.canalipe.tv/streaming');
}

var openRadioNacional = function() {
    return openNewWindow('https://radionacional.com.pe/envivo');
}

function openNewWindow(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
