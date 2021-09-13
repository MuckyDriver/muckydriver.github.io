// Getting the Json Data: Status.json
var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);
var StatusData = JSON.parse(Request.responseText);

// Applying the data to the current page.
if (window.location.pathname.split("/").pop() == 'status' || window.location.pathname.split("/").pop() == 'status.html') {
    const Header = document.getElementById('json-status-header')

    Header.style.color = '#4ba823';
    Header.innerHTML = StatusData.Status;
} 

// This is for all pages which want to get the current game version, plus other data packages
const ver = document.getElementsByTagName('ver')
for (var i = 0; i < ver.length; i++) { ver[i].innerHTML = StatusData.Version }