$(document).ready(function () {
    $('.button').fadeOut();
    $('#Team').hover(function () {
        $('.button').fadeIn();
    }, function () {
        $('.button').fadeOut();
    });
});

/*
var startingNumber = 1;


$(window).ready(function () {
    $('.about').hide();
    $('#id1').show();
    $("#table").hide();
});

function textforward() {
    startingNumber += 1;
    numbCheck();
    $('.about').hide();
    $('#id' + startingNumber).show();

}

function textback() {
    startingNumber -= 1;
    numbCheck();
    $('.about').hide();
    $('#id' + startingNumber).show();

}

function numbCheck() {
    if (startingNumber < 1) {
        startingNumber = 1;
    }

    if (startingNumber > 3) {
        startingNumber = 3;
    }
}
*/