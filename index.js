class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This car is a ${this.year} ${this.make} ${this.model} `;
    }
}
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range;
    }
    getDescription() {
        return `${super.getDescription()} and has ${this.range} mile range.`;
    }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
const description = myElectricCar.getDescription();
console.log(description);





//Orignal answer for number 6

//let car1 = Car("Tesla", "Model S", 2019, 300)
//getDescription() {
  //  return `${this.year} ${this.make} ${this.model}. `;
