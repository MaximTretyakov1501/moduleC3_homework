function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.connected = false;
}

ElectricalAppliance.prototype.connected = function() {
    console.log(this.name + " connected!");
    this.connected = true;
};

ElectricalAppliance.prototype.disabled = function() {
    console.log(this.name + " disabled!");
    this.connected = false;
};

function Fridge(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.connected = true;
}

Fridge.prototype = new ElectricalAppliance();

function Tv(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.connected = false;
}

Tv.prototype = new ElectricalAppliance();

const kitchenFridge = new Fridge("Kitchen fridge", "Bosh", 110, "Big");

const hallTv = new Tv("Hall TV", "LG", 100, "smarttv", "for rest");

kitchenFridge.disabled();

hallTv.connected();

console.log(homePC)
console.log(tableLamp)