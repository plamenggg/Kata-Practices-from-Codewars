const vals = [3, -2, 10, 35, 28, 0, "error"];
const nums = vals.filter((el) => typeof el === "number");

const max = Math.max(...nums);
console.log(max);

let max1 = 0;
for (const el of vals) {
  if (el <= max1 || typeof el !== "number") continue;
  max1 = el;
}

console.log(max1);

let max2 = -Infinity;
let min = +Infinity;
for (const el of vals) {
  if (typeof el !== "number") continue;
  if (el > max2) max2 = el;
  if (el < min) min = el;
}

console.log(max2);
console.log(min);
