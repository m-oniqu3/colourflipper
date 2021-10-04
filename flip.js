const values = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var length=values.length;

function hex (){
    var hexx="";   
    var sign ="#";
    for (count = 0; count < 6; count ++){
         randomhex =Math.floor(Math.random() * length);
         hexx+=values[randomhex];
    }
    var code =sign+hexx;
    return code.toString();
}


var flipButton=document.getElementById("flip-button");
var flipBox = document.getElementById("flip-box");
var colour = document.getElementById("colour");

flipButton.addEventListener("click", function flip(){
    var bg=flipBox.style.backgroundColor = hex();
    colour.innerHTML=bg;
})