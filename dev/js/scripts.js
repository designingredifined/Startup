$(function(){
    $('#grid img').stop().animate({'opacity':0},0);
    $('#grid img').each(function(i) {
        if (this.complete) {
            $(this).stop().animate({'opacity':1},1000);
        } else {
            $(this).load(function() {
                $(this).stop().animate({'opacity':1},1000);
            });
        }
    });

    $(".legal").hover(function(){
        $(".legal-text").css({"color": "#0099cc"});
        $(".legal-pic img").animate({bottom: "+=10px",right:"+=10px"},100).attr("src","img/legal-color.png");
    },function(){
        $(".legal-text").css({"color": "#464646"});
        $(".legal-pic img").animate({bottom: "0",right:"0"},100).attr("src","img/legal.png");
    });

    $(".financial").hover(function(){
        $(".financial-text").css({"color": "#0099cc"});
        $(".financial-pic img").animate({bottom: "+=10px",left:"+=10px"},100).attr("src","img/financial-color.png");
    },function(){
        $(".financial-text").css({"color": "#464646"});
        $(".financial-pic img").animate({bottom: "0",left:"0"},100).attr("src","img/financial.png");
    });

    $(".strategic").hover(function(){
        $(".strategic-text").css({"color": "#0099cc"});
        $(".strategic-pic img").animate({top: "+=10px",right:"+=10px"},100).attr("src","img/strategic-color.png");
    },function(){
        $(".strategic-text").css({"color": "#464646"});
        $(".strategic-pic img").animate({top: "0",right:"0"},100).attr("src","img/strategic.png");
    });

    $(".mentor").hover(function(){
        $(".mentor-text").css({"color": "#0099cc"});
        $(".mentor-pic img").animate({top: "+=10px",left:"+=10px"},100).attr("src","img/mentor-color.png");
    },function(){
        $(".mentor-text").css({"color": "#464646"});
        $(".mentor-pic img").animate({top: "0",left:"0"},100).attr("src","img/mentor.png");
    });

    $(".project-item").hover(function(){
        $(this).find(".project-desc").slideDown().show();
        $(this).animate({opacity : 1},300);
    },function(){
        $(this).find(".project-desc").slideUp();
        $(this).animate({opacity : 0.7},300);
    });

    $(".backer-item").hover(function(){
        $(this).find(".backer-desc").slideDown().show();
    },function(){
        $(this).find(".backer-desc").slideUp();
    });


    //SLIDER JQUERY
    var slider_width = $(".backer-li").width() + 25;
    var slider_containerWidth = slider_width * $(".backer-li").length;
    $(".backer-slider-container").css({"width": slider_containerWidth});
    $(".right-btn").click(function(){
        var checkslider = false;
        checkslider = $('.backer-li:last-child').visible();
        if(checkslider == false){
            $(".backer-slider-container").animate({marginLeft: "-="+ slider_width});
        }
        else{
            $(".right-btn").css({"visibility": "hidden"});
        }
        var checkslider2a = $('.backer-li:last-child').visible();
        if(checkslider2a == false){
            $(".left-btn").css({"visibility": "visible"});
        }
    });

    $(".left-btn").click(function(){
        var checkslider2 = false;
        checkslider2 = $('.backer-li:first-child').visible();
        if(checkslider2 == false){
            $(".backer-slider-container").animate({marginLeft: "+="+ slider_width});
        }
        else{
            $(".left-btn").css({"visibility": "hidden"});
        }
        var checkslider1a = $('.backer-li:first-child').visible();
        if(checkslider1a == false){
            $(".right-btn").css({"visibility": "visible"});
        }
    });

});
