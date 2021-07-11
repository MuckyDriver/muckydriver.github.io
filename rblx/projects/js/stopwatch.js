const StopWatch = document.getElementById('stopwatch')
const btn_start = document.getElementById('start')
const btn_stop = document.getElementById('stop')
const btn_reset = document.getElementById('reset')

var Interval;
var Seconds = 0;
var MinSeconds = 0;

btn_start.onclick = function() {
    clearInterval(Interval)
    Interval = setInterval(Timer, 1000)
}

btn_stop.onclick = function() {
    clearInterval(Interval)
}

btn_reset.onclick = function() {
    clearInterval(Interval);
    Seconds = 0; MinSeconds = 0;
    StopWatch.innerHTML = Seconds + "s";
}

Timer = function() {
    Seconds += 1
    MinSeconds += 1

    if (Seconds >= 60) {
        Seconds = 0
    }

    StopWatch.innerHTML = Math.floor(MinSeconds/60) + "m " + Seconds + "s"
}