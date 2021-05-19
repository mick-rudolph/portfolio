const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar div');
    const projects = document.querySelector('.projects');
    const contact = document.querySelector('.contact');

    burger.addEventListener('click',() => {
        ///Toggle Nav
        nav.classList.toggle('nav-active');

        ///Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
            link.style.animation = `navLinkFade .5s ease forwards  ${index / 7 + .5}s`;
            }
        });
        ///Burger Animation
        burger.classList.toggle('toggle');

    });

    projects.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
            link.style.animation = `navLinkFade .5s ease forwards  ${index / 7 + .5}s`;
            }
        });
    })

    contact.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
            link.style.animation = `navLinkFade .5s ease forwards  ${index / 7 + .5}s`;
            }
        });
    })


};

navSlide();
