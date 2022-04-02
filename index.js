// let number = 10;
// number += 2;
// console.log("Result : " + number);

// let nameString = new String("Hello");
// it's actually an object like in class object in java

// console.log(nameString.length);
// length it's a function inside the string class

// let num1 = 10;
// let num2 = 20;
// const sum = num1 + num2;
// console.log("Sum of two numbers is : " + sum);

// let number = 0;
// if (number > 0) {
//     console.log("It is a positive number");
// } else if (number === 0) {
//     console.log("It is a neutral number");
// } else {
//     console.log("It is a negative number");
// }

// let read = require('readline-sync');
// let input = read.question("Please enter your name : ");
// console.log("Your name is " + input);

// let read = require('readline-sync');
// let number = read.question("Please enter a number : ");
// if (number < 0) {
//     console.log("Please enter a negative number");
// } else if (number > 0) {
//     console.log("Please enter a positive number");
// } else {
//     console.log("Please enter a neutral number");
// }

// function message() {
//     console.log("Hello");
// }
// message();

// let car = {
    // type:"Fiat", 
    // model:"500", 
    // color:"green", 
// property: function(){
//     console.log("This is a car object");
// }};
// console.log(car.type);
// console.log(car["model"]);
// console.log(car.property);

// let text = "Hello";
// let answer = "It's a car";
// console.log(answer);
// console.log(answer.length);

// let text1 = "It's so called \'Hello\'";
// console.log(text1);

// let fullName = new String("Hello");
// console.log(fullName);

//  let person = {
//     name:"Sara", 
//     age:25, 
//      place:"Tara", 
//     display: function(){
//     console.log(this.name);
//  }};
// console.log(person.age);
// console.log(person['place']);
// person.age = 30;
// for(x in person) {
//     console.log(person[x]);
// }
// console.log(person.display());
// person.dob = "12-03-1998";
// console.log(person);

// Object Constructor

// function person(name, age, place) {
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.display = function() {
//         console.log(`My name is ${this.name} and I'm from ${this.place}. I'm ${this.age} years old.`);
//     }
// }

// let firstPerson = new person("Sara", 25, "Goa");
// let secondPeson = new person("Jhon", 40, "Thirur");
// firstPerson.display();
// secondPeson.display();

// let text = "Water";
// console.log(text.length);

//  let place = "Thiruvanathapuram";
//  let state = "Kerala";
//  console.log(place.slice(5));
//  console.log(place.slice(5, 12));
//  console.log(place.slice(-5));
//  console.log(place.substring(5));
//  console.log(place.substr(5, 12));
//  console.log(place.replace("Thir", "Kollam"));
//  console.log(place.replace(/THIRU/i, "Kollam"));
//  console.log(place.replace(/a/g, "k"));
//  console.log(place.toUpperCase());
//  console.log(place.toLowerCase());
//  console.log(place.concat(", ", state));

// let text = "  Welcome  ";
// let text1 = "Welcome";
// console.log(text);
// console.log(text.trim());
// console.log(text1);
// console.log(text1.padStart(4, 4));
// console.log(text1.charAt(0));
// console.log(text1.split(","));

// let date = new Date("12-05-2021");
// console.log(date.getDate());

// let a = -1;
// try {
//     if (a < 0) { 
//         throw "User not found";
//     }
// } catch(error) {
//     console.log(error)
// }

// let str = "Please locate where 'locate' occurs";
// console.log(str.indexOf("locate"));
// console.log(str.lastIndexOf("locate"));
// console.log(str.search("locate"));

// let text = "The rain in Spain stays mainly in the plain";
// console.log(text.match(/ain/g));
// console.log(text.includes("rain"));
// console.log(text.startsWith("The"));
// console.log(text.endsWith("plain"));

// const firstName = "Jhon";
// const lastName = "Doe";
// console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// const price = 10;
// const VAT = 0.25;
// console.log(`Total : ${(price * (1 + VAT)).toFixed(2)}`);

// const price = 100;
// console.log(price);

// class messageDisplay {
//     message () {
//         console.log("Hello");
//     }
// }

// class display extends messageDisplay {
//     constructor(num1, num2) {
//         super();
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     sum () {
//         console.log(`Result is : ${this.num1 + this.num2}`);
//     }
// }

// let value = new display(20, 10);
// value.sum();

function sum(num1, num2) {
    return num1 + num2;
}
let value = (num1, num2) => num1 + num2;

console.log(sum(10, 20));
console.log(value(20,50));