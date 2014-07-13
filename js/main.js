//creating a container 
var container;

//creating array container
var array = [];

//measurepoint for the scrollposition
var measurepoint = 7;

/* getting vertical scrollpositon
var scrollPos = $('.container').scrollTop();
*/

//initiaiting scrollvalue as measurepoint
var old_scroll_top = 100;

//populating the array
for (var i = 0; i < 3000; i++) {
	//filling the array
	array.push(i);
}

//console.log(array);

//running the function when document is loaded
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		container = $("#container");
		container.scroll(scrolling);
		populateContainer();
		scrolling();
		}
}

$(document).scroll(scrolling);


var populateContainer = function () {
	
	//displaying 15 elements
	for (var i = 0; i < 15; i++) {

	//writing the 15 elements to the DOM	
        var tmpDOM = document.createElement("li");
        var t = document.createTextNode(i);
        tmpDOM.appendChild(t);
        tmpDOM.className = 'numELEM';

        container[0].appendChild(tmpDOM);
	}
}


function scrolling () {
	console.log("Scrolling");
	//getting current scroll position
	var current_scroll_top = container.scrollTop();
	//getting scroll delta
	var scroll_delta = current_scroll_top - old_scroll_top;
	old_scroll_top = current_scroll_top;

	//always being able to scroll
	if ((100 > old_scroll_top) || (old_scroll_top > 200)) {
	old_scroll_top = 10;
	$(document).scrollTop(10);
	}
	
	
	if (scroll_delta < 50) {
	
	
	} else if (scroll_delta > 190) {
	
	}

	console.log(current_scroll_top);
	console.log("delta " + scroll_delta);
}
