const calcAverage = (one,two,three) =>  (one+two+three) /3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas *2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    }
    if (avgKoalas >= avgDolphins*2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }
    return 'No team wins...'
}

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

console.log(checkWinner(scoreDolphins, scoreKoalas))

