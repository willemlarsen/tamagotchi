var Tamagotchi = {
  feed: function () {
    this.foodLevel = this.foodLevel + 1;
    return this.foodLevel;
  },
  checkIn: function() {

    $('.creator').hide();
    $('#its-name').text(this.name);
    this.timePasses();
    $('.status').show();
    $('#stats').text('');
    $('#stats').append("<li>" + this.name + "'s last food level was " + this.foodLevel + "</li>" +
                       "<li>" + this.name + "'s last sleep level was " + this.sleepLevel + "</li>" +
                       "<li>" + this.name + "'s last activity level was " + this.activityLevel + "</li>"
                      );
    if(!this.isAlive()) {
        $('#stats').text('');
        $('#stats').append('<h1>' + this.name + " is DEAD :(" + '</li>');
      }
  },
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
    this.sleepLevel = this.sleepLevel - 1;
    this.activityLevel = this.activityLevel - 1;
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

    newTamagotchi.checkIn();

    $('#check-in').click(function() {
      newTamagotchi.checkIn();
    });

    $('#feed-it').click(function() {
      newTamagotchi.feed();
      newTamagotchi.checkIn();
    });
  });
  
});
