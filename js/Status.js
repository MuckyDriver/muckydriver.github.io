// Getting the Json Data: Status.json
var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);
var StatusData = JSON.parse(Request.responseText);

// Applying the data to the current page.
console.log(StatusData.Version)

const Header = document.getElementById('json-status-header')

Header.innerText = StatusData.Status;