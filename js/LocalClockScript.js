const ClockItem = document.getElementById("user-clock-local")
var count = 0;
var waitTime = 1000 // ms // start timeset

setInterval(function() {
    count += 1
    if (count < 60) {
        ClockItem.innerHTML = count + "s since on this page!"
    } else {
        waitTime = 60000
        ClockItem.innerHTML = count + "m since on this page!"
    }
}, waitTime)