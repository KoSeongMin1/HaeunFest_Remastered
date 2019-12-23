$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
})
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
})



$("#noticeBtn").click(function(){
    $("#notice").show();
    $("#noticeBtn").css({backgroundColor:"#000000"});
    $("#gallery").hide();
    $("#galleryBtn").css({backgroundColor:"#aaaaaa"});
})
$("#galleryBtn").click(function(){
    $("#gallery").show();
    $("#galleryBtn").css({backgroundColor:"#000000"});
    $("#notice").hide();
    $("#noticeBtn").css({backgroundColor:"#aaaaaa"});
})
$("#noticeBtn").focus(function(){
    $("#notice").show();
    $("#noticeBtn").css({backgroundColor:"#000000"});
    $("#gallery").hide();
    $("#galleryBtn").css({backgroundColor:"#aaaaaa"});
})
$("#galleryBtn").focus(function(){
    $("#gallery").show();
    $("#galleryBtn").css({backgroundColor:"#000000"});
    $("#notice").hide();
    $("#noticeBtn").css({backgroundColor:"#aaaaaa"});
})



$(".onClick").click(function(){
    $("#modal").show();
})
$(".modalbutton").click(function(){
    $("#modal").hide();
})