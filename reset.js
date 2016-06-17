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
        console.log("function has fired."); ////firing on click now/////////
        element.classList.remove("carClass");
        element.classList.add("newBackground");
        element.style.backgroundColor = color;
    }
	return newCarlot;

})( CarLot || {});