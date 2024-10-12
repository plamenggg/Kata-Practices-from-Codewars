function calcTip(bill) {
    if (bill >=50 && bill <= 300) {
        return 0.15*bill
    }
    return 0.2 * bill
}

console.log(calcTip(100))

const bills = [125,555,44]

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

const totals = [(bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2])]