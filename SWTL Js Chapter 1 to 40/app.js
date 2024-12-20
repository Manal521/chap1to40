//Chapter 1
// alert("Hello World!");
// alert("Welcome To Our Page");
// window.alert("Thanks For Visit");


// //Chapter 2
// var name="Manal";
// let lastName="Mansoor";
// const nationality="Pakistan";


//Chapter 3
// var age=20;
// let desireAge=30;
// const leftAge= desireAge-age;
// const leftAge= desireAge+age;
// document.write(leftAge);


//Chapter 4
// let myName="Manal";
// let myage$=20;
// let lastname="Mansoor";
// let _name="Manal";
// let $name="Manal";


//Chapter 5
// let sum1 =20;
// let sum2 = 40;
// let final= sum1 + sum2;
// document.write(final);
// let sum1 =20;
// let sum2 = 40;
// let final= sum1 - sum2;
// document.write(final);
// let sum1 =20;
// let sum2 = 40;
// let final= sum1 * sum2;
// document.write(final);
// let sum1 =20;
// let sum2 = 40;
// let final= sum1 / sum2;
// document.write(final);
// let sum1 =20;
// let sum2 = 40;
// let final= sum1 % sum2;
// document.write(final);


//Chapter 6
// num =2;
// num++;
// document.write(num);
// num =2;
// num--;
// document.write(num);
// num =2;
// ++num;
// document.write(num);
// num =2;
// --num;
// document.write(num);


//Chapter 7
// let totalCost=(1+2)*3;
// document.write(totalCost);
// let totalCost=(1*3)-6;
// document.write(totalCost);
// let totalCost=6+(1*3);
// document.write(totalCost);


//Chapter 8
// let name = "Manal";
// alert("Thanks "+name+" !");
// alert("2"+"2");


//Chapter 9
// let name =prompt("Enter your name.");


//Chapter 10
// let city=prompt("Where do you live?");
// if (city==="Karachi") {
//     alert("Great");
// }


//Chapter 11
// let city=prompt("Where do you live?");
// if (city==="Karachi") {
//     alert("Great");
// }
// if (1 > 0) {
//     document.write("ok")}
//     if (0 < 1) { document.write("o0k")};
//     if (1 >= 0) { document.write("00ok")};
//     if (1 >= 1) { document.write("o000k")};
//     if (0 <= 1) { document.write("o0000k")};
//     if (1 <= 1) { document.write("o00000k")};
//     if (1 !== 19) { document.write("o00000k")};
//     if (1 != 1) { document.write("o00000k")};


//Chapter 12
// let color = prompt("Enter color.");
// if (color === "red") {
//     document.write("Great.");
// } else if (color === "blue") {
//     document.write("Good.");
// } else {
//     document.write("Any other color.");
// }


//Chapter 13
// let a = 5;
// let b = 10;

// let resultAnd = (a > 3) && (b < 15);  // Using AND operator
// let resultOr = (a > 3) || (b > 15);  // Using OR operator

// console.log('AND result:', resultAnd);  // Should output: true
// console.log('OR result:', resultOr);    // Should output: true


//Chapter 14
// let age = 25;
// let isMember = true;

// if (age >= 18) {  // First condition: is the person an adult?
//     if (isMember) {  // Nested condition: is the person a member?
//         console.log("You are eligible for a membership discount!");
//     } else {
//         console.log("You are not eligible for a membership discount.");
//     }
// } else {
//     console.log("You must be 18 or older to get a discount.");
// }


//Chapter 15
// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// document.write(cities[0]);

    
//Chapter 16
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.pop());  
// document.write("<br>");  
// document.write(pets); 
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.push("fish","camel")); 
// document.write("<br>");  
// document.write(pets);  


//Chapter 17
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.shift());  
// document.write("<br>");  
// document.write(pets);  
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.unshift("parrot","monkey"));  
// document.write("<br>");  
// document.write(pets); 
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.splice(2,1));  
// document.write("<br>");  
// document.write(pets); 
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.splice(2,2));  
// document.write("<br>");  
// document.write(pets); 
// let pets = ["cats", "dogs", "cows", "goat", "turtle"];
// document.write(pets.slice(2,4));  
// document.write("<br>");  
// document.write(pets); 


//Chapter 18
// let num=2;
// for (let i = 1; i < 11; i++) {
//     document.write(num,"x",i,"=",num*i,"<br>");
// }
           

