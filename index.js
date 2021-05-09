const input = document.getElementById("search");
const lucky = document.getElementById("lucky");
const url = 'http://www.google.com/search?q=';

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});

lucky.addEventListener("click", function() {alert("no funciona ;)")})