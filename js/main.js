$(document).ready(function() {
 console.log("hellooo, it's me");

$(".contentDiv").click(function(){
    $("html,body").animate({
        scrollTop: $(".main").offset().top},
        "slow");
});
});
