/// Tile animation

const tilesL = document.querySelectorAll('.tileLeft');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `tileLeftAnim .4s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
})
tilesL.forEach(tile => {
    observer.observe(tile)
})

const tilesR = document.querySelectorAll('.tileRight');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `tileRightAnim .4s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
})
tilesR.forEach(tile => {
    observer.observe(tile)
})

const tilesB = document.querySelectorAll('.tileBottom');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `tileBottomAnim .4s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
})
tilesB.forEach(tile => {
    observer.observe(tile)
})

/// Side navigation bar animation & function

const nav = document.querySelectorAll('.naval');
const navOptions = {
    rootMargin: "500px 0px -100px 0px"
};

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `navalanim .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
},
navOptions);
nav.forEach(tile => {
    observer.observe(tile)
})

/// Signifies viewed section status

const status0 = document.querySelector(".naval0-status");
const pro0 = document.querySelector(".project0-section");

const sectionZeroOptions = {
    rootMargin: "-100px 0px -100px 0px"
};

const sectionZeroObserver = new IntersectionObserver(function(
    entries, 
    sectionZeroObserver
){
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            status0.classList.add('naval-selected');
        }
        else {
            status0.classList.remove('naval-selected');
        }
    })
}, 
sectionZeroOptions);

sectionZeroObserver.observe(pro0);

/////////

const status1 = document.querySelector(".naval1-status");
const pro1 = document.querySelector(".project1-section");

const sectionOneOptions = {
    rootMargin: "-100px 0px -100px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
){
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            status1.classList.add('naval-selected');
        }
        else {
            status1.classList.remove('naval-selected');
        }
    })
}, 
sectionOneOptions);

sectionOneObserver.observe(pro1);

/////////

const status2 = document.querySelector(".naval2-status");
const pro2 = document.querySelector(".project2-section");

const sectionTwoOptions = {
    rootMargin: "-100px 0px -150px 0px"
};

const sectionTwoObserver = new IntersectionObserver(function(
    entries, 
    sectionTwoObserver
){
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            status2.classList.add('naval-selected');
        }
        else {
            status2.classList.remove('naval-selected');
        }
    })
}, 
sectionTwoOptions);

sectionTwoObserver.observe(pro2);

/////////

const status3 = document.querySelector(".naval3-status");
const pro3 = document.querySelector(".project3-section");

const sectionThreeOptions = {
    rootMargin: "-100px 0px -150px 0px"
};

const sectionThreeObserver = new IntersectionObserver(function(
    entries, 
    sectionThreeObserver
){
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            status3.classList.add('naval-selected');
        }
        else {
            status3.classList.remove('naval-selected');
        }
    })
}, 
sectionThreeOptions);

sectionThreeObserver.observe(pro3);

/////////

const navno = document.querySelector(".naval-vp");
const prono = document.querySelector(".project-no");

const sectionFourOptions = {
    rootMargin: "-100px 0px -100px 0px"
};

const sectionFourObserver = new IntersectionObserver(function(
    entries, 
    sectionFourObserver
){
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            navno.classList.add('dissapear');
        } 
        else {
            navno.classList.remove('dissapear');
        }
    })
},
sectionFourOptions);

sectionFourObserver.observe(prono);

///////

/// Burger Animation

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



