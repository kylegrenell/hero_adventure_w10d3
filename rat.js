var Rat = function(name, health, strength){
  this.name = name; 
};

Rat.prototype = {
  touch: function( food ){
    var ratSpeak = "I am touching the " + food.name;
    food.poisoned = true;
    return ratSpeak;
  }
};

module.exports = Rat;