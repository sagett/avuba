var top = document.scrollTop;
var width = window.innerWidth;
var height = window.innerHeight;
var boundingRect = elem.getBoundingClientRect();


$(document).ready(function(){
	for (var i = 0; i <= 3000; i ++) {
	console.log(i);
		$(".numbers").append("<li>" + i + "</li>");	
	}
});

