document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // Koristi viewport kao root
        rootMargin: '0px 0px -20% 0px', // Postavi donji margin na -20% visine viewport-a
        threshold: 0 // Pokreće animaciju kada je bilo koji deo elementa vidljiv
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Prekida posmatranje nakon animacije
            }
        });
    }, options);

    document.querySelectorAll('.crossed').forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                
                spaceBetween: 100,
            },
        },
    });
});