function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function measureTime(e) {
    let stopTime = new Date()
    let results = stopTime - startTime
    document.onmousedown = undefined
    document.getElementById('mainMenyButton').className = "vivible , mainMeny "
    document.getElementById('body').className = "bodyResults";
    document.getElementById('results').innerHTML = results + "  ms";
    document.getElementById('click').className = "hidden";
    document.getElementById('restartButton').className = "vivible , buttonRestart";
}









function switchPage() {

    let timerHasStarted = false;
    document.getElementById('before').className = "hidden"

    const timerId = setTimeout(
        function change() {
            timerHasStarted = true;
            document.getElementById("body").className = "green";
            document.getElementById("click").className = "visible click";
            document.getElementById("wait").className = "hidden";
            document.onmousedown = measureTime
            startTime = new Date()

        }, getRandomNumberBetween(1 * 1000, 10 * 1000));

    

    document.addEventListener("click", function () {
        if (timerHasStarted === false) {
            document.getElementById('before').className = "visible toSoon"
            document.getElementById('agin').className = "restartAgin"
            console.log("stopping timer",timerId);
            clearTimeout(timerId);
            document.getElementById('body').className = "bodyResults"
            document.getElementById('wait').className = "hidden"

            document.addEventListener('click', function () {
                window.location.href = "/TheTests/react/react.html";
            })
        }  
            
        
    })
}