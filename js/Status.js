var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);

var StatusData = JSON.parse(Request.responseText);

console.log(StatusData["Version"][0])