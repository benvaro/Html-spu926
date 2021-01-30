// document.querySelector('.submit').onclick = (event) => {
//     event.target.style.backgroundColor = "green";
//     // console.dir(event)
// }

document.querySelector('.submit').addEventListener("click", (event) => {
    event.target.style.backgroundColor = "green";
})

let form = document.forms[0];
form.addEventListener("mouseover", changeBg);
form.addEventListener("mouseout", changeBg);

function changeBg(e) {
    form.classList.toggle("gradient")
    form.className = "trtr";
    console.log(form.className);
    
    // form.classList.contains("gradient") ?
    //     form.classList.remove("gradient") :
    //     form.classList.add("gradient");

    //  console.log(form.classList);
    // e.target.style.opacity = 0.5;
    // e.target.style.transform = "scale(0.5)";
}

function login(element) {
    console.log(element);
    element.style.backgroundColor = "purple";

    let textFields = document.querySelectorAll('input:not(.submit)');
    console.log(textFields);

    let user = {
        login: textFields[0].value,
        password: textFields[1].value
    }
    console.log(user);
}

const person = {
    name: 'Ivan',
    age: 18
}

console.log(person['name'])
for (const item in person) {
    console.log(item, '-->', person[item])
}


function User(name, age) {
    this.name = name;
    this.age = age;

    SetAge = (value) => {
        if (value < 0)
            return;
        age = value;
    }

}



let user = new User('Bill', 30);