//Chapter 19
//  var matchFound = "no";
//  for (var i = 0; i <= 4; i++);
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound = "yes";
//  alert("It's one of the cleanest cities");
//  }
//  if (matchFound === "no") {
//  alert("It's not on the list");
//  }
//   var matchFound = false;
//  for (var i = 0; i <= 4; i++);
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound = true;
//  alert("It's one of the cleanest cities");
//  }
//  if (matchFound === false) {
//  alert("It's not on the list");
//  }
// var cleanestCities = ["Tokyo", "Oslo", "Vancouver", "Copenhagen", "Singapore"];
// var cityToCheck = "Oslo"; 
// var numElements = cleanestCities.length;
// var matchFound = false;

// for (var i = 0; i < numElements; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break; 
//   }
// }

// if (!matchFound) {
//   alert("It's not on the list");
// }
// var cleanestCities = ["Tokyo", "Oslo", "Vancouver", "Copenhagen", "Singapore"];
// var cityToCheck = "Oslo"; 
// var numElements = cleanestCities.length;
// var matchFound = false;

// for (var i = 0; i < numElements; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break; 
//   }
// }

// if (!matchFound) {
//   alert("It's not on the list");
// }


//Chapter 20
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }
// document.write(fullNames);

 

//Chapter 21
//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toUpperCase();
//  var cleanestCities = ["CHEYENNE", "SANTA FE", "TUCSON", "GREAT fALLS", "HONOLULU"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
// }
//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
// }


//Chapter 22
// var text = "Hello,world!";
// var slicedString = text.slice(1,6);
// console.log(slicedString); 
// console.log(text);         


//Chapter 23
// var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// var index = fruits.indexOf("date");
// console.log(index);  


//Chapter 24
let word = "Coding";
// console.log(word.charAt(4)); 
// console.log(word.slice(0,4)); 


//Chapter 25
// let sentence = "Hello, World!";
// console.log(sentence.replace("World", "Manal"));


//Chapter 26
// let num = 5.76;
// console.log(Math.round(num));
// console.log(Math.ceil(num)); 
// console.log(Math.floor(num)); 


//Chapter 27
// console.log (Math.round(Math.random()*100)+1); 


//Chapter 28
// let numStr = "123.67";
// console.log(parseInt(numStr));
// console.log(parseFloat(numStr)); 


//Chapter 29
// let num = 42;
// console.log(num.toString());
// let num2="42";
// console.log(Number(num));


//Chapter 30
// let pi = 3.14159;
// console.log(pi.toFixed(2)); 
// console.log(pi.toPrecision(3)); 
// let num = 0.14159;
// console.log(pi.toPrecision(3)); 


//Chapter 31
// let now = new Date();
// console.log(now.toString()); 


//Chapter 32
// let now = new Date();
// console.log(now.getFullYear()); 
// console.log(now.getMonth() + 1); 
// console.log(now.getDate()); 
// console.log(now.getDay()); 
// console.log(now.getHours()); 


//Chapter 33
// let birthDay = new Date("2002-7-4");
// console.log(birthDay);


//Chapter 34
// let date = new Date();
// date.setFullYear(2004);
// console.log(date);


//Chapter 35
// function greet() {
//     console.log("Hello, World!");
//    }
//    greet();
//    greet();


//Chapter 36
// function greet(name) {
//     console.log(`Hello, ${name}!`);
//    }
//    greet("Manal");
//    greet("Urooj");


//Chapter 37
// function add(a, b) {
//     return a + b;
//    }
//    console.log(add(5, 3));
//    console.log(add(4, 6)); 


//Chapter 38
// Global variable declaration
// let globalVar = "I am a global variable!";

// function greet() {
//   console.log(globalVar);  // Accessible inside the function
// }

// greet();  // Output: "I am a global variable!"
// console.log(globalVar);  // Output: "I am a global variable!"
// function greet() {
//     // Local variable declaration
//     let localVar = "I am a local variable!";
//     console.log(localVar);  // Accessible inside the function
//   }
  
//   greet();  // Output: "I am a local variable!"
//   console.log(localVar);  // Error: localVar is not defined
  

//Chapter 39 & 40
// let day = 7;
// switch (day) {
//  case 1:
//  console.log("Monday");
//  break;
//  case 2:
//  console.log("Tuesday");
//  break;
//  case 3:
//  console.log("Wednesday");
//  break;
//  case 4:
//  console.log("Thusday");
//  break;
//  case 5:
//  console.log("Friday");
//  break;
//  case 6:
//  console.log("Saturday");
//  break;
//  case 7:
//  console.log("Sunday");
//  break;
//  default:
//  console.log("Invalid day");
// }






