const StopWatch = document.getElementById('stopwatch')
const btn_start = document.getElementById('start')
const btn_stop = document.getElementById('stop')
const btn_reset = document.getElementById('reset')

var Interval;
var Seconds = 0;
var MinSeconds = 0;
var HourSeconds = 0;

btn_start.onclick = function() {
    clearInterval(Interval)
    Interval = setInterval(Timer, 1000)
}

btn_stop.onclick = function() {
    clearInterval(Interval)
}

btn_reset.onclick = function() {
    clearInterval(Interval);
    Seconds = 0; MinSeconds = 0; HourSeconds = 0;
    StopWatch.innerHTML = Seconds + "s";
}

Timer = function() {
    Seconds += 1; MinSeconds += 1; HourSeconds += 1;

    if (Seconds >= 60) {
        Seconds = 0
    }
    if ((MinSeconds/60) >= 60) {
        MinSeconds = 0
    }

    var Mins = Math.floor(MinSeconds/60);
    var Hours = Math.floor(HourSeconds/3600);
    StopWatch.innerHTML = Hours + "h" + Mins + "m " + Seconds + "s"
}