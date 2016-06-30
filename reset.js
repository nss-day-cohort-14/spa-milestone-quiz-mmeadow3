////////Changes Elements back to original style////////////
var CarLot = (function (newCarlot) {

	newCarlot.resetBorder = function() {
var editedCars = document.getElementsByClassName("cars");
		for (var i = 0; i < editedCars.length; i++) {
			editedCars[i].classList.remove("newCar");
			editedCars[i].classList.add("carClass");
			// console.log("hello")
		}
	};

////////Changes border to assigned color in functions argument//////////
	newCarlot.changeBorder = function (event, color) {
       event.classList.remove("carClass");
       event.classList.add("newClass");//// 
 	   // event.style.backgroundColor = color;
 	   // console.log("hey")
 }

	return newCarlot;

})( CarLot || {});