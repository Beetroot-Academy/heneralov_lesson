let car = {
  manufacturer: "Audi",
  model: "s5",
  year: 2017,
  avgSpeed: 120,
  fuelCapacity: 100,
  avgFuelConsume: 10,
  drivers: "",
  fuel: 0,
};

function carInfo(car) {
  console.log(`
    manufacturer: ${car.manufacturer},
    model: ${car.model},
    year: ${car.year},
    average speed: ${car.avgSpeed},
    fuel capacity: ${car.fuelCapacity},
    average fuel consume: ${car.avgFuelConsume},
    drivers: ${car.drivers},
    fuel: ${car.fuel}
    `);
}

carInfo(car);

function addDriver(car, drivers) {
  return (car.drivers += drivers);
}

addDriver(car, " Vovan ");
carInfo(car);

function fuelRefill(car) {
  if (car.fuel == car.fuelCapacity) {
    console.log("Your fuel is full");
  } else if (car.fuel < car.fuelCapacity) {
    console.log("Your fuel is not full, refueling...");
    car.fuel = car.fuelCapacity;
    return car.fuel;
  }
}

fuelRefill(car);
carInfo(car);
fuelRefill(car);

let time;
let travelTime;
let stopTime;
function countTravelTime(car, drivers, distance) {
  if (drivers !== car.drivers) {
    console.log("You do not have rights to drive this car");
    return;
  }
  let fuelNeeded = (car.avgFuelConsume / 100) * distance;
  if (car.fuel < fuelNeeded) {
    console.log("You should refuel your car, you will run out of fuel");
  }

  time = distance / car.avgSpeed;
  stopTime = time / 4;
  travelTime = (time + stopTime).toFixed(2);
  console.log(`You'll need ${travelTime} hours to get there`);
}

countTravelTime(car, " Vovan ", 1000);
countTravelTime(car, " Nikitos ", 1000);

let date = {
  hours: 14,
  minutes: 20,
  seconds: 10,
};

function showTime(date) {
  let hours = date.hours;
  let minutes = date.minutes;
  let seconds = date.seconds;
  return `${hours}: ${minutes}: ${seconds}`;
}

console.log(showTime(date));

function addSeconds(date, seconds) {
  let secondsResult = date.seconds + seconds;

  if (secondsResult >= 60) {
    date.seconds = secondsResult % 60;
    addMinutes(date, ~~(secondsResult / 60));
  } else {
    return (date.seconds = secondsResult);
  }
}

addSeconds(date, 150);
console.log(showTime(date));

function addMinutes(date, minutes) {
  let minutesResult = date.minutes + minutes;

  if (minutesResult >= 60) {
    date.minutes = minutesResult % 60;
    addHours(date, ~~(minutesResult / 60));
  } else {
    return (date.minutes = minutesResult);
  }
}

addMinutes(date, 80);
console.log(showTime(date));

function addHours(date, hours) {
  let hoursResult = date.hours + hours;

  if (hoursResult >= 24) {
    date.hours = hoursResult % 24;
  } else {
    date.hours = hoursResult;
  }
}

addHours(date, 4);
console.log(showTime(date));
