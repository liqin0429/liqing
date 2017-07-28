$(function(){
    $(".shipin").click(function(){
        $("section").slideDown(500);
        $(".shipin").hide();
    })
    $(".tianqi1").click(function(){
    	$(".tianqi").css("display","block");
    	
    })
    $(".tianqi span").click(function(){
    	$(".tianqi").css("display","none");
    });
    $(".lizi").click(function(){
    	$("#lizi").css("display","block");
    });
    $("#lizi").click(function(){
    	$("#lizi").css("display","none");
    });
    $(".left").click(function(){
    	$("section").slideUp(500);
    	 $(".shipin").show();
    })
    $(".right").click(function(){
    	$("section").slideUp(500);
    	$(".shipin").show(500);
    	
    })
})