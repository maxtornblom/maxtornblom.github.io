function click(e) {

    e.preventDefault()
   
    document.getElementById('clicks').className = "hidden"
    document
    

    setTimeout(function() {document.onmousedown = undefined;

        document.getElementById('clicks').innerHTML = "You clicked with the speed of " + results/5 + " CPS"
                                document.getElementById('clicks').className = "visible"
                                document.getElementById('restart').className = "visible"}, 5000);
   
    document.getElementById('results').innerHTML = results++
}

let results = 0;


document.onmousedown = click 





