[
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
];

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

console.log(bookMap);

bookMap.set("pages", 464);
console.log(bookMap);

const title = bookMap.get("title");
const author = bookMap.get("author");

console.log(`${title} by ${author}`);

console.log(bookMap.size);

if (bookMap.has("author")) console.log("The author is known");
