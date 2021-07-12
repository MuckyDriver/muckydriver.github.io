const TimerElement = document.getElementById('timer')
const btn_start = document.getElementById('start')
const btn_stop = document.getElementById('stop')
const btn_reset = document.getElementById('reset')
const input = document.getElementById('input')

var Interval;
var Seconds;

btn_start.onclick = function() { 
    Seconds = Number(input.value) + 1
    clearInterval(Interval); 
    TimerElement.style.color = 'rgb(0,0,0)'
    Interval = setInterval(Timer, 1000) 
}

btn_stop.onclick = function() { clearInterval(Interval) }

btn_reset.onclick = function() { 
    clearInterval(Interval); 
    Seconds = 0; input.value = ''
    TimerElement.style.color = 'rgb(0,0,0)'
    TimerElement.innerHTML = "Ready!"; 
}

Timer = function() {
    Seconds -= 1;
    if (Seconds <= 0) {
        TimerElement.style.color = 'rgb(200,0,0)';
        TimerElement.innerHTML = "Finish!";
        clearInterval(Interval)
    } else {
        TimerElement.innerHTML = Seconds + "s left"
    }
}