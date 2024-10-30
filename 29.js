const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking("LH132");
createBooking("lb321", 24);
console.log(bookings);

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

console.log(oneWord("kO OOKK"));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

console.log(upperFirstWord("hello goodbye"));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("Hey");
greeter("Joe");

const greet2 = (greeting) => (name2) => console.log(`${greeting} ${name2}`);

greet2("Hello")("Steve");
