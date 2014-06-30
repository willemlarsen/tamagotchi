var Tamagotchi = {
  create: function(name) {
    var newTamagotchi = Object.create(Tamagotchi);
    newTamagotchi.initialize(name);
    return newTamagotchi;
  },
  isAlive: function() {
    if(this.foodLevel > 0) {
      return true;
    } else {
      return false;
    }
  },
  timePasses: function() {
    this.foodLevel = this.foodLevel - 1;
    return this.foodLevel;
  },
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  }
};

$(document).ready(function() {

  $('.status').hide();
  $('form#create-tamagotchi').submit(function(event) {
    event.preventDefault();
    

    var inputtedName = $('input#create-name').val();
    
    var newTamagotchi = Object.create(Tamagotchi);
    newTamagotchi.initialize(inputtedName);

    $('.creator').hide();
    $('#its-name').text(newTamagotchi.name);
    $('.status').show();
    $('#stats').append("<li>" + newTamagotchi.name + "'s food level is " + newTamagotchi.foodLevel + "</li>" +
                       "<li>" + newTamagotchi.name + "'s sleep level is " + newTamagotchi.sleepLevel + "</li>" +
                       "<li>" + newTamagotchi.name + "'s activity level is " + newTamagotchi.activityLevel + "</li>"
                      );
    newTamagotchi.timePasses();


  });

});