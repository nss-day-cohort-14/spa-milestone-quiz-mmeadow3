var CarLot = (function () {
  
  var inventory = {}; /////must be curly braces bc it will be an object/////////

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      ///////Gives XML request an Event Listener/////////////
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText);
      /////Callback argument///////
      callback(inventory);
      });
      
    }
  };

})();