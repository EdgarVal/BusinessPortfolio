$(".info").hide();

$(".show").mouseover(function() {
    $(this).find("*").toggleClass("active");
    
    if($(".active")) {
        $(".active").stop().slideDown("slow");
    } else {
        $(".info").hide();
    };

    $(this).css({"cursor": "pointer"});
});

$(".show").mouseout(function() {
    $(this).find("*").removeClass("active");
    $(".info").stop().slideUp("slow");
});
