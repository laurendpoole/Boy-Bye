$(document).ready(function() {
		console.log("hellooo, it's me");
		

$(".fancybox").fancybox({
		padding: 0 // remove white border
		
	});	

$('.image').fancybox({
  padding: 0,
  helpers: {
    overlay: {
      locked: false
    }
  }
});

$(".contentDiv").click(function(){
    $("html,body").animate({
        scrollTop: $(".main").offset().top},
        "slow");
});
});


