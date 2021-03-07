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




$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).scroll(function () {
    if ($('#yo1').isInViewport()) {
        $("#naval1").css("background-color","#2E2E2E").css("opacity","1");  
        $("#naval2").css("background-color","#D5D5D5").css("opacity","1");  
        $("#naval3").css("background-color","#D5D5D5").css("opacity","1");   
        console.log('success.')
    } 
    if ($('#yo2').isInViewport()) {
        $("#naval1").css("background-color","#D5D5D5").css("opacity","1");  
        $("#naval2").css("background-color","#2E2E2E").css("opacity","1");  
        $("#naval3").css("background-color","#D5D5D5").css("opacity","1");  
    } 
    if ($('#yo3').isInViewport()) {
        $("#naval1").css("background-color","#D5D5D5").css("opacity","1");  
        $("#naval2").css("background-color","#D5D5D5").css("opacity","1");  
        $("#naval3").css("background-color","#2E2E2E").css("opacity","1");  
    } 
    if ($('#contact-page').isInViewport()) {
        $("#naval1").css("opacity","0");
        $("#naval2").css("opacity","0");
        $("#naval3").css("opacity","0");
    } 
});





