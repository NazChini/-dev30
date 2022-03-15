//Storing human years in a const variable
const myAge = 29;

//the following value will change later and therefore stored in a let variable
let earlyYears = 2;
earlyYears *= 10.5;

//the following value will change later and therefore stored in a let variable
let laterYears = myAge - 2;
laterYears *= 4;

//adding the computed early and late years to a variable
const myAgeInDogYears = earlyYears + laterYears;

//storing a string variable and converting it to lowercase
const myName = 'Nazneen'.toLowerCase();

//using string interpolation to log out above calculations
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);