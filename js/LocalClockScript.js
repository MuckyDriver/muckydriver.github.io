const ClockItem = document.getElementById("user-clock-local")
var count = 0;
var waitTime = 1000 // ms // start timeset

setInterval(function() {
    count += 1
    if (count < 60) {
        ClockItem.innerHTML = count + "s since on this page!"
    } else {
        ClockItem.innerHTML = (count/60) + "m since on this page!"
    }
}, waitTime)