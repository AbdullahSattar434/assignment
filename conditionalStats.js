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

// let number = prompt("Enter any number");

// if(number % 3 === 0) {
//     console.log(number, "is multiple of 3");
// } else {
//     console.log(number, "is not multiple of 3");
// }

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

//3) LOOPS AND STRINGS
// Whem we want to execute a code again and again.

// a) for Loop
// b) while Loop
// c) do while loop


//a) for Loop

//Simple execution

for(let i=1; i<=4; i++) {
    console.log("Wives are allowed in Islam at a time");
}


//1) Print 1-5.

for(let i=1; i<=5; i++) {
    console.log(i);
}

//2) Calculate sum of 1-100. 

let sum = 0

for(let a = 1; a<=100; a++) {
    sum = sum + a;
}
    
console.log("sum =", sum);        
    
//3) calculate sum of 1 - n.

let n = 50
let sumUp = 0

for(let a = 1; a<=n; a++) {
    sumUp = sumUp + a;
}

console.log("sumUp =", sumUp);   

console.log("for loop has ended");

//4) for sq

for(let i=1; i<=5; i++) {
    console.log(i*i);
}

//One can also use infinite loop (a loop that never ends) in "for loop" in the following way, but these loops should never be used as they are infinite so they will require imfinite space as well, using them will make your browser stop running.

// //2) Calculate sum of 1-100. 

// let sum = 0

// for(let a = 1; a>=100; a++) {
//     sum = sum + a;
// }
    
// console.log("sum =", sum);  


//b) while loop

let f = 1;

while( f<=5 ) {
    console.log("f=", f);
    f++;
}



let k = 1;

while( k<=5 ) {
    console.log("Apna College");
    k++;
}

//c) do-while loop

let h = 1;
do {
    console.log("Web Development");
    h++;
} while (h<=10);


let g = 1;
do {
    console.log("g=", g);
    g++;
} while (g<=10);


//d) for-of loop

// let str = "JavaScript";

// for(let val of str) {
//     console.log("val=", val);
// }

let str = "JavaScript";
let size = 0;
for(let val of str) {
    console.log("val =", val);
    size++;
}

console.log("size of str=", size);

//e) for-in loop

let batter = {
    name : "Ali",
    age : 28,
    innings : 100,
    runs : 2000,
};

for (let key in batter) {
    console.log("key=", key, ", value=", batter[key]);
}

//Practcie Questions

//a) Enter the numbers from 0 - 100

for( let numB = 0; numB <=100; numB++) {
    console.log("numB=", numB);
    
}

//b) enter all the even no. from 0 - 100.

for(let no = 0; no <= 100; no++) {
    if (no%2===0) { 
    console.log("even no=", no);   
    }
   
}

//c) Make a game in which user is required to guess the until, he/she guesses it right. (right no can be any number, no. which you will set.)

// let gameNum = "25"; //by default prompt considers everything as text so, whatever you want to get write in the game in case of strictly not equal to (!==), number must be given in the form of string.  
// let userNum;
// userNum = prompt("Welcome to the Game! You are required to guess the right number b/w 1 - 100");

// while(gameNum !== userNum) {
//     userNum= prompt("Wrong number, please try again");
// }

// console.log(gameNum, "is the right number, congratulations!");


let str1 = "Ali";
let str2 = 'Abdullah';

console.log(str2[7]);
console.log(str1[2]);
console.log(str2.length);
console.log(str1.length);


//Template Literals (another way of writing strings and to include some embeded expressions by using "${}")

//simple use

let temLiterals = `Apna College`;

console.log(temLiterals);

//Practical and imp. use

const obj = {
     name : "book",
     price : 10,

}
console.log("the cost of", obj.name, "is", obj.price, "rupees");

//console.log(`the cost of ${obj.name} is ${obj.price} rupees`);

//ABOVE STATEMENT CAN ALSO BE WRITTEN AS FOLLOWING

let output = `the cost of ${obj.name} is ${obj.price} rupees`;
console.log(output);

let outPut = `the cost of book is ${1+2+3+4}`; // calculation will ne done and then it will be shown.
console.log(outPut);

let strcharactor = `Fusionbygalixo`;
let strCharactor = `Fusion\nby\tGalixo`;
console.log(strCharactor);
console.log(strcharactor);
console.log(strcharactor.length);
console.log(strCharactor.length);


//STRING METHODS

//1) str.toUperCase()

let strM = "   Fusion.AI By Galixo      "; //ion.AI B

let Z = strM.toUpperCase();
console.log(strM.toUpperCase());
console.log(strM.toLowerCase());
console.log(strM.trim());
console.log(strM);
console.log(Z);

console.log(strM.slice(6,14));
console.log(strM.concat(Z));
Y = strM + Z;
console.log(Y);

console.log(strM.replaceAll("i","a"));
console.log(strM.charAt(14));

// RECAP
// str.slice(4,8)
// str1.concat(str2)
// str.replace("a","b")
// str.chartAt(write any number to verify which charactor is at what position in the string)

//PRACTICE QUESTION FOR STRINGS..................................................................................................

// let fullName = prompt("Enter your full name to generate userName.");

// //let userName = "@" + fullname + fullName.length;

// let userName = ("@").concat(fullName).concat(fullName.length);

// console.log("Your userName is", userName);


//CHAPTER 4 "ARRAYS"--> COLLECTION OF ITEMS(USUALLY OF SAME TYPE)................................................................................................























