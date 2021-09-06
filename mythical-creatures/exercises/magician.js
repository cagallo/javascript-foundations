class Magician {
  constructor({name, assistant, clothing}) {
    {
      this.name = `The Great ${name}`;
      this.assistant = assistant;
      this.clothing = this.favoriteAccessory;
      this.confidencePercentage = 10;
    }
      this.favoriteAccessory = clothing || 'top hat';
    }
  performIncantation(message){
      return message.toUpperCase() + "!";
    }
  performTrick(){
      this.confidencePercentage += 10;
      if(this.favoriteAccessory === 'top hat'){
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }
  performShowStopper(){
      if(this.confidencePercentage < 100) {
      return 'Oh no, this trick is not ready!';
    } else if(this.assistant === false) {
      return 'Oh no, this trick is not ready!';
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
};









module.exports = Magician;
