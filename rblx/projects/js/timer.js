const TimerElement = document.getElementById('timer')
const btn_start = document.getElementById('start')
const btn_stop = document.getElementById('stop')
const btn_reset = document.getElementById('reset')
const input = document.getElementById('input')

var Interval;
var Seconds;

btn_start.onclick = function() { 
    var content = Number(input.value)
    Seconds = content
    clearInterval(Interval); 
    Interval = setInterval(Timer, 1000) 
}

btn_stop.onclick = function() { 
    clearInterval(Interval) 
}

btn_reset.onclick = function() { 
    clearInterval(Interval); 
    Seconds = 0;
    input.value = ''
    TimerElement.style.color = 'rgb(0,0,0)'
    TimerElement.innerHTML = "0s"; 
}

Timer = function() {
    Seconds -= 1;

    if (Seconds <= 0) {
        TimerElement.style.color = 'rgb(200,0,0)'
        TimerElement.innerHTML = "Finish!"
        clearInterval(Interval)
    }
    TimerElement.innerHTML = Seconds + "s left"
}