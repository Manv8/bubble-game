const startBtn = document.querySelector(".startbtn")
startBtn.addEventListener("click",()=>{

function makeBubble() {

    var clutter = "";
    for (let i = 0; i <= 118; i++) {
        clutter += `<div id class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter
}

function bubbleEvent() {
    document.querySelector("#pbtm").addEventListener("click", (e) => {
        let value = e.target.textContent
        let hitValue = document.querySelector("#hitBox")
    //    console.log(hitValue.textContent)
if(value===hitValue.textContent){
    showScore()
    makeBubble()
    hitNum()
}else{
    makeBubble()
}

    })
}
function gameOver(){
    document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER<h1>`



}

var timer = 60;
function runTimer() {
    var timeInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer
        }
        else {
            clearInterval(timeInt)
        }
        if(timer===0){
            gameOver()
        }
    }, 1000);
}

function hitNum() {
    let num = Math.floor(Math.random() * 10);
    document.querySelector("#hitBox").textContent = num
}
var score = 0
function showScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score
}






gameOver()
bubbleEvent()
hitNum()
runTimer()
makeBubble()

})