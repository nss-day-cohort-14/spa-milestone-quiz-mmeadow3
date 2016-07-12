var textInput = document.getElementById("inputText");
var submit = document.getElementById("submit");

function populatePage (inventory) {
  var DOMoutput = document.getElementById("output");
  var inventorylist = "";

  for (var i = 0; i < inventory.cars.length; i++) { 
    var currentCar = inventory.cars[i];
    inventorylist += `<div class="cars col-md-4" id="car--${i}" style="border-color: ${currentCar.color}">
    <h2>${currentCar.make} ${currentCar.model}</h2>
    <h4>${currentCar.year} $${currentCar.price}</h4>
    <h4>${currentCar.color}</h4>
    <h5 id="description--${i}">${currentCar.description}</h5>`  
     if (currentCar.purchased) {
        inventorylist += `<h5>SOLD OUT</h5>`;
      } else if (!currentCar.purchased) {
        inventorylist += `<h5>AVAILABLE</h5>`;
      }
    inventorylist +=`</div>`
    }
DOMoutput.innerHTML = inventorylist;
  
CarLot.activateEvents();
};

CarLot.loadInventory(populatePage);