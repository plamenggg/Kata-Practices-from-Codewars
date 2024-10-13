const num = [17, 21, 23];

function printForecast(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}°C in ${i + 1}day${i + 1 === 1 ? "" : "s"}`;
  }
  return result + "...";
}

console.log(printForecast(num));
