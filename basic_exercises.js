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

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
secretMessage[7] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));

// 1) Create two variables a & b. Assign value for a as "I am"  and for b as "German" and write a code to combine the two words
let a = 'I am';
let b = 'German';

// 2) Declare variable x as 20. Write a if else statement to check if x is greater than 15 and log "x is greater than 15 to the console"
let x = 20;
if(x > 15){
  console.log('x is greater than 15');
}

// 3) Given an array x=[1,2,3,4]. Do 2 pop operations. Then push the value 5 to the array. In this final array find the second element.
var xX=[1,2,3,4];
xX.pop();
xX.pop();
xX.push(5);
console.log(xX[1]);

// 4) Declare a variable x2="I love to talk" and convert it to full upper case and log it to the console
let x2 = 'I love to talk';
console.log(x2.toUpperCase());

/* 
5) What is the difference between let and const declaration of variables = let value can be changed, but const not.

Given this value below: */
let students=[{response:{
campaign_source: "Facebook",
country: "Germany",
campaign_type :"Search",
results : [{
campaign_name: 'Dresses',
clicks:500,
impressions:11000,
cost:800,
revenue: 900,
orders: 15
},
{
    campaign_name: 'Shorts',
    clicks:600,
    impressions:12000,
    cost:700,
    revenue: 800,
    orders: 14
    }]}},
    {response:{
        campaign_source: "Google",
        country: "Germany",
        campaign_type :"Search",
        results : [{
        campaign_name: 'Dresses',
        clicks:450,
        impressions:11300,
        cost:700,
        revenue: 930,
        orders: 12
        },
        {
            campaign_name: 'Shorts',
            clicks:650,
            impressions:13000,
            cost:400,
            revenue: 900,
            orders: 10
            }]}}
           
        ];
// 6) Write code to log the cost of Dresses in facebook campaign to console.
for (let i = 0; i < students.length; i++) {
  const campaign = students[i].response;
  if (campaign.campaign_source === "Facebook") {
    for (let j = 0; j < campaign.results.length; j++) {
      const result = campaign.results[j];
      if (result.campaign_name === "Dresses") {
        console.log("Cost of Dresses in Facebook Campaign:", result.cost);
        break;
      }
    }
  }
}

//7) Write code to log the orders of Google campaigns to console. 
for (let i = 0; i < students.length; i++) {
  const campaign = students[i].response;
  if (campaign.campaign_source === "Google") {
    for (let j = 0; j < campaign.results.length; j++) {
      const result = campaign.results[j];
      console.log("Orders for", result.campaign_name, "in Google Campaign:", result.orders);
    }
  }
}
