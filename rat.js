var Rat = function(name){
  this.name = name; 
};

Rat.prototype = {
  touch: function( food ){
    var ratSpeak = "I am touching the " + food.name;
    return ratSpeak;
  }
};

module.exports = Rat;