function createCar(make, model, year, owners = []) {
  const car = Object.create(carProperty);
  car.make = make,
  car.model = model,
  car.year = year,
  car.owners = owners

  return car;
};

const carProperty = {

  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  },

  addOwner(owner) {
      this.owners.push(owner);
  },

  removeOwner(owner) {
    this.owners = this.owners.filter((oldOwner) => oldOwner !== owner);
  },

  getOwnersCount() {
     return this.owners.length;
  },

  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  },

  getFullInfo() {
    return `${this.make} ${this.model} ${this.year} ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames()}` 
  },
}

function createPerson(name, surname, age, gender, cars = []) {
  const person = Object.create(personProperty);
  person.name = name,
  person.surname = surname,
  person.age = age,
  person.gender = gender,
  person.cars = cars

return person;

};
const personProperty = {
    fullName() {
      return `${this.name}  ${this.surname}`
    },

    countCars() {
     return this.cars.length;
    },

    buysCar(car) {
        this.cars.push(car);
        car.addOwner(this);
    },
    sellsCar(car) {
      this.cars = this.cars.filter((sellCar) => sellCar !== car);
      car.removeOwner(this);
    },
    getAllCarsInfo() {
      return `${this.name} owns these cars: ${this.cars.map((car) => car.getCarInfo())}.`
    }
  };
  
//=============================TEST AND LOG AREA=============================//

let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
let ilona = createPerson("Elon", "Musk", 30, "M");
let duti_picoti = createCar("BMW", "525", "1999");
let stodevianosto = createCar("Mercedes", "E190", 1991);

//=============================My Improvisation=============================//
let Tima = createPerson("Tim", "Ponarenko", 31, "M", [])
let Honda = createCar("Honda", "Fit", 2002);
Tima.buysCar(Honda);
//=============================My Improvisation=============================//

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car


console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  Tima: {
    fullName: Tima.fullName(),
    countCars: Tima.countCars(),
    getAllCarsInfo: Tima.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});