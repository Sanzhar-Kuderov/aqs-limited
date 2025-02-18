
Fancybox.bind();

document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.body').classList.add('no-scroll');
    document.querySelector('.smartphone-header').classList.add('active');
})
document.querySelector('#smartphone_menu_exit').addEventListener('click', function () {
    document.querySelector('.body').classList.remove('no-scroll');
    document.querySelector('.smartphone-header').classList.remove('active')
})


$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
};

$("input[type='tel']").click(function () {
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");


$('.content-vacancy__column-info').click(function (event) {
    $(this).next().slideToggle(300);
    $('.content-vacancy__column-body').toggleClass('active');
})

$('.news-home__content').slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
})

$('.client-home__content').slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 6,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
})

$('.certificate-about__content').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
})

$('.team-about__row').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
})