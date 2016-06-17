////////Changes Elements back to original style////////////
var CarLot = (function (newCarlot) {
var editedCars = document.getElementsByClassName("newClass");

	newCarlot.resetBorder = function() {
		for (var i = 0; i < editedCars.length; i++) {
			editedCars[i].classList.remove("newClass");
		}
	}

////////Changes border to assigned color in functions argument//////////
	newCarlot.changeBorder = function (element, color) {
        element.style.border = "thick solid"; /////////changes border to thick//////
        element.style.backgroundColor = color;///////////changes to a color that is an argument in the function on events.js/////////
    }
	return newCarlot;

})( CarLot || {});