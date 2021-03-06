// Getting the Json Data: Status.json
var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);
var StatusData = JSON.parse(Request.responseText);

// Applying the data to the current page.
const Header = document.getElementById('json-status-header')

if (Header) {
    Header.style.color = '#4ba823';
    Header.innerHTML = StatusData.Status;
}

const progress = document.getElementById('json-progress');
if (progress) { progress.value = StatusData.Progress; }

// This is for all pages which want to get the current game version , plus other data packages
const ver = document.getElementsByTagName('ver') // custom tag "<ver></ver>"
for (var i = 0; i < ver.length; i++) { ver[i].innerHTML = StatusData.Version }

const perc = document.getElementsByTagName('perc') // custom tag "<perc></perc>"
for (var i = 0; i < perc.length; i++) { perc[i].innerHTML = StatusData.Progress }

const desc = document.getElementsByTagName('desc') // custom tag "<desc></desc>"
for (var i = 0; i < desc.length; i++) { desc[i].innerHTML = StatusData.Description }

const _status = document.getElementsByTagName('status') // custom tag "<desc></desc>"
for (var i = 0; i < _status.length; i++) { _status[i].innerHTML = StatusData.Status }