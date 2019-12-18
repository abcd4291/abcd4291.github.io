var eggs= 0;
var eggButton= document.getElementById("eggButton");
var eggDisplay= document.getElementById("eggDisplay");

var chickens= 0;
var chickenButton= document.getElementById("chickenButton");
var chickenDisplay= document.getElementById("chickenDisplay");

var friedchickens= 0;
var friedchickenButton= document.getElementById("friedchickenButton");
var friedchickenDisplay= document.getElementById("friedchickenDisplay");

var humans= 0;
var humanButton= document.getElementById("humanButton");
var humanDisplay= document.getElementById("humanDisplay");




eggButton.onclick = function(){
  eggs= eggs + 1;
  eggDisplay.innerHTML= Math.round(eggs) + "eggs(s)";
}

chickenButton.onclick= function(){
  if(eggs>= 2){
    eggs-= 2;
    eggs++;
    eggDisplay.innerHTML = Math.round(egg) + "eggs(s)";
    chickenDisplay.innerHTML = Math.round(chicken) + "chickens(s)";
  chickens= chickens + 1;
  chickenDisplay.innerHTML= chickens + "chickens(s)";
}


friedchickenButton.onclick = function(){
  friedchickens= friedchickens + 1;
    friedchickenDisplay.innerHTML = friedchickens + "friedchickens(s)";
}
human.onclick = function(){
  human= human + 1;
  humanDisplay.innerHTML = human + "human";
}
}
