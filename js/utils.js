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
    return win;
}
