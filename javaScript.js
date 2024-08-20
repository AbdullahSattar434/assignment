//Java Script is a loosely typed language, as we can update the information in runtime.
// let is used locally. var is used globally, const is also locally.
console.log("My First experince with Java Script");
console.log("I have done variables and data types, and now will move on to explore JS further, it is a tricky but interesting language, especially the projects at the end of the tutorial are making me excited to swiftly move towards making it, lets go and explore it more.");


let myName = "Abdullah";
console.log(myName);
console.log(typeof myName);
let age = 23;
console.log(age);
console.log(typeof age);
const gender = "Male";
console.log(gender);
console.log(typeof gender);
age = 24;
console.log(age);

age = 24 + 1;
console.log(age);

{
    let age = 27;
    console.log(age);
    
}

{
    let age = 40;
    console.log(age);
}

let b;
console.log(b);

const student = {
    fullName : "Mark",
    Age : 30,
    Education : "PHD",

}

console.log(student.Education);
console.log(typeof student["Education"]);

student["fullName"] = "Wood";
student["Age"] = student["Age"] + 1;

console.log(student["fullName"]);
console.log(student["Age"]);

alert("Alert! First JS tutorial, DONE");
console.log('111'+1);


alert("Alert! 2nd tutorial is going to be started.");



