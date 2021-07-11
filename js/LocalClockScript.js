// Constants
const ClockItem = document.getElementById("user-clock-local")
const Msg = 'since on this page!'

// Variables
var count = 0;
var waitTime = 1000 // ms // start timeset

// Function
setInterval(function() {
    count += 1
    if (count < 60) { 
        ClockItem.innerHTML = count + "s " + Msg 
    } else { 
        ClockItem.innerHTML = Math.floor(count/60) + "m " + Msg 
    }
}, waitTime)