/////Public Variables and functions///////////////
var textInput = document.getElementById("inputText");
var submit = document.getElementById("submit");

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var DOMoutput = document.getElementById("output");
  var inventorylist = "";

  for (var i = 0; i < inventory.cars.length; i++) { 
    var currentCar = inventory.cars[i];
    inventorylist += `<div class="carClass col-md-4" id="car--${i}" style="border: 1px solid ${currentCar.color}">
    <h2>${currentCar.make} ${currentCar.model}</h2>
    <h4>${currentCar.year}  $${currentCar.price}</h4>
    <h4>${currentCar.color}  ${currentCar.purchased}</h4>
    <h5 id="description--${i}">${currentCar.description}</h5></div>`
    }
DOMoutput.innerHTML = inventorylist;

  // console.log(inventory.cars); /////Gives array of Objects////////
  
CarLot.activateEvents();
};

CarLot.loadInventory(populatePage);