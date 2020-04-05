monogatari.script ({
    'Primary': [
        'b1 ¡Qué bien! Yo acabé la primaria ya hace 2 años.',
        'b1 Bueno, ahora que ya sé que estudias en primaria, debo comentarte que...',
        'b1 podrás ver las clases a través del canal TV Perú y el canal IPe a las 10:30 de la mañana',
        'b1 Y por cierto, estos dos canales también los puedes ver por internet...',
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
        'b1 A la misma hora, o sea a las 10:30 de la mañana, podrás también escuchar la lección por Radio Nacional...',
        'b1 y si gustas también puedo hacer que escuches la radio ahora mismo',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres escuchar Radio Nacional?',
                'TVPerú': {
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
