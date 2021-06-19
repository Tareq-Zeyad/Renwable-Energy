// Make the html code more dynamic.

/* 1st lecture into learning JS
JS: A set of instructions to order the machine to do certain tasks. Mostly it deals with client side so it is a front-end developing area.
Syntax: The rules to do something.

Data types:
Numbers: 2, 3.5, 10 , .....
boolean: true, false
strings: "any text between quotation marks"
Variables: any value stored in a symbol to be evaluated
var pi = 3.14 
var "name" = 5
Mathmatical Operator: + - * / 
assignment operator: = , == equal to, != not equal. */

/* var firstname = "Tarek";
console.log(firstname)
console.log("Helloooo World")
console.log(2*9) */

/* Conditional Statement
if (condition) { code    }
else { code }
*/

/* pop up box 
alert () = showing info to user
*/

/*
loop: when we want to repeat the code like in a cycle.

for: how many the code need to run.

for (initial exp, condition, counter){ the code I want to repeat

}
for (var i = 0; i<20 )


*/

/*var name = prompt("What is your name ?")
alert ("Welcome to the Green Energy World Dear " + name )

var energy = prompt("What field of Green Clean Energy are you curious about from these (Solar Power PV, Wind, Hydroelectric)?")

while (energy != "Solar Power PV" && energy != "Wind" && energy != "Hydroelectric" ) {
  energy = prompt("you entered wrong type of energy, can you try again?")
}

var numOfrating = prompt("What star rating would you give, 1-5?")
for (var i=0; i<numOfrating; i++){
  document.write("<img src= 'https://i5.walmartimages.com/asr/389afce0-83e2-4dd5-9fa8-767987f602d3_1.76e005ac52f7fec8aa5c8ae8aafcb2c6.jpeg' >" )

}*/



if (energy == "Solar Power PV") {
  document.write("<h3>" + "Great choice easy to maintain & install on the roof, it could cover most of the Household Consumption" + "</h3>")
  }


else if (energy == "Wind") {  
  document.write("<h3>" + "Promising source of Energy, is it the most expensive projects but the more efficient on the long term" + "</h3>")
  }


else if (energy == "Hyrdoelectric") { 
  document.write("<h3>" + "Useful way to convert the Potential Energy of the falling water into electricity by moving blades of the turbine that coupled with a generator" + "</h3>")

}

else confirm ("Sorry you seem still like the old fashioned way of generating power")







