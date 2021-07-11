// Constants
const ClockItem = document.getElementById("user-clock-local")
const Msg = 'since on this page!'
const CHTML = ClockItem.innerHTML

// Variables
var count = 0;
var waitTime = 1000 // ms // start timeset

// Function
setInterval(function() {
    count += 1
    if (count < 60) { 
        CHTML = count + "s " + Msg 
    } else { 
        CHTML = Math.floor(count/60) + "m " + Msg 
    }
}, waitTime)