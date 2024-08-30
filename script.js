document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('white');
    } else {
        navbar.classList.remove('white');
        navbar.classList.add('transparent');
    }
});

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
    divisor.style.width = slider.value+"%";
}
