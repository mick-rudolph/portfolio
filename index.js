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
                $('#view-projects').fadeIn(5000);
            });
          
    });
});


// $('.intro-box').animate({width: 0, marginRight: 0}, {duration: 1000});
// $(window).on('load', function() {
//     $('.intro-box').animate({width: "305px", marginRight:0},1000,);
//         $('.intro').fadeIn(100);
//             $('.intro-box').animate({width: 0, right: "-305px"}, {duration: 1500}, "swing");
//                 $('.intro-box').animate({width: "115px", marginRight:0},1000);
// });





document.documentElement.classList.add('preparation');
window.onload = function() {
    document.documentElement.classList.remove('preparation');
};