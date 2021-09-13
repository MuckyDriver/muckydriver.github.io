var Request = new XMLHttpRequest();
Request.open("GET","./json/status.json", false);
Request.send(null);

var StatusData = JSON.parse(request.responseText);

console.log(StatusData)