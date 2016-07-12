var CarLot = (function (newCarlot) {

newCarlot.resetBorder = function() {
		var editedCars = document.getElementsByClassName("cars");
		for (var i = 0; i < editedCars.length; i++) {
			editedCars[i].classList.remove("newClass");
			editedCars[i].style.backgroundColor = "";
		};
};
	
	newCarlot.changeBorder = function (event, color) {
       event.style.backgroundColor = color;
       // event.classList.remove("newCar");
	   event.classList.add("newClass");
 }

	return newCarlot;

})( CarLot || {});