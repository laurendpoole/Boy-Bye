$(document).ready(function() {
	console.log("hellooo, it's me")



$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});



});