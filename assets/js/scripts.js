$(function() {
    let header = $('.header');
    let mobileTel = $('.header__tel').first();
    let hederHeight = header.height();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': 0 + 'px'
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': '0px'
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