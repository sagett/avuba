$(document).ready(function(){
	for (var i = 0; i <= 3000; i ++) {
	console.log(i);
		$(".wrapper").append("<div>" + i + "</div>");	
	}
});

