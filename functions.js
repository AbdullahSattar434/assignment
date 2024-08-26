//CH # 5(FUNCTIONS)..........
console.log("````````````````````````````Functions````````````````````````````");
//FUNCTIONS........................
//These are the block of code that perform specific tasks and can be invoked, whenever required.

function myFirstFunc() {
    console.log("'Welcome to the functions in JS'");
}

myFirstFunc();
// whenever i want to use this function, i can write this function and whatever this function contain, it could be a code, operation, condition etc. it will be printed.

//Using function for sum

function suM(x, y) {
    console.log(x + y);
    
}

suM(6, 5); // in the same way it can be used for other operations as well like multiplication, division etc.

suM(123, 654);

//other way to use the function

function muL(a, b) {
    return a * b;  //can also be used to return a value and this value can be stored in a single variable.
}
 
console.log(muL(56, 69));

//arrow funtion

const mUL= (c, d) => {
     return c * d;
}

console.log(mUL(45, 65));

//other way

const multi= (c, d) => {
    console.log(c * d);
    
}

multi(5, 6);

// more use


const arrow = () => {
    console.log("arrow function is used here");
    
}

arrow();

//can also be written in one line for small function of single line, and can be used without paranthesis.

const arroW= () => console.log("arrow function is used here");

arroW();


//practice question

function vowelsInString(str) {
    let counT = 0;
    for(let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o"  ||  char === "u")
            counT++;
        
    }
    return counT;
    
}

console.log("no. of vowels=", vowelsInString("apnacollege"));

// vowelsInString("apnacollege");
// vowelsInString("ali is a good boy, he is very intelligent.");.................................. these will be used when console.log will be used in function

// same question answer using arrow function

const vowels = (str) => {
    let counT = 0;
    for(let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o"  ||  char === "u")
            counT++;
        
    }
    console.log("no. of vowels in string are now been calculated using arrow function=", counT);
}

vowels("you are good man");

//,............................................................................................................................


//forEach method (a method is a function being used for a specific work, like .toUpperCase() is a function but as it is used for some specific work therefore it is known as a method.)
// It is used for for arrays and strings.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let array = ["Lahore", "Islamabad", "Peshawar", "Balochistan", "Karachi"];

arr.forEach((val, idx, arr) => {   // inside the parameter you can give three things i.e. arr, val, idx......................
    console.log(val, idx, arr);
    
});

array.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
    
});


// find the square of numbers using for each loop.

let nums = [2,3,4,5,6];
const calsq = (num, idx) => {
    console.log(num * num, idx);
    
}


//other way

nums.forEach(calsq);


//map function --> same function as that of forEach method, but it can also be used to get the new array or copy of the previous array, moreover there is no need to call this function, one it is written with console.log, it automatically executes the output of function, for new array, new array needs to be stored in a new variable. 

let aRRay = [6,5,4,3,2];

aRRay.map((val) => {
    console.log(val * 2);
    
} 
);

let aRR = [9,8,7,6,5];

let newARR = aRR.map((val) => {
    return val*val;
}
    
);

console.log("squares of previous array =",newARR);



// filter method..............

let evenNum = arr.filter ((val) => {
    return (val % 2 === 0);
}

);

console.log(evenNum);

//reduce method...............--> it only returns us a single value.

let largestVal = arr.reduce((prev, curr) => {
    return prev > curr ? prev: curr;
}

)


console.log(largestVal);

//practice question..........................
let marks = [79, 85, 90, 91, 93, 95];

let above90Marks = marks.filter(val => {
    return val > 90;
});


console.log(above90Marks);


//.....................................................................................
//Enter a number 'n' from user and make an array from 1 - n, calculate the sum of all the arrays and factorial of the array generated. 


let n = prompt("Enter a number:");

let arrray = [];

for(let i=1 ; i <= n ; i++) {
    arrray[i-1] = i;
}

console.log(arrray);

//Sum

let arraySum = arrray.reduce((prev, curr) => {
    return prev + curr;
}

);

console.log(arraySum);


//Multiplication
let arrayMul = arrray.reduce((prev, curr) => {
    return prev * curr;
}

);

console.log(arrayMul);


//...................................................................................

//functons, 
//normal functions, 
//arrow functions, 
//.forEach Method, 
//.map method 
//.filter method, 
//.reduce method 

 


