const StopWatch = document.getElementById('stopwatch')
const btn_start = document.getElementById('start')
const btn_stop = document.getElementById('stop')
const btn_reset = document.getElementById('reset')

var Interval;
var Seconds = 0;
var MinSeconds = 0;
var HourSeconds = 0;
var Milliseconds = 0;

btn_start.onclick = function() {
    clearInterval(Interval)
    Interval = setInterval(Timer, 10)
}

btn_stop.onclick = function() {
    clearInterval(Interval)
}

btn_reset.onclick = function() {
    clearInterval(Interval);
    Seconds = 0; MinSeconds = 0; HourSeconds = 0; MinSeconds = 0;
    StopWatch.innerHTML = Seconds + "s";
}

Timer = function() {
    var Step = Math.floor(1/100)
    Seconds += Step; MinSeconds += Step; HourSeconds += Step;
    Milliseconds += 10

    if (Seconds >= 60) {
        Seconds = 0
    }
    if ((MinSeconds/60) >= 60) {
        MinSeconds = 0
    }
    if (Milliseconds >= 60) {
        Milliseconds = 0
    }

    var Mins = Math.floor(MinSeconds/60);
    var Hours = Math.floor(HourSeconds/3600);
    StopWatch.innerHTML = Hours + "h " + Mins + "m " + Seconds + "s " + Milliseconds + "ms"
}