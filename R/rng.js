
document.getElementById("Bt").onclick = function(){
    let rn = Math.floor(Math.random() * (Number(window.prompt("How Many Sides Do You Want The Dice To Have?"))) + 1);
    document.getElementById("rnt").innerHTML = "The Random Number Is " + rn;
}