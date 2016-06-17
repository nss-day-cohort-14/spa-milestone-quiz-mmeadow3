var CarLot = function(newCarlot) {
	/////This will augment the original CarLot with a new function/////////
	///////////declare these vars outside scope of functions//////////////////
	var selectedCar;
	var carToEdit;
	var savedInput = [];
	newCarlot.activateEvents = function() {
		var cars = document.getElementsByClassName("carClass");

		for (var i = 0; i < cars.length; i++) {
			selectedCar = cars[i];
			///////////Add styling to card on click and remove styling from other cards; focus text input
			selectedCar.addEventListener("click", function() {
				CarLot.resetBorder(); /////This is from the IIFE augmentation on "reset.js"
				///// console.log("current target", event.currentTarget); ////////shows the DIV being clicked on///////
				//////Save the event.currentTarget so it can be used in other functions
				carToEdit = event.currentTarget;
				CarLot.changeBorder(event.currentTarget, "red"); /////
				///////////////////////////////////////////////////////
				/////This will add styling set in CSS under .newClass/////////////////////
				carToEdit.classList.add("newClass");	
				textInput.focus(); //////focuses on Input box defined on quiz.js///////////
				///////////KEY UP FUNCTION FOR ENTER KEY//////////////////////
				textInput.addEventListener("keyup", function() {
					////ENTER KEY RESET////////////////////////
					if (event.keyCode === 13) {
						textInput.value = "";
					} /////immediately make text changes to description/////////
					////////Change Description as user types//////////////////
					var paragraph = document.getElementById("description--" + carToEdit.id.split("--")[1]);
					var userText = textInput.value;
	   				paragraph.innerHTML = userText;  ////////This takes selected element and will overwrite text//////////////////
				})
			});

		}////////END FOR LOOP////////////////
	};


		return newCarlot;

}(CarLot || {});