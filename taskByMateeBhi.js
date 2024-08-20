let a = 5;
let b = 2;


//Arithmatic Operators
console.log("a=", a, "& b=",b);

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a**b =", a**b);

//Unary Operators --> (a++, ++a, a--, --a) --> a++ and ++a = (a=a+1) , a-- and --a = (a=a-1)

//one way 

/*a = a + 1;
console.log("a =", a); // a=6
a = a - 1;
console.log("a =", a);*/ // a=4

//Better Way

/*a++
console.log("a =", a); a=6

a--
console.log("a =", a);*/ // a=4

// Best Practice 
//console.log("a++ =", a++); //--> ++a= 5
//console.log("a =", a);    // -->  a = 6
//console.log("++a =", ++a); --> ++a = 6 
//console.log("a =", a);    // -->  a = 6

//console.log("a-- =", a--); --> a-- = 5
//console.log("a =", a); --> a = 4
//console.log("--a =", --a);   --> --a= 4
//console.log("a =", a); --> a = 4

// Assignment Operators

//1) Equals to  e.g. a=b, --> b is the value given to variable 'a' --> RHS will give some value to the variable at LHS in JS.

//2) "+=" operator

//a+=4 = (a=a+4)
a+=4;
console.log("a=", a);
//Same for the following
a-=4;
console.log("a=", a); 

a*=4;
console.log("a=", a);

a/=4;
console.log("a=", a);

a %= 4;
console.log("a=", a);

a **=4;
console.log("a=", a);

a = 5;
b = 2;

console.log("a=", a, "& b=", b);























