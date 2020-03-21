var slider = $("#slider");
var sig = $('#btn-next');
var ante = $('#btn-prev');

$('#slider section:last').insertBefore('#slider seccion:first');

slider.css('margin-left', '-'+100+'%');

function moverD() {
    slider.animate({
    marginleft:'-'+200+'%'
    } ,700, function() {
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-'+100+'%');
    });
}

sig.on('click', function() {
    moverD();
});

function moverI() {
    slider.animate({
    marginleft:0
    } ,700, function() {
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left', '-'+100+'%');
    });
}

ante.on('click', function() {
    moverI();
});

function autoplay() {
    interval = setInterval(function(){
        moverD();
    }, 3000);
}

autoplay();