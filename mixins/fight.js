
var punch = {
  punching: function(){
    var punches = "I am punching you";
    opponent.health -= this.strength;
    return punches;
  }
};

var kick = {
  kicking: function(){
    var kicks = "I am kicking you";
    opponent.health -= this.strength;
    return kicks;
  }

};
