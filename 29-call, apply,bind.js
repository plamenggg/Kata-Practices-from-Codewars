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

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book(239, "Steve Jacobs");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Koll");

const flightData = [565, "George Shull"];
book.apply(eurowings, flightData);
console.log(eurowings);

const bookEW = book.bind(eurowings);
bookEW(24, "Carol Sholz");
console.log(eurowings);

const addTax = (rate, value) => value + value * rate;
const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
