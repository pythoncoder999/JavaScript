// alert("MPG Calculator")

// alert("The Calculate MPG application")
// var miles = prompt("Enter miles driven");
// miles = parseFloat(miles);

// var gallons = prompt("Enter gallons of gas used");
// gallons = parseFloat(gallons);

// var mpg = miles/gallons;
// mpg = parseInt(mpg);
// alert("Miles per gallon = " + mpg);

"use strict"
var $ = function(id) {
	return document.getElementById(id);
}

var calculateMPG = function(miles, gallons) {
	var mpg = (miles/gallons);
	mpg = mpg.toFixed(1);
	return mpg;
}

var processEntries = function () {
	var miles = parseFloat($("miles").value);
	var gallons = parseInt($("gallons").value);
	
	if (isNaN(miles) || isNaN(gallons)) {
		alert("Both entries must be numeric");
	}
	else {
		$("mpg").value = calculateMPG(miles, gallons);
	}
}
window.onload = function() {
	$("calculate").onclick = processEntries;
	$("miles").focus();
}