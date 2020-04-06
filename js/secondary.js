monogatari.script ({
    'Secondary': [
        'b1 Excelente, ¡yo también estoy en secundaria!',
        'b1 Bueno, ahora que ya sé que estudias en secundaria, debo comentarte que puedes encontrar todas las actividades en aprendoencasa.pe',
        {
            'Choice': {
                'Dialog': 'b1 ¿Quieres que abra la página aprendoencasa.pe?',
                'AprendoEnCasa': {
                    'Text': 'Sí, por favor',
                    'Do': openAprendoEnCasaSecondary
                },
                'No': {
                    'Text': 'Quizás en otro momento',
                    'Do': 'b1 No hay problema, puedes entrar tú mismo cuando desees.'
                }
            }
        },
        'b1 Te cuento que esta semana el Gobierno va a transmitir las actividades de acuerdo al siguiente horario:',
        'show message SchedulingSecondary',
        'jump BroadcastingDetails'
    ]
});
