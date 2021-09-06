
class Unicorn{    //declare new class called Unicorn
  constructor(name, color){
    this.name = name;
    this.color = color || "white";
  }
  isWhite(color) {
    if (color !== "white")
    return false;
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}


module.exports = Unicorn;
