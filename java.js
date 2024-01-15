var typed = new Typed(".typing",{
    strings:["developer","web desgin","freelancer","progreming"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typing-2",{
    strings:["developer","web desgin","freelancer","progreming"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>500){
            $(".scroll-up").addClass("show");
        }else{
            $(".scroll-up").removeClass("show");
        }
    });
    $(".menu-btn").click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //scroll-btn
    $(".scroll-up").click(function(){
        $('html').animate({scrollTop:0});
    });
});