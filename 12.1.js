//How do we assign a value to a variable?
//We assign the variable a name using let such as 'x' then use the = sign to bind it to a Value.

//How do we change the value of a variable?
//We call upon the variable buy name and using the prefix let then post call = and the new IDBCursorWithValue 

//How do we assign an existing variable to a new variable?
//We call upon the variable by name then use the '=' to bind it to the desired variable.
//Remind me, what are declare, assign, and define?
//To declare is synomomis to calling the variable, to assign is to use the '=' or assignment operater to bind said variable to a certain variable, and to define is to be GOD!

//What is pseudocoding and why should you do it?

//Pseudocoding is a way to talk yourself through the steps needed to take to get the wanted results.
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


//Create a variable called firstVariable

//Assign it the value of the string "Hello World"
let firstVariable = "Hello Word";
//Change the value of this variable to some number
firstVariable = 6;
//console.log(firstVariable);
//Store the value of firstVariablein a new variable called secondVariable
 let secondVariable = firstVariable;
//Change the value of secondVariableto any string.
secondVariable = "This is a string"
//What is the value of firstVariable?
//6
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
const yourName = "Brandon Smith";
console.log("Hello, my name is " + yourName);
//ex: Hello, my name is Jean Valjean

// Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a < b % c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 ==  '48');

//D. The farm
//1. Declare a variable animal. Set it to be either "cow" or something else
//2. Write code that will print out "mooooo" if the it is equal to cow
//3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//4. Commit

let animal = "cow"

function moo(animal) {
    if (animal == "cow")
    console.log("mooooo");
    else {
        console.log("Hey! You're not a cow.");  
    }
}

moo("cow");
moo("cat");