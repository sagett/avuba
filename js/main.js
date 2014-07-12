//creating a container 
var container;

//creating array container
var array = [];

//measurepoint for the scrollposition
var measurepoint = 7;

//getting vertical scrollpositon
var bodyScrollTop = $(".wrapper");
var scrollPos = bodyScrollTop.scrollTop;


//populating the array
for (var i = 0; i < 3000; i++) {
	//filling the array
	array.push(i);
}

//console.log(array);

//running the function when document is loaded
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
	   container = document.getElementsByClassName('numbers');
	   populateContainer();
	}
}


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


console.log(scrollPos);

