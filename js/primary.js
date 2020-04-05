monogatari.script ({
    'Primary': [
        'b1 ¡Qué bien! Yo acabé la primaria ya hace 2 años.',
        'b1 Bueno, ahora que ya sé que estudias en primaria, debo comentarte que puedes encontrar todas las actividades en aprendoencasa.pe',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres que abra la página aprendoencasa.pe?',
                'RadioNacional': {
                    'Text': 'Sí, por favor',
                    'Do': openAprendoEnCasaPrimary
                },
                'No': {
                    'Text': 'Quizás en otro momento',
                    'Do': 'b1 No hay problema, puedes entrar tú mismo cuando desees.'
                }
            }
        },
        'b1 Te cuento que el Gobierno va a transmitir las acividades de acuerdo a la siguiente programación:',
        'show message SchedulingPrimary',
        'b1 así que podrás ver las clases a través del canal TV Perú y el canal IPe y también escucharlas por Radio Nacional',
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
        'b1 A la hora que te corresponda, también podrás escuchar las lecciones por Radio Nacional...',
        'b1 y si gustas, también puedo hacer que escuches la radio ahora mismo',
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
    ]
});
