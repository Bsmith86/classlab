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

//E. Driver's Ed
//Make a variable that holds a person's age; be semantic
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


function drive(age) {
    if (age >= 16)
    console.log("Here are the keys!");
    else {
        console.log("Sorry, you're too young.");  
    }
}

drive(20);
drive(13);


//II. Loops

//A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
//Write a loop that will print out all the numbers from 10 up to and including 400
//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0;i <= 10; i++) {
    console.log(i);
}

for (let i = 10;i <= 400; i++) {
    console.log(i);
}

for (let i = 12;i <= 4001; i+= 3) {
    console.log(i);
}

//B. Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1;i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i + "<-- is an even number");
    }
    else {
        console.log(i);
    }
}

//C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for (let i = 1;i <= 100; i++) {
    if (i % 15 == 0 ) {
        console.log(`I found a ${i}. High five!` + `I found a ${i}. Three is a crowd`);
        
    }
    else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
    else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);

    }
   
}

//D. Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
    bank_account += i;
}

console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bank_account2 = 0;

for (let i = 1; i <= 100; i++) {
    bank_account2 += i *2;
}

console.log(bank_account2);

//III. Arrays & Control flow

//A. Talk about it:
//What are the things in an array called?
  // Elements
//Do Arrays guarantee those things will be in order?
    // Yes
//What real-life thing could you model with an array?
    // Movie Collection

//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["What's you favorite Scary Movie", "Not the Moma", "I'm Iornman"];

//C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array
console.log(randomThings[0]);
//Change the value of "Hello"to "World"
randomThings.splice(2, 1, "World");
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass.splice(4, 1, "Octocat");
console.log(ourClass);

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass);

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon");
myArray.push("Roll Tide");
//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
//Remove the string of your choice from the end of the array.
myArray.pop();
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.reverse();
console.log(myArray.reverse());
console.log(myArray);
// Yes it did mutate my array