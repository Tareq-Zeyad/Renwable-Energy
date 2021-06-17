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

var name = prompt("What is your name ?")
alert ("Welcome to the Green Energy World Dear " + name )

var energy = prompt("What field of Green Clean Energy are you curious about from these (Solar Power PV, Wind, Hydroelectric)?")

if (energy == "Solar Power PV"){
  document.write("<p>" + "Very practical choice, easy to install on the roof & covers all the household consumption." + "</p>")
    }

else if (energy == "Wind"){  
  document.write("<p>" + "Wind Farm is the most Expensive energy project but one of the promising power supply on the long term, you can read a breif about it here." + "</p>")
  }

else if (energy == "Hyrdoelectric"){ 
  document.write("<p>" + "Falling streams of water from a height makes it gain Potential Energy which by means of Gravity it can move a Turbine Blades to generate power, this is the purpose of Hydro Dams." + "</p>")
   }

else confirm ("Sorry you seem still like the old fashioned way of generating power")







