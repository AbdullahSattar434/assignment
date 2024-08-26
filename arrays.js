//CHAPTER 4 "ARRAYS"--> COLLECTION OF ITEMS(USUALLY OF SAME TYPE)................................................................................................
// It can also include the collection of different type of items but usually we prefer to use arrays for storing same type of information// An array can be thought of like an object in which keys have been replaced by the indices or positions, moreover information stored in arrays is in the form of ''''''linear form'''''''

console.log("Arrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyssssssssssssssssssssssss");


let array1 = ["html", "css", "js", "reactjs", "nodejs", "java"];
console.log(array1);
console.log(array1.length);

//Arrays indices..........................................................................................

//'''''''''''''''''''''''''''''''''''''''''''''Arrays are mutable i.e. the values within them can be changed.''''''''''''''''''''''''''''''''''''''''''''''''''''''
//Array indices: It is basically to locate any item in any array set.


console.log(array1[2]);


//Loops over an array...........................................................

console.log("Items in array1 by for loop:");

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    
}

// ''''''''''''''''both for-of and for-in loops can be used as well but, we will prefer to use for of loop''''''''''''''

console.log("Items in array1 by for-of loop in UpperCase:");

for (let el of array1) {
     console.log(el.toUpperCase());
}

///PRACTICE QUESTION

let marksOfStudents = [85, 97, 44, 37, 76, 60];

let X = marksOfStudents;

let sum = 0;

for (let val of X) {
    sum += val;
}

console.log("List of student marks = ",X);

console.log("sum of class marks = ", sum);
console.log("No. of students in class = ", X.length);

let avg = sum / X.length;
console.log("average marks of class = ", avg );

//apply 10% offer on each item price and list the final price for each item after offer application.

// let itemsPrice = [250, 645, 300, 900, 50];

// let idx = 0;

// for(let val of itemsPrice) {
//     console.log(`items price value at ${idx} = ${val}`);    
//     let offer = val[idx]/10;
//     let val = val[idx] - offer;
//     console.log(`Final Price after applying offer = ${val}`);
//     idx++;
// } Didnot understand this..................................(weekend task, do revise all previous work)..................................................


//````````````````````````````ARRAY METHODS`````````````````````````````````````

//1) push() --> Push Method --> adds an or multiple items at the end of the array.--> it brings change in the original array.
//2) pop() --> pop Method --> delete an item from end and then returns it --> brings change in the original array.
//3) toString() --> converts an array into string --> don't change the original array, returns a new one.
//4) concat() --> joins two or multiple arrays. --> gives a new array, don't change the original array.
//5) unshift() --> adds an or multiple items at the start of an array.--> changes the original array.
//6) shift() -->  deletes an item from start and returns it. --> changes the original array.
//7) slice() --> used to get the slice or portion of the array by giving indices in it. ---> don't change the array, gives a new array.
//8) splic() --> can be used to add, delete or replace the the array items, --> chhanges the array.

let foodItems = ["burger", "apple", "banana", "orange", "mango"];
let heroes = ["superman", "batman", "spiderman",];

//1) push()
console.log(foodItems);

foodItems.push("potato", "tomato");
console.log(foodItems);

//2) pop()

let dItem = foodItems.pop();
console.log(foodItems);
console.log("deleted item =",dItem);

//3) toString()

let foodItemsStr = foodItems.toString();
console.log("converted to string =",foodItemsStr);
console.log(foodItems);

//4) concat()

let combination = foodItems.concat(heroes);
console.log(foodItems.concat(heroes));
console.log(combination);

//5) unshift()

foodItems.unshift("tomato");
console.log(foodItems);

//6) shift()

let d2item = foodItems.shift();
console.log(foodItems);
console.log(d2item);

//7) slice()

let fdSlice = foodItems.slice(1,5);
console.log("fdSlice =", fdSlice);
console.log(foodItems);


//8) splice()

//Addition

foodItems.splice(0,0,"tomato");
console.log(foodItems);

//deletion

foodItems.splice(1,1);
console.log(foodItems);

//replace

foodItems.splice(1,1,"burger");
console.log(foodItems);


//print as original

console.log(foodItems.splice()); // no change in the array.
console.log(foodItems);

//if we give only one index, then including value at that index and onward, it will give the slice of it upto the end.

let idxSplice = foodItems.splice(0); // Will delete all items from that index onwards, and giving it a variable we can access deleted items.
console.log(foodItems);
console.log(idxSplice);

//Imp. note:.................................................
//properties and methods are easier and can be revised easily, the difficult part is conditional statements, loops, operators, when it comes to apply them in a particular scenario, moreover when it comes to answer a question and it includes using operators, loops and conditional statements, simultaneously then it becomes most difficuly and problematic (needs to practice them alot)......................................................



//PRACTICE QUESTION...........................................................

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a) remove the first company

companies.shift();
console.log(companies);

//b) replace uber with ola

companies.splice(1,1,"Ola");
console.log(companies);

//c) add amazon at the end

companies.push("Amazon");
console.log(companies);

console.log("Final Companies set =",companies);

console.log("practice Q, solved, 👍");

//............................................................................................................................







































