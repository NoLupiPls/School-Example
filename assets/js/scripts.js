$(function() {
    let header = $('.header');
    let mobileTel = $('.header__tel').first(); // сохранем в переменную первый элемент с классом header__tel
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': 0 + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': '0px' // удаляю отступ у body, равный высоте шапки
            })
        }

        if ($(this).scrollTop() > 300) {
            header.css({
                'padding': '0px 0'
            });
        } else {
            header.css({
                'padding': '15px 0',
                'transition': '.3s'
            });
        }
    });
});