//creating a container 
var container;

//creating array container
var array = [];

//measurepoint for the scrollposition
var measurepoint = 7;

// the first id of the current first element in the list
var current = 0;

//initiaiting scrollvalue as measurepoint
var old_scroll_top = 100;

//populating the array
for (var i = 0; i < 3000; i++) {
	//filling the array
	array.push(i);
}


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
	
	//writing 15 elements to the DOM
	for (var i = current; i < current + 10; i++) {	
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
	
	
	if (scroll_delta <= -10) {
		//goback();
	
	} else if (scroll_delta >= 83 ) {
		advance();
	
	}

	console.log(current_scroll_top);
	console.log("delta " + scroll_delta);
}


 function advance(){
	            current++;
	            populateContainer();
}

 function goback(){
 				current--;
 				populateContainer();
 }  
