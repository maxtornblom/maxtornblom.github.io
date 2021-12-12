function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function measureTime(e) {
    let stopTime = new Date()
    let results = stopTime - startTime
    
    document.getElementById('mainMenyButton').className = "vivible , mainMeny "
    document.getElementById('body').className = "bodyResults";
    document.getElementById('results').innerHTML = results + "  ms";
    document.getElementById('click').className = "hidden";
    document.getElementById('restartButton').className = "vivible , buttonRestart";
} 

 







function switchPage() {

    
        document.onmousedown = 0
       
    
       if(document.onmousedown = 0) {
           alert("you clicked too early")
       }

    return setTimeout(
        function () {
            document.getElementById("body").className = "green";
            document.getElementById("click").className = "visible click";
            document.getElementById("wait").className = "hidden";
            document.onmousedown = measureTime
            startTime = new Date()

        }, getRandomNumberBetween(1 * 1000, 10 * 1000));
}

