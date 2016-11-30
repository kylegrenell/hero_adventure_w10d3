var Rat = function(name, health, strength){
  this.name = name;
  this.health = health; 
  this.strength = strength;
};

Rat.prototype = {
  touch: function( food ){
    var ratSpeak = "I am touching the " + food.name;
    food.poisoned = true;
    return ratSpeak;
  },

  fight: function( opponent ){
    var fighting = "I am fighting";
    opponent.health -= this.strength;
    return fighting;
  }

};

module.exports = Rat;