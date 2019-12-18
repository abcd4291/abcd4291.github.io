var cookies = 0;

var oven = document.getElementById("YumYumClick");
var WowCounter=document.getElementById("CookieCounter")
var bakery =document.getElementById("GetSomeBakers")
var bakerCounter = document.getElementById("BakerCounter")
oven.onclick = function() {
  cookies += 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  cookieCounter.innerHTML= Math.round(cookies);
}

bakery.onclick = funtion(){
  if(cookies >= bakerCost){
cookies -= bakerCost;
bakerCost *=1.2;
bakers++;
cookieCounter.innerHTML = Math.round(cookies);
bakerCounter.innerHTML = bakers;
bakery.innerHTML = "Bakers - cost: " + Math.round(bakerCost);
}
}
setInterval(funtion(){
  cookies += bakers  / 20 ;
  cookieCounter.innerHTML = Math.round(cookies);
}, 50);
