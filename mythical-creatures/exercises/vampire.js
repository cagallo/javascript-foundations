class Vampire {
  constructor(name, otherPet){
    this.name = name;
    this.pet = otherPet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink(){
    this.thirsty = false;
    if(this.ouncesDrank >= 50){
      return 'I\'m too full to drink anymore!';
    } else {
      this.ouncesDrank += 10;
    }
  }
};


module.exports = Vampire;
