function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var DOMoutput = document.getElementById("output");
  var inventorylist = "";

  for (var i = 0; i < inventory.cars.length; i++) { 
    var currentCar = inventory.cars[i];
    inventorylist += `<h2>${currentCar.year} ${currentCar.make}</h2>`
    DOMoutput.innerHTML = inventorylist;
}};


CarLot.loadInventory(populatePage);