var Request = new XMLHttpRequest();
Request.open("GET","<path_to_file>", false);
Request.send(null);

var StatusData = JSON.parse(request.responseText);

console.log(StatusData)