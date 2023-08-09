let ds = 6
document.getElementById("Bt").onclick = function(){
    let rn = Math.floor(Math.random() * ds + 1);
    document.getElementById("rnt").innerHTML = "The Random Number Is " + rn;
}
document.getElementById("cbt").onclick = function(){
    let ds = Number(window.prompt("How Many Sides Shoud The Dice Have?"))
}