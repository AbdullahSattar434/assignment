//CHAPTER 4 "ARRAYS"--> COLLECTION OF ITEMS(USUALLY OF SAME TYPE)................................................................................................
// It can also include the collection of different type of items but usually we prefer to use arrays for storing same type of information// An array can be thought of like an object in which keys have been replaced by the indices or positions, moreover information stored in arrays is in the form of ''''''linear form'''''''

console.log("Welcome to Arrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyssssssssssssssssssssssss");


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




