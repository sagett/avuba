var top = document.scrollTop;
var width = window.innerWidth;
var height = window.innerHeight;
//var boundingRect = elem.getBoundingClientRect();


var elements = [];


$(document).ready(function(){
	for (var i = 0; i <= 3000; i ++) {
	console.log(i);
		$(".numbers").append("<li>" + i + "</li>");	
	}
});

$(function() {
	//offset
	var fIOFS = 0; // firstItemOffsetFromStart
	// Will need to be updated when children changes from dataview
	var cChildren = $(".container").children();

});
