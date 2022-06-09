// let a = Number(prompt("enter the first number"));
// let b = Number(prompt("enter your second number"));
// let c = Number(prompt("enter the third number"));

// let descriminant = b * b - 4 * a * c;
// if (descriminant > 0) {
//     let root1 = (-b + Math.sqrt(descriminant)) / (2 * a);
//     let root2 = (+b + Math.sqrt(descriminant)) / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
// }

// else if (descriminant == 0) {
//     root1 = root2 = -b / (2 * a)
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
// }


2.

// const kilometers = prompt("Enter value in kilometers: ")


// const factor = 0.621371


// const miles = kilometers * factor

// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);


3.
// let cel = Number(prompt("enter the celisus"));
// let far = (cel * 1.8) + 32;
// console.log(far)


4.

// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));


// const a = (Math.random() * (max - min + 1)) + min;


// console.log(`Random value between ${min} and ${max} is ${a}`);

5.

// const number = parseInt(prompt("Enter a number: "));


// if (number > 0) {
//     console.log("The number is positive");
// }


// else if (number == 0) {
//   console.log("The number is zero");
// }


// else {
//      console.log("The number is negative");
// }

// 6. to empty an array


var arr = ["a", "b", "c", "d", "e"]
// method 1
// var arr = [];
// console.log(arr);

// method 2
// arr.length = 0;
// console.log(arr)

// method 3

// while(arr.length)
// {
//     arr.pop();
// }
   
// arr.pop(5);
// arr.pop(4);
// arr.pop(3);
// arr.pop(2);
// arr.pop(1);
//  console.log(arr);
// arr.pop([arr.length-5])



// method 4
// arr.splice(0, arr.length);
// console.log(arr)

// method 5
// var b = arr.slice(0, 4);
//  console.log(b)

// console.log(arr)

7.

// merge two objects of  arrays
// var arr1 = [
//   { name: "lang", value: "English" },
//   { name: "age", value: "18" },
// ];
// var arr2 = [
//   { name: "childs", value: "5" },
//   { name: "lang", value: "German" },
// ];

// Array.prototype.push.apply(arr1, arr2);

// console.log(arr1);
8.
// merge two arrays
// method1
const arr1 = ["heros", "heroine"];
const arr2 = ["villian", "villiani"];

// !mergeing ways using immutable
// const all = [...arr1, ...arr2];
// console.log(all);

// method 2

// const all = arr1.concat(arr2);
// console.log(all);

// !merging using mutable merge
// console.log(arr1.push(...arr2))
// arr1;
// console.log(arr1)



// ? web example
// const heroes = ["Batman", "Superman"];
// const villains = ["Joker", "Bane"];
// heroes.push(...villains);
// heroes;
// console.log(heroes)

9.

const number = prompt("Enter a number: ");


if(number % 2 == 0) {
    console.log("The number is even.");
}


else {
    console.log("The number is odd.");
}

// 10.
// // program to find the largest among three numbers


// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;


// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }


// console.log("The largest number is " + largest);