// 1a.) Code is processing two variable numbers added together
var dog = 3;
var cat = 3;

console.log(dog+cat)

// 1b.) Code is processing two  variable strings added together
var myFavoriteFood = 'pizza';
var myFavoriteDrink = 'soda';

console.log('My favorite food is: ' + myFavoriteFood + '. My favorite drink is: ' + myFavoriteDrink);

//2.) Code is processing 2 sets of arrays, and logging to the console the decided call back. In this case, guitars. Gretsch [0], Ibanez [1].
var instruments = [
  ["guitar","cello", "violin"],
  ["flute", "trumpet", "trombone"]
];

console.log(instruments [0][1], instruments[0][2]);


// 3.)This code is using "if else" to solve whether or not the variable titled 'number = 50' is greater than 100, or less than 100.  Whatever the outcome, an alert will notify the user.  The prompt informs the user

var number = prompt("What is your number")

if(number < 100) {
  prompt("Checking if Number is Less than 100")
  alert("this is less than 100")
} else {
  alert("this is greater than 100")
}


var classicalComposer = {
  Bach: '1685',
  Mozart: '1756',
  Beethoven: '1770'
}


  var response = prompt("What year was Bach born?")
  if (classicalComposer.Bach == response){
    console.log('Correct')
  }else {
      console.log("no information")
    }


//6.)This Code tarets a parameter 'inputname' and logs an answer based on the chosen argument.
function name(inputname) {
  console.log('My name is ' + inputname);
}

name('Marco');

//7.)This code declares no arguments, but still prints somethign to the console
function planets() {
  console.log("pluto");

}

planets()

//8.) This Code alerts the user what door they selected, and the prize they won!
function hiddenPrize(doorNumber){
  if (doorNumber === 1){
  alert('Your prize is a puppy.')
}
else if (doorNumber === 2){
  alert('Your prize is a pony')
}
else if (doorNumber === 3 ){
  alert('Your prize is a dragon')
  }
  else {
    alert('Fly to the Moon!')
  }
}

hiddenPrize(2);
