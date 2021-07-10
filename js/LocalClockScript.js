const ClockItem = document.getElementById("user-clock-local")
var count = 0;

setInterval(function() {
    count += 1
    ClockItem.innerHTML = count + "s since login"
}, 1000)