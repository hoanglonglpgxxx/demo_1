$(document).ready(function () {
    $('.slider-box__item').hover(function () {
        $('.slider-box__item').removeClass('active');
        $(this).toggleClass('active');
    });
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $(".navbar").position();
        if (y > x.top) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('#backToTop').show();
        } else {
            $('#backToTop').hide();
        }
    }
    $('#backToTop').click(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            $('.news-right .news-right__box').last().hide();
        }
    }).resize();
});
