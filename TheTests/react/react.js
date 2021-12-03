function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function measureTime(e) {
    let stopTime = new Date()
    let results = stopTime - startTime
    document.onclick = undefined
    document.onmousedown = undefined
    document.getElementById('mainMenyButton').className = "vivible , mainMeny "
    document.getElementById('body').className = "bodyResults";
    document.getElementById('results').innerHTML = results + "  ms";
    document.getElementById('click').className = "hidden";
    document.getElementById('restartButton').className = "vivible , buttonRestart";

   
} 

 


//document.onmousedown = alert("you clicked too early")




function switchPage() {


    return setTimeout(
        function () {
            document.getElementById("body").className = "green";
            document.getElementById("click").className = "visible";
            document.getElementById("wait").className = "hidden";
            document.onmousedown = measureTime
            startTime = new Date()
        }, getRandomNumberBetween(1 * 1000, 10 * 1000));
}

