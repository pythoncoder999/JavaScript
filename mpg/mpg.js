// alert("MPG Calculator")

alert("The Calculate MPG application")
var miles = prompt("Enter miles driven");
miles = parseFloat(miles);

var gallons = prompt("Enter gallons of gas used");
gallons = parseFloat(gallons);

var mpg = miles/gallons;
mpg = parseInt(mpg);
alert("Miles per gallon = " + mpg);
