// the value of kelvin cannot be changed in this script and therefore has been assigned with 'const'
const kelvin = 293;
//Celsius, another scale of temperature is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
//changing the temperature into another unit called fahrenheit according to a specific equation.
let fahrenheit = celsius * (9 / 5) + 32;
//Rounding off the temperature to its nearest, lowest whole number.
fahrenheit = Math.floor(fahrenheit);

const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature ${kelvin} Kelvin is ${fahrenheit} degrees Fahrenheit.`)

console.log(`The temperature ${kelvin} Kelvin is ${newton} degrees Newton.`)
