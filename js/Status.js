// Getting the Json Data: Status.json
var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);
var StatusData = JSON.parse(Request.responseText);

// Applying the data to the current page.
const Header = document.getElementById('json-status-header')

Header.style.color = '#4ba823';
Header.innerHTML = StatusData.Status;