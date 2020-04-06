monogatari.script ({
    'Primary': [
        'b1 ¡Qué bien! Yo acabé la primaria ya hace 2 años.',
        'b1 Bueno, ahora que ya sé que estudias en primaria, debo comentarte que puedes encontrar todas las actividades en aprendoencasa.pe',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres que abra la página aprendoencasa.pe?',
                'AprendoEnCasa': {
                    'Text': 'Sí, por favor',
                    'Do': openAprendoEnCasaPrimary
                },
                'No': {
                    'Text': 'Quizás en otro momento',
                    'Do': 'b1 No hay problema, puedes entrar tú mismo cuando desees.'
                }
            }
        },
        'b1 Te cuento que el Gobierno va a transmitir las actividades de acuerdo al siguiente horario:',
        'show message SchedulingPrimary',
        'jump BroadcastingDetails'
    ]
});
