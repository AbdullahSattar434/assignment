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

// Equals to  e.g. a=b, --> b is the value given to variable 'a' --> RHS will give some value to the variable at LHS in JS.

// "+=" operator

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

//Comparison operator 

a = 5;
b = 2;
let c = "5";
//"== Operator"
console.log("a=", a, "& b=", b);
console.log("a==b", 5==2);
console.log("c==a", c==a);

//"!=" Operator.
console.log("a!=b",5!=2);
//"===" Operator.
console.log("a===c", a===c);
//"!==" Operator,
console.log("c!==a", c!==a);
//>, >=, <, <= Operators
console.log("a>b", 5>2);
console.log("a>=b", 5>=2);// if any of the two greater then or equal to is true then the result will also be true.
console.log("a<b", 5<2);
console.log("a<=b", 5<=2);
console.log("b<=a", 2<=5);

//LOGICAL OPERATORS

//a) (&&) Logical AND
let d = 6;
let e = 3;

//One way
let cond1 = d > e;
let cond2 = d == e;
let cond3 = d != e;

console.log("cond1 && cond2=", cond1 && cond2);

//Short way for the same thing

console.log("cond1 && cond3", d>e && d!=e);

//b) (||) OR Operator
console.log("cond1 || cond3", d>e || d!=e);
console.log("cond1 || cond3", d<e || d!=e);
console.log("cond1 || cond3", d<e || d==e);

// c) (!) Logical NOT --> can be used only to verify one condition at a time, and will result or give true, false and vice versa.
console.log("!(d!=e)", !(d!=e));
console.log("!(6!=3)", !(d!=e));
console.log("!(d==e)", !(d==e));

alert("Operators, done!");





























