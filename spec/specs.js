describe("Tamagotchi", function() {
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
  
});