function click(e) {

    e.preventDefault()
   
    document.getElementById('clicks').className = "hidden"
    document.getElementById('mainMeny').className = "hidden"
    

    setTimeout(function() {document.onmousedown = undefined;

        document.getElementById('clicks').innerHTML = "You clicked with the speed of " + results/5 + " CPS"
                                document.getElementById('clicks').className = "visible"
                                setTimeout(function() {
                                    document.getElementById('mainMeny').className = "visible mainMeny"
                                    document.getElementById('restart').className = "visible restart"  
                                },500)
                                }, 5000);
   
    document.getElementById('results').innerHTML = results++
}

let results = 0;


document.onmousedown = click 

function confirm() {
    confirm()
}





