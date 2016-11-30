var Nemesis = function(name, health, strength, favouriteFood){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.favouriteFood = favouriteFood;
};

Nemesis.prototype = {
  talk: function(){
    var saying = "It's me, your nemesis " + this.name;
    return saying;
  },
  
  eat: function(food){
    var eating = "I am eating " + food.name;
    if(food.poisoned === true){
      this.health -= food.value;
    } else {
      if(food.name === this.favouriteFood){
        this.health += (food.value * 1.5);
      } else {
        this.health += food.value;
      }
    }
    return eating;
  },

  fight: function( opponent ){
    var fighting = "Take this.. and this... ";
    opponent.health -= this.strength;
    return fighting;
  }
  
};

module.exports = Nemesis;