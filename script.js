const person1 = {
    name: `Justin`,
    sayHello: function () {
        console.log(` Hello my name is ${this.name}.`);
    }
}

const person2 = {
    name: `Emma`,
    sayHello: function () {
        console.log(` Hello my name is ${this.name}.`);
    }
}

const person3 = {
    name: `Matt`,
    sayHello: function () {
        console.log(` Hello my name is ${this.name}.`);
    }
}

const person4 = {
    name: `Blake`,
    sayhello: function () {
        console.log(` Hello my name is ${this.name}.`);
    }
}

const person5 = {
    name: `Mark`,
    sayHello: function () {
        console.log(` Hello my name is ${this.name}.`);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayhello();
person5.sayHello();

function Person(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.helloWorld = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
};

const person1B = new Person(`Justin`, 18, `Alabaster`);
const person2B = new Person(`Emma`, 18, `Alabaster`);
const person3B = new Person(`Matt`, 19, `Alabaster`);
const person4B = new Person(`Blake`, 18, `Alabaster`);
const person5B = new Person(`Mark`, 17, `Alabaster`);

class PersonB {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

person1B.helloWorld();
person2B.helloWorld();
person3B.helloWorld();
person4B.helloWorld();
person5B.helloWorld();

class Vehicle {
    constructor(type, manufacturer, model, numberOfWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }

    aboutVehicle() {
        console.log(`Vehicle`);
        console.log(`Vehicle Type: ${this.type}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model:${this.model}`);
        console.log(`Wheels: ${this.numberOfWheels}`);
    }
}


class Truck extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, numberOfDoors, truckBed) {
        super(type, manufacturer, model, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.truckBed = truckBed;
    }

    
    aboutVehicle() {
        console.log(`Truck`);
        console.log(`Vehicle Type: ${this.type}`);
        console.log(`Manufacturer:${this.manufacturer}`);
        console.log(`Model:${this.model}`);
        console.log(`Wheels:${this.numberOfWheels}`);
        console.log(`${this.numberOfDoors}`);
        console.log(`${this.truckBed}`);
    }
}


class Sedan extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, size, milesPerGallon) {
        super(type, manufacturer, model, numberOfWheels);
        this.size = size;
        this.milesPerGallon = milesPerGallon;
    }

    
    aboutVehicle() {
        console.log(`Sedan`);
        console.log(`Vehicle Type:${this.type}`);
        console.log(`Manufacturer:${this.manufacturer}`);
        console.log(`Model:${this.model}`);
        console.log(`Wheels:${this.numberOfWheels}`);
        console.log(`${this.size}`);
        console.log(`MPG:${this.milesPerGallon}`);
    }
}


class Motorcycle extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, hasHandlebars, hasDoors) {
        super(type, manufacturer, model, numberOfWheels);
        this.hasHandlebars = hasHandlebars;
        this.hasDoors = hasDoors;
    }

    
    aboutVehicle() {
        console.log(`Motorcycle`);
        console.log(`Vehicle Type:${this.type}`);
        console.log(`Manufacturer:${this.manufacturer}`);
        console.log(`Model:${this.model}`);
        console.log(`Wheels:${this.numberOfWheels}`);
        console.log(`${this.hasHandlebars}`);
        console.log(`${this.hasDoors}`);
    }
}


let hyundaiAccent = new Vehicle('Subcompact', 'Hyundai', 'Accent', 4);
let chevySilverado = new Truck('Truck', 'Chevy', 'Silverado', 4, 2, true);
let lexusIS250 = new Sedan('Sedan', 'Lexus', 'IS250', 4, 'Medium', 24);
let kawasakiNinja = new Motorcycle('Motorcycle', 'Kawasaki', 'Ninja', 2, true, false);


console.log(hyundaiAccent);
console.log(chevySilverado);
console.log(lexusIS250);
console.log(kawasakiNinja);



hyundaiAccent.aboutVehicle();
chevySilverado.aboutVehicle();
lexusIS250.aboutVehicle();
kawasakiNinja.aboutVehicle();

