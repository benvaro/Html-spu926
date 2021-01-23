document.body.style.backgroundColor = "pink";

let el = document.getElementById("test");
el.style.backgroundColor = "olive";

let elements = document.getElementsByTagName("footer");
elements[0].style.height = "100px";
elements[0].style.backgroundColor = "magenta";
let footer = elements[0];
footer.textContent = "<h1>Hello</h1>"
footer.innerHTML = "<h1>Hello</h1>"

document.getElementsByClassName("active")[0].style.color = "green";

document.querySelector("center .container").style.width = "20%";
let e = document.querySelector("div"); //.innerHTML = "<h1>Here</h1>";
console.log(document.querySelectorAll("section"));
console.log(e.querySelector("img"))
e.querySelector("img").src = "img/index tagline (2).png"