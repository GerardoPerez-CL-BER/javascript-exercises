/* Mark and John are trying to compare their BMI ( */

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.76;


let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;

console.log('Mark BMI is ' + markBMI + ' and John BMI is ' + johnBMI + ' ' + markHigherBMI);

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if (scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}else if((scoreDolphins === scoreKoalas)){
    console.log("Both win the trophy");
}

/* Tip Calculator */
const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;

let billTotal = bill >= 50 && bill <= 300 ? console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`) : console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
