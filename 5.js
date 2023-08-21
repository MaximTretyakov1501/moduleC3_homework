class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}
class Fridge extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}
class Tv extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

const kitchenFridge = new Fridge("Kitchen Fridge", "Bosh", 110, "Big");

const hallTv = new Computer("Hall TV", "LG", 100, "for rest", "for work");

kitchenFridge.unplug();

hallTv.plugIn();

console.log(kitchenFridge)
console.log(hallTv)