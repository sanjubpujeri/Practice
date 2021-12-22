function oneSecond(){
    setTimeout(function (){
        console.log("Om!!");


    }, 5000);
}

function stopWatch(){
    setInterval(function(){
        console.log("Hari Om");
    },2000);
}

oneSecond();
stopWatch();