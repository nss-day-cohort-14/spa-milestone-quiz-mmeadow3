// The final IIFE should augment the object with two more functions.
//  One function resets the border thickness and background color for each 
//  car element back to the original values. The other function changes the 
//  thickness of the border of a car element, and changes its background color. 
//  The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.

var CarLot = (function (newCarlot) {
// var editedCars = document.getElementsByClassName("newClass");
var editedCars = document.getElementsByClassName("carClass");

	newCarlot.resetBorder = function() {
		console.log("editedCars", editedCars)
		console.log("editedCars.length", editedCars.length)
		for (var i = 0; i < editedCars.length; i++) {
			console.log("HELLO?")
			editedCars[i].classList.remove("newClass");
			// editedCars[i].classList.add("newBackground"); /////why is this not going back to "carClass", x needs to be defined
		}
	}


	newCarlot.changeBorder = function (element, color) {
        console.log("addSelectedClass has fired."); ////firing on click now/////////
        // element.classList.remove("carClass");
        // element.classList.add("newBackground");
        // element.style.backgroundColor = color;
    }
	return newCarlot;

})( CarLot || {});