var CarLot = function(newCarlot) {
	/////This will augment the original CarLot with a new function/////////
	///////////declare these vars outside scope of functions//////////////////
	var selectedCar;
	var carToEdit;

	newCarlot.activateEvents = function() {
		var cars = document.getElementsByClassName("carClass");
		for (var i = 0; i < cars.length; i++) {
			selectedCar = cars[i];
			////////// console.log("selected carClass in for loop", cars[i]);///////////// shows the DIV being selected
			///////////Add styling to card on click and remove styling from other cards; focus text input
			selectedCar.addEventListener("click", function() {
				///// console.log("current target", event.currentTarget); ////////shows the DIV being clicked on///////
				//////Save the event.currentTarget so it can be used in other functions
				carToEdit = event.currentTarget;
				//////////////////////////////////////////////////
				///////This will remove the styling set by quiz.JS/////////////
				carToEdit.removeAttribute("style");
				/////This will add styling set in CSS under .newClass/////////////////////
				carToEdit.setAttribute("class", "newClass");
				textInput.focus(); //////focuses on Input box defined on quiz.js///////////
			});
			///////////KEY UP FUNCTION FOR ENTER KEY//////////////////////
			textInput.addEventListener("keyup", function() {
				////ENTER KEY RESET////////////////////////
				if (event.keyCode === 13) {
					textInput.value = "";
				} /////immediately make text changes to description/////////
				////////Change Description as user types//////////////////
				var description = document.getElementById("description").getElementsByClassName("carClass");
   				var userText = textInput.value;
   				carToEdit.description.innerHTML = userText;  ////////This takes selected element and will overwrite text//////////////////
				})
			};
			
		} ////////END FOR LOOP////////////////
	 

	return newCarlot;

}(CarLot || {});