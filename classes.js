
class Car {
  constructor (make, serialNumber, price, color, doors) {
    this.serialNumber = serialNumber;
    this.make = make;
    this.price = price;
    this.color = color;
    this.doors = doors || 2;
    
  }
  drive () {
    console.log('Vroom Vroom');
  }
  stop () {
      console.log("Brakes");
  }
 
}
  
  let myGarage = [];

  const newCar = new Car ("Honda", 321, 16000, "Gold", 2)
  const newCar1 = new Car ("BMW", 331, 50000, "BLK", 4)
  const newCar2 = new Car ("Acura", 501, 25000, "Silver", 2)
  const newCar3 = new Car ("Jeep", 504, 11000, "Blue", 4)
  const newCar4 = new Car ("Infiniti", 551, 50000, "Silver", 2)
  myGarage.push(newCar, newCar1, newCar2, newCar3, newCar4)

console.log(myGarage);

  myGarage.map((el) => {
    el.drive();
     console.log(el.serialNumber);

} )
  // 2.
  // Create a class called trucks - with a doors property that defaults to 2 doors.
  // add a 'price' property and 2 others. Add a couple of methods.
  // make 5 trucks and store them in an array called myTruckCollection  OUTSIDE of the class.

  class Truck {
    constructor (make, serialNumber, price, color, milage, doors) {
      this.serialNumber = serialNumber;
      this.make = make;
      this.price = price;
      this.color = color;
      this.doors = doors || 2;
      this.milage = milage;
    }
    drive () {
      console.log('Vroom Vroom');
    }
    stop () {
        console.log("Brakes");
    }
    fourWheel () {
        console.log("Off Roading time")
    }

  }
  let myTruckCollection = [];

  let newTruck = new Truck ("Toyota", 321, 16000, "Gold", 100000)
  let newTruck1 = new Truck ("Mitzubishi", 331, 36000, "BLK", 35000)
  let newTruck2 = new Truck ("Ford", 501, 20000, "Silver", )
  let newTruck3 = new Truck ("Jeep", 504, 10000, "Blue", )
  let newTruck4 = new Truck ("GMC", 551, 35000, "Silver", )
  myTruckCollection.push(newTruck,newTruck1,newTruck2,newTruck3,newTruck4)

console.log(myTruckCollection);
  
  // 3.
  // make a function called compareCollections
  // create a variable in the function called carsValue and (by iterating through the array) get the average price.
  // do the same for the trucks collection
  // log a string explaining which collection has a higher average price

  const compareCollections = () => {
    let totalCarValue = 0;
    myGarage.forEach(el => {
      totalCarValue += el.price;
      averageCarPrice = totalCarValue / myGarage.legnth
    });
    let totalTruckValue = 0;
    myTruckCollection.forEach(el => {
      totalTruckValue += el.price;
      averageTruckPrice = totalTruckValue / myTruckCollection.legnth 
    });
    if (averageCarPrice > averageTruckPrice) {
      console.log("Cars total value is more than the trucks.");
    }
    else if (averageTruckPrice > averageCarPrice){
      console.log("Trucks total value is more than the cars.");
    }
    else {
      console.log("Tie")
    }
  }
  compareCollections();
  //console.log(totalCarValue);
 //compareCollections()
  // 4.
 // Create a class called Person - add appropriate properties and methods.
 class Person {
    constructor(age, height, weight, gender) {
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.gender = gender;
    }
    greeting () {
      console.log("Hey how are you");
    }
    
 }
 const champ = new Person(25, 60, 125, "male")
 console.log(champ);
 champ.greeting();
  // 5.
//  create a class called Enemy that extends Person, adding extra properties and methods.

class Enemy extends Person {constructor (age, height, weight, gender, weapon) {
  super(age, height, weight, gender);
  this.weapon = weapon;
}
  
attack () {
  console.log("Swings weapon");
  }

}
   let rodger = new Enemy(36, 65, 150, "Male", "Sword")
   console.log(rodger)
rodger.attack();
    // 6.
    // create a Factory that takes a name as a parameter.
  // create an instance of the factory called const jerry = new Factory('jerry')
  // the factory should have an empty array called "friends" (this.friends = [])
  // the factory should also have a method to push friends to that array (taking the friend's name as a parameter)
class Factory {
  constructor (name) {
    this.friends = []
    this.name = name
  }
  addFriend (name) {
    this.friends.push(name);
  }

}
const jerry = new Factory("Jerry")
console.log(jerry);
jerry.addFriend("Kim");
console.log(jerry)
// 7.  
// Create a class that will produce Comments (author, content, date, likes, commentIndex (where the comment fails) ).
// Make another class for  social media posts.
// The object should have properties author, content, date, likes, and comments ( empty array).
// There should be a method called editContent that takes in a new string that will replace the content.
// There should be another method called addComment that uses the Comments class to create a new comment with some passed values (arguments) and
// pushes that comment object to the comments array.


class Comments {
  constructor (author, content, date, likes, commentIndex) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.commentIndex = commentIndex;
  }
  
  

}

const brandon = new Comments("Brandon", "blank", new Date, 100,)

class SMPost {
  constructor (author, content, date, likes, []) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.likes = likes;
    this.comment = [];
  }
  
  editContent (string) {
    this.content = (string)
  }

  addComment (string) {
    this.comment.push(string)  
  }

  }
  

console.log(brandon);



console.log(brandon);

const brandon1 = new SMPost("Brandon", "blank", new Date, 100,[])

brandon1.editContent("Tell me how you feel")

console.log(brandon1);

brandon1.addComment("So over this");

console.log(brandon1);