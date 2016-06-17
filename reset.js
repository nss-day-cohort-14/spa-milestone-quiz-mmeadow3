// The final IIFE should augment the object with two more functions.
//  One function resets the border thickness and background color for each 
//  car element back to the original values. The other function changes the 
//  thickness of the border of a car element, and changes its background color. 
//  The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.

var CarLot = (function (newCarlot) {

	newCarlot.resetBorder = function(event) {
		var editedCars = document.getElementsByClassName("carClass");
		for (var i = 0; i < editedCars.length; i++) {
			editedCars[i].classList.remove("newClass")
			;	
		}
	},

	return newCarlot;

})( CarLot || {});