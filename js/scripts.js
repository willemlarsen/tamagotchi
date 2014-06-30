var Tamagotchi = {
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
  $('form#create-tamagotchi').submit(function(event) {
    event.preventDefault();

    var inputtedName = $('input#create-name').val();
    var name = inputtedName;
    inputtedName = Object.create(Tamagotchi);
    inputtedName.initialize(name);
    $('.creator').hide();
    $('#its-name').text(inputtedName.name);
    $('.status').show();

  });

});