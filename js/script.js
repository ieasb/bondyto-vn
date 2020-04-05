/* global monogatari */

monogatari.component ('main-screen').template (() => {
    return `
        <div class="headerbar">
            <a href="https://asb.edu.pe"><img src="assets/images/header.png" /></a>
        </div>
        <h1>COVID-19</h1>
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
    /*'Welcome': {
        title: 'Welcome',
        body: 'This is the Monogatari VN Engine',
        icon: ''
    }*/
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
        'b1 Hola, mi nombre es Bondyta y estaré acompañándote en tus clases durante el tiempo de cuarentena.',
        {
            'Input': {
                'Text': '¿Cuál es tu nombre?',
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
        'b1 Te cuento que nuestros profesores están preparándose para volver a las aulas.',
        'b1 Sí, ya sé, hemos pasado varios días en cuarentena por la coronavirus 2019 (COVID-19)',
        {
            'Choice': {
                'Dialog': 'b1 ¿En qué nivel estás?',
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
    'End': [
        // 'show character b1 goodbye at center',
        'b1 Recuerda lavarte las manos a menudo y no salir de casa. ¡Chao!',
        'hide character b1 with fadeOut',
        'show background #ed1b24 with fadeIn duration 7s',
        `
            centered <p style="color:#fff;font-size:32px;">#YoMeQuedoEnCasa<p>
            <br>
            <p style="color:#fff;font-size=24px;">asb.edu.pe</p>
        `.trim(),
        'end'
    ]
});
