var count = 0;
var alpha = 0;
var clicky = 0;
var pop = 1000;
var dying = 1;
var dying2 = 1;
var death = 1000-pop;
var hunger = 100;
var health = 100;
//REAL WORLD TIMER********************

//***************INTRO
alert("End of the world. You have found an underground bunker. 1000 people have joined you in this bunker. Save humanity.")
var person = prompt("Please enter your name:", "")
document.getElementById("title").innerHTML = person + "'s Bunker";

// **************** CHECKING FOR GAME OVER *****
setInterval(function(){
	if (pop < 0) {alert("Game Over. All of the people in the bunker has died."); location.reload()};
}, 100);

//*************** WORLD CLOCK **************
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date()
document.getElementById("demo2").innerHTML = d.toLocaleTimeString();
}




//********************Progress Bar ***********

var elem = document.getElementById("myBar"); 
var width = 1;
setInterval(function(){width = pop/10; elem.style.width = width + '%';document.getElementById("mybar").width = width}, 100);










//****************** POPULATION AND DEATH

setInterval(function(){pop -= dying * dying2
			document.getElementById("population").innerHTML = "Population: " + pop;}, 1000);
	setInterval(function(){death = 1000 - pop
			document.getElementById("death").innerHTML = "Deaths: " + death;}, 1000)

//****************** HUNGER AND HEALTH

setInterval(function(){hunger -= 3
			document.getElementById("hunger").innerHTML = "Hunger: " + hunger + " %";
		if (50>hunger) {dying = 2
			};
		if (25>hunger) {dying = 4;
};
		if (25 == hunger) {alert (person + "! Your people are dying from hunger.")
};
		if (5>hunger) {dying = 100}
}, 2000);


setInterval(function(){health -= 1
			document.getElementById("health").innerHTML = "Health: " + health + " %";
		if (50>health) {dying2 = 2
			};
		if (25>health) {dying2 = 4;
};
		if (25 == health) {alert (person +"! Your people are dying from lack of health care.")
};
		if (5>health) {dying2 = 100}
}, 1000);
	

//******************Money Click

var button = document.getElementById("click me")
button.onclick = function() {
	count += 1 + alpha;
	document.getElementById("sys").innerHTML = "$ " + count;
};






//******************** ITEMS

function ms() {
	if (30 > count) {
  		alert("Not enough money. Generate more money.");

}	else { 
		pop += 5;
		count -= 30;
		document.getElementById("sys").innerHTML = "$ " + count;
		document.getElementById("population").innerHTML = "Population: " + pop;
	}
}

var button2 = document.getElementById("click me");
function msg() {
	if (40 > count) {
  		alert("Not enough money. Generate more money.");

}	else { 
		alpha += 1;
		count -= 40;
		document.getElementById("sys").innerHTML = "$ " + count;
		document.getElementById("particlecount").innerHTML = "Cash Printers: " + alpha;	
	}
}

function msg2() {
	if (2000 > count) {
  		alert("YOU DON'T HAVE ENOUGH CLICKS! Keep on clicking!");

}	else { 
		clicky += 1;
		count -= 2000;
		document.getElementById("sys").innerHTML = "$ " + count;
		document.getElementById("clickycount").innerHTML = "Workers: " + clicky;
		setInterval(function(){count += 1
			document.getElementById("sys").innerHTML = "$ " + count;}, 500);
	}
}

function msg3() {
	if (200 > count) {
  		alert("YOU DON'T HAVE ENOUGH CLICKS! Keep on clicking!");
}	else {
		count -= 200;
		hunger += 50;
		if (100 < hunger) {hunger = 100}
		document.getElementById("hunger").innerHTML = "Hunger: " + hunger + " %";
		document.getElementById("sys").innerHTML = "$ " + count;
}
}

function msg4() {
	if (100 > count) {
  		alert("YOU DON'T HAVE ENOUGH CLICKS! Keep on clicking!");
}	else {
		count -= 100;
		health += 30;
		if (100 < health) {health = 100}
		document.getElementById("health").innerHTML = "Health: " + health + " %";
		document.getElementById("sys").innerHTML = "$ " + count;
}
}

//******** LEVEL 2 ITEMS


/*
var alphavar = document.getElementById("alphabutton"),
	alphacount = 0;
alphavar.onclick = Function2() {
	alphacount = +=1;
document.getElementById("sys2").innerHTML = "Alpha: " + alphacount;
}
*/