$(document).ready(function(){
});

$('.intro-box').animate({width: 0, marginRight: 0}, {duration: 1000});
$(window).on('load', function() {
    $('.intro-box').animate({width: "400px", marginRight:0},500,"swing",function(){
        $('.intro').css({"opacity":"1"});
            $('.intro-box').animate({width: 0, right: "-400px"}, {duration: 2000}, "swing",);
            $('.intro-box').animate({width: "130px", marginRight:0},600,"swing",function(){
                $('.intro-box2').fadeIn(2500);
            });
            $('.intro-subtext').fadeIn(5000,function(){
                $('#hero-button').fadeIn(2000);
                $('.view-projects').fadeIn(5000);
            });
    });
});


// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();

// Scrollify stuff, doesn't work

// $(function() {
//     $.scrollify({
//       section : ".project1",
//     });
//   });

//   $(function() {
//     $.scrollify({
//       section : ".example-classname",
//     });
//   });

// window.addEventListener('scroll',function(e){

//     const target = document.querySelector('.yo');

//     target.style.transform = 'translate3d(-300px,200px,0px)';

// });