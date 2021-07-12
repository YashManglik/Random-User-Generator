var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var city = document.querySelector("#city");
var username = document.querySelector("#username");
var email = document.querySelector("#email");

var url = "https://randomuser.me/api";
btn.addEventListener("click", callevent);


function callevent() {
    console.log("event");
    fetch(url)
    .then(parseJson)
    .then(updateInfo)
    .catch(printError)
}

function parseJson(res) {
    var data = res.json();
    console.log(data);
    return data;
}

function updateInfo(data) {
    console.log(data);
    data = data.results[0];
    avatar.src = data.picture.large;
    fullname.innerHTML = data.name.title + data.name.first + data.name.last;
    city.innerHTML = data.location.city;
    username.innerHTML = data.login.username;
    email.innerHTML = data.email

}

function printError(err) {
    console.log(err);
}
