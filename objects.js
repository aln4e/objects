// Create a function that creates car objects which have a make, model year, and color. Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

function createNewCar(newMake, newModelYear, newColor){
  return {
  make: newMake
  modelYear: newModelYear
  color: newColor
  getCarData: function(){return this.make + " " + this.modelYear + " " + this.color}
  }
}

// to create a new car, declare a new variable and call any object
var car = createNewCar("Honda", 2011, "Gray");

//The car can accelerate, brake, and tell you its speed.

function speedometer (){
  var currentSpeed = 55;
  return {
    getSpeed: function(){return currentSpeed},
    accelerate: function(){currentSpeed += 10},
    brake: function(){currentSpeed -= 7}
    stop: function(){return 0}
  }
}

//to start function, declare a variable
var speed = speedometer()

// Create a car object and use a while loop to take its speed up to 50mph.
Then use a while loop to brake down to 0mph.
Surprise: it doesnt stop at 0mph, fix that.

function createNewCar(newMake, newModelYear, newColor){
  var newSpeed = 0
  return {
    make: newMake,
    modelYear: newModelYear,
    color: newColor,
    getCarData: function(){return this.make + " " + this.modelYear + " " + this.color},
    getSpeed: function(){return newSpeed},
    accelerate: function(){newSpeed++},
    brake: function(){newSpeed--},
    stop: function(){return 0}
  }
}

var toyota = createNewCar("toyota", 2000, "red")

function drive(car){
  while(car.getSpeed() <= 70){
    console.log(car.getSpeed())
    car.accelerate()
  }
  while(car.getSpeed() > 0){
    car.brake()
    console.log(car.getSpeed())
  }
}


//Limit the car's maximum speed to 85mph. Try taking it above 80mph and see //what happens.
//Hint: What should happen when you call accelerate at 80mph?

function createNewCar(newMake, newModelYear, newColor){
  var newSpeed = 0
  return {
    make: newMake,
    modelYear: newModelYear,
    color: newColor,
    getCarData: function(){return this.make + " " + this.modelYear + " " + this.color},
    getSpeed: function(){return newSpeed},
    accelerate: function(){newSpeed+=10},
    brake: function(){newSpeed-=7},
    stop: function(){return 0}
  }
}

var toyota = createNewCar("toyota", 2000, "red")

function drive(car){
  var maxSpeed = 85
  while(car.getSpeed() <= (maxSpeed - 10)){
    car.accelerate()
    console.log(car.getSpeed())
  }
}

// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed. (Hint: Math.random()). How many iterations does it take to stop the car?

var newSpeed = 100

function createNewCar(newMake, newModelYear, newColor){
  return {
    make: newMake,
    modelYear: newModelYear,
    color: newColor,
    getCarData: function(){return this.make + " " + this.modelYear + " " + this.color},
    getSpeed: function(){return newSpeed},
    accelerate: function(){newSpeed++},
    brake: function(){newSpeed-=(Math.ceil(Math.random()*(newSpeed/2)))},
    stop: function(){return 0}
  }
}

var toyota = createNewCar("toyota", 2000, "red")

function slippery(car){
while(car.getSpeed() > 0){
  car.brake()
  console.log(car.getSpeed())
}
}

//Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.


function isIdValid (str){
  return str.length >= 6 && (!str.includes("!") && !str.includes("#") && !str.includes("$"))
}

function hasLower(str){
  return str.toUpperCase() !== str;
}

function hasUpper(str){
  return str.toLowerCase() !== str;
}

function isPasswordValid(str){
  return str != "password" && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes("$")) && (str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9") || str.includes("0")) && hasUpper(str) && hasLower(str)
}

function checker(user, pass){
  return isIdValid(user) && isPasswordValid(pass)
}

function main(){
  var username = prompt("Enter User Name")
  var password = prompt("Enter Password")

  alert("Credentials valid? " + checker(username, password))
}

function newUser(userId, password) {
  return{
    valid: function(){return isIdValid(userId)},
    reason: function(){if (isIdValid(userId) == true && isPasswordValid(password) == true){return ""}else if (((isIdValid(userId) == true) && (isPasswordValid(password) == false))||((isIdValid(userId) == false) && (isPasswordValid(password) == false))) {return ", You should also review the password requirements!"
  }else{return ""}},
  both: function(){return "Is your username valid? " + newUser(userId, password).valid() + newUser(userId, password).reason()}
}
}
var testCaseFalse = newUser("123", "123")
var testCaseTrue = newUser("123456", "Asd123!")
var badUser = newUser("123", "Asd123!")
var badPass = newUser("123456", "123")





//still working on this
function userIdLength(userId){
  return {
    length:function() {
      if(newUser(userId).length < 6) {
        return "Password must be at least 6 characters"
      }
    }
  }
}


  //return str.length >= 6 && (!str.includes("!") && !str.includes("#") && !str.includes("$"))
