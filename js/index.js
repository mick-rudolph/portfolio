// $(document).ready(function(){
//     $( window ).resize(function() {
//         if ($(window).width() < 768 ) {
//            $('.reverse').addClass('flex-column-reverse')
//         } else {
//             $('.reverse').removeClass('flex-column-reverse');
//         }
//     });
// });

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

const nav = document.querySelectorAll('.naval');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `navalanim .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none'
        }
    })
})
nav.forEach(tile => {
    observer.observe(tile)
})

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

// nav.forEach(tile => {
//     prono.observe(tile)
// })

sectionFourObserver.observe(prono);

///////

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



// This is all the old in viewport stuff

// $.fn.isInViewport = function () {
//     let elementTop = $(this).offset().top;
//     let elementBottom = elementTop + $(this).outerHeight();

//     let viewportTop = $(window).scrollTop();
//     let viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $(window).scroll(function () {
//     if ($('#yo1').isInViewport()) {
//         $("#naval1").css("background-color","#2E2E2E").css("opacity","1");  
//         $("#naval2").css("background-color","#D5D5D5").css("opacity","1");  
//         $("#naval3").css("background-color","#D5D5D5").css("opacity","1");   
//         console.log('success.')
//     } 
//     if ($('#yo2').isInViewport()) {
//         $("#naval1").css("background-color","#D5D5D5").css("opacity","1");  
//         $("#naval2").css("background-color","#2E2E2E").css("opacity","1");  
//         $("#naval3").css("background-color","#D5D5D5").css("opacity","1");  
//     } 
//     if ($('#yo3').isInViewport()) {
//         $("#naval1").css("background-color","#D5D5D5").css("opacity","1");  
//         $("#naval2").css("background-color","#D5D5D5").css("opacity","1");  
//         $("#naval3").css("background-color","#2E2E2E").css("opacity","1");  
//     } 
//     if ($('#contact-page').isInViewport()) {
//         $("#naval1").css("opacity","0");
//         $("#naval2").css("opacity","0");
//         $("#naval3").css("opacity","0");
//     } 
// });






// var observer = new IntersectionObserver(function(entries) { console.log(entries);
// 	if(entries[0]['isIntersecting'] === true) {
// 		if(entries[0]['intersectionRatio'] === 1)
// 			document.querySelector("#message").textContent = 'Target is fully visible in screen';
// 		else if(entries[0]['intersectionRatio'] > 0.5)
// 			document.querySelector("#message").textContent = 'More than 50% of target is visible in screen';
// 		else
// 			document.querySelector("#message").textContent = 'Less than 50% of target is visible in screen';
// 	}
// 	else {
// 		document.querySelector("#message").textContent = 'Target is not visible in screen';
// 	}
// }, { threshold: [0, 0.5, 1] });

// observer.observe(document.querySelector("#target-container"));