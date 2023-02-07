//Task 1

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    if(a == 0)
        return false;
    
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
  
    if(D < 0) {
        return false;
    arr['discriminant'] = D;
    } else if(D == 0) {
        arr['squareRoot'] = (-b + Math.sqrt(D)) / (2 * a);
    } else if(D > 0){
        let decision = [];
        decision.push((-b + Math.sqrt(D)) / (2 * a));
        decision.push((-b - Math.sqrt(D)) / (2 * a));
        arr['squareRoot'] = decision;
    }
    return arr;
}
let arr = {};
solveEquation(6, 4, 2);
console.log(arr);


//Task 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        console.log(" ");
    }

    let monthlyPercent = percent / 100 / 12;
    let loanBody = amount - contribution;
    let monthlyFee = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
    let totalAmount = monthlyFee * countMonths;

    
    return console.log(Number(totalAmount.toFixed(2)));
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);

console.log(" ");
