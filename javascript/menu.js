
document.addEventListener('DOMContentLoaded', function () {

    animateOnLoad();


    function animateOnLoad() {

        var elementsToAnimate = document.querySelectorAll('.animate-on-load');


        elementsToAnimate.forEach(function (element) {

            element.classList.add('animate__animated', 'animate__fadeIn');
        });
    }


    function animateOnScroll() {

        var elementsToAnimate = document.querySelectorAll('.animate-on-scroll');


        elementsToAnimate.forEach(function (element) {

            if (isElementInViewport(element)) {

                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }


    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    window.addEventListener('scroll', function () {
        animateOnScroll();
    });
});
