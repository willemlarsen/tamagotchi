var Tamagotchi = {
  create: function(inputtedName) {
    var name = inputtedName;
    inputtedName = Object.create(Tamagotchi);
    inputtedName.initialize(name);
    return inputtedName;
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
    
    Tamagotchi.create(inputtedName);

    $('.creator').hide();
    $('#its-name').text(inputtedName);
    $('.status').show();

  });

});