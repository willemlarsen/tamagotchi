describe("Tamagotchi", function() {
  describe("nap", function() {
    it("gets the Tamagotchi a nap by increasing sleep level by 1", function() {
      var testTamagotchi = Tamagotchi.create();
      testTamagotchi.sleepLevel = 1;
      testTamagotchi.nap().should.equal(2);
    });
  });
  describe("feed", function() {
    it("feeds the Tamagotchi by increasing food level by 1", function() {
      var testTamagotchi = Tamagotchi.create();
      testTamagotchi.foodLevel = 1;
      testTamagotchi.feed().should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new instance of Tamagotchi", function() {
      var testTamagotchi = Tamagotchi.create();
      Tamagotchi.isPrototypeOf(testTamagotchi).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("sets the name", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
    });
    it("sets the foodLevel", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.foodLevel.should.equal(10);
    });
    it("sets the sleepLevel", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.sleepLevel.should.equal(10);
    });
    it("sets the activityLevel", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.activityLevel.should.equal(10);
    });
  });

  describe('timePasses', function(){
    it("decreases the amount of food a Tamagotchi has by one", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if the foodLevel is greater than 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.isAlive().should.equal(true);
    });
    it("is dead if the foodLevel is less than or equal to 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });
});