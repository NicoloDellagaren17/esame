document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('toggle');
    });

    // Slider Portfolio
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Modale per Immagini del Portfolio
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');
    const portfolioImgs = document.querySelectorAll('.portfolio-img');

    portfolioImgs.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Effetto di Scorrimento (Scroll Animation)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});
