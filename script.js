window.onload = function() {

let second = 00;
let tens = 00;
let showSecond = document.getElementById("second");
let showTens = document.getElementById("tens");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
var Interval;

btnStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(start, 10);
})

btnStop.addEventListener("click", () => {
    clearInterval(Interval)
})

btnReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "00";
    second = "00";
    showTens.innerHTML = tens;
    showSecond.innerHTML = second;
})

function start(){
    tens++;
    if(tens <= 9){
        showTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        showTens.innerHTML = tens;
    }
    if(tens > 99){
        second++;
        showSecond.innerHTML = "0" + second;
        tens = 0;
        showTens.innerHTML = "0" + 0;
    }
    if(second > 9){
        showSecond.innerHTML = second;
    }
}

}
