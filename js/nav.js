$(document).ready(function () {

    /* Що відбуватиметься після кліку на гамбургер */

    $('.nav-icon').click(function () {
        $(this).toggleClass('open'); /* По кліку на гамбургер перемикати клас */
        $('.navigation').toggleClass('open');

        if ($('.navigation .overlay').length > 0) {
            $('.navigation .overlay').remove();
        } else {
            $('.navigation').prepend('<div class="overlay"></div>');
            $('.navigation .overlay').click(function () {
                $('.nav-icon').removeClass('open');
                $('.navigation').removeClass('open');
                $('.navigation .overlay').remove(); /* Видалити елемент з класом overlay */
            });
        }
    });

    $('.nav-link').click(function () {
        if ($('.navigation .overlay').length > 0)
            $('.navigation .overlay').remove();
        if ($('.navigation').hasClass('open'))
            $('.navigation').removeClass('open');
        if ($('.nav-icon').hasClass('open'))
            $('.nav-icon').removeClass('open');
        return true; /* Виконати перехід по лінку */
    });
});