var Rat = function(name){
  this.name = name; 
};

Rat.prototype = {
  poison: function( food ){
    var ratSpeak = "I am touching the " + food.name;
    return ratSpeak;
  }
};

module.exports = Rat;