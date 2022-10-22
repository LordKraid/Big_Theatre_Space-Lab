const swiperMain = new Swiper('.main__swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'cards',

    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    }
});

const swiperMainPsevdo = new Swiper('.main__swiper_psevdo', {
    slidesPerView: 1,
    loop: true,
    effect: 'cards',

    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    }
});

const swiperProduction = new Swiper('.productions__swiper', {
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 1.55,
        },
        0: {
            slidesPerView: 1.1,
        }
    }
});

const swiperPartnersTop = new Swiper('.partners__swiper_top', {
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2 ,
        }
    }
});

const swiperPartnersBottom = new Swiper('.partners__swiper_bottom', {
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2 ,
        }
    }
});



let checkbox = document.getElementById('menu-toggle')

checkbox.onclick = () => {
    if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
    } else{
        document.body.style.overflow = 'visible';
    }
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
    else {document.querySelector('header').classList.remove('scrolled')}
  });