//CONDITIONAL STATEMENTS

//a) IF CONDITIONAL STATEMENTS

let age = 23;
let Age = 16

if (age >= 18) {
    console.log("You CAN VOTE");
    
}

if (Age < 18) {
    console.log("You CANNOT VOTE");
    
}

//Little variation in other cases

let mode = "light";
let color;

if(mode != "dark") {
    color = "white";
}

if(mode != "light") {
    color = "black";
}

console.log(color);

//b) IF-ELSE CONDITONAL STATEMENTS

age = 17;

if (age >= 18) {
    console.log("you have right to vote.");
} else {
    console.log("you don't have right to vote.");
    
}

mode = "dark";
color;

if (mode === "dark") {
      color = "dark grey";
} else {
    color = "white";
}

console.log(color);

let num = 9;

if (num%2 == 0) {
    console.log(num, "is even");
    
} else {
    console.log(num, "is odd");
    
}


//c) else-if CONDITIONAL STATEMENTS

age = 20;

if (age < 18) {
    console.log("you are a junior citizen");
    
} else if (age > 60) {
    console.log("you are a senior citizen"); 
    
} else {
    console.log("you are a young citizen");
    
}

let marks = 33;

if (marks == 90) {
    console.log("bacha parhnay wala hai");
    
} else if (marks == 80) {
    console.log("bacha mazeed mehnat kar k achay num lai sakta hai");
    
} else if (marks == 60) {
    console.log("bacha gair zimadar hai");
    
} else {
    console.log("chulu bhar pani mai doob maru");
}

//Ternary Operators

let weight = 65;

let banda = weight == 65 ? "Patla": "Mota";
console.log("banda is", banda);

console.log(weight == 65 ? "Patla" : "Mota");

// Explore Switch conditional Statements

//Practice Q1

let number = prompt("Enter any number");

if(number % 3 === 0) {
    console.log(number, "is multiple of 3");
} else {
    console.log(number, "is not multiple of 3");
}

//Practice Q2

let score = 90;

if(score >=90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score < 50) {
    grade = "F";
}

console.log("ACCORDING TO YOUR SCORE, YOUR GRADE IS,", grade);
