const input = require('sync-input');

const Bubblegum = 202;
const Toffee = 118;
const Ice_cream = 2250;
const Milk_chocolate = 1680;
const Doughnut = 1075;
const Pancake = 80;
const Income = Bubblegum + Toffee + Ice_cream + Milk_chocolate + Doughnut + Pancake;

console.log('Earned amount:');
console.log('Bubblegum: $' + Bubblegum);
console.log('Toffee: $' + Toffee);
console.log('Ice cream: $' + Ice_cream);
console.log('Milk chocolate: $' + Milk_chocolate);
console.log('Doughnut: $' + Doughnut);
console.log('Pancake: $' + Pancake);
console.log('Income: $' + Income);

let staff_expenses = Number(input("Staff expenses: "));
let other_expenses = Number(input("Other expenses: "));
let net_income = Income - (staff_expenses + other_expenses);
console.log("Net income: $" + net_income);