var CarLot = function(newCarlot) {
	
	var selectedCar;
	var carToEdit;
	
	newCarlot.activateEvents = function() {
		var cars = document.getElementsByClassName("cars");

		for (var i = 0; i < cars.length; i++) {
			selectedCar = cars[i];
			selectedCar.addEventListener("click", CarLot.resetBorder); ////////////////////////////Try moving this////////////
			selectedCar.addEventListener("click", function() {
				carToEdit = event.currentTarget;
				CarLot.changeBorder(event.currentTarget, "red")
				textInput.focus(); 
				textInput.value = ""; 
				textInput.addEventListener("keyup", function() {
					if (event.keyCode === 13) {
						textInput.value = "";
				}; 
					var paragraph = document.getElementById("description--" + carToEdit.id.split("--")[1]);
					var userText = textInput.value;
	   				paragraph.innerHTML = userText; 
				})
			});	
		}
	};
return newCarlot;

}(CarLot || {});


