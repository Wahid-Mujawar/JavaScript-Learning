//typeof operator

//data types (primitive data types)
//string
//number
//boolean
//undefined
//null
//BigInt
//Symbol

let firstName = "Javascript";
console.log(typeof firstName);  //specifies data type

let age = 24;
console.log(typeof age); //specifies data type

//Type 1
//convert number to string
age = age + ""
console.log(typeof age); //number to string
console.log(age);

//convert number to string
let newString = +"7"
console.log(typeof newString); //string to number
console.log(newString);

//Type 2
//convert number to string
age = 24;
age = String(age);
console.log(typeof age);
console.log(age);


//convert string to number
let newAge = "25";
newAge = Number(newAge);
console.log(typeof newAge);
console.log(newAge);
