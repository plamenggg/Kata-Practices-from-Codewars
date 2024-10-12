const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
  let tip = calcTip(bills[i]);
  let total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}

console.log(tips);
console.log(totals);

calcAverage = (arr) => {
  return (
    arr.reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0) / arr.length
  );
};

console.log(calcAverage(totals));
