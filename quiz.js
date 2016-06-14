function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var DOMoutput = document.getElementById("output");
  var inventorylist = "";

  for (var i = 0; i < inventory.cars.length; i++) { 
    var currentCar = inventory.cars[i];
    inventorylist += `<div id="car--${i}" class="carClass" style="border: 1px solid ${currentCar.color}">
    <h2>${currentCar.make} ${currentCar.model}</h2>
    <h4>${currentCar.year}  $${currentCar.price}</h4>
    <h4>${currentCar.color}  ${currentCar.purchased}</h4>
     <h5>${currentCar.description}</h5></div>`
    DOMoutput.innerHTML = inventorylist;
}};


CarLot.loadInventory(populatePage);