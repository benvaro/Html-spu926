console.log("Hello");
var number = 100.78;
var num = 34;
num = "Hello";
num = 'Hello';
var str = '*'
num = `Hello ${number}`;
console.log(typeof (num) + num)
console.log(typeof number); // 2^53
console.log(typeof str); // 2^53

let test = 34;
console.log(typeof test);
console.log(34 / "aaa" + 34); // NaN
console.log('34' / '2');
console.log('34' * 2);
//alert("Message");
let name;
//let name = +prompt("Enter name")
console.log(typeof name)
console.log("Hello " + name)
console.log(name + 2);
console.log(1 / 0);

// + - / * % **
console.log(2 ** (1 / 3) - 1)
// ++ -- 
// - && || == === != !== < > <= >=

let a; // = prompt("Enter a");
// === - включаємо перевірку на тип
// == нестрога перевірка (без перевірки типу)
if (a === 2.0) {
    console.log("true");
} else {
    console.log("false")
}

index = 100;
console.log("index: " + index);

let res = a % 2 == 0 ? true : false;
console.log(res);

switch (res) {
    case true:
        console.log("switch true")
        break;
    case false:
        console.log("switch false")
        break;
}

for (let index = 0; index < 5; index++) {
    console.log(index)
}
console.log(index);

const day = 7;

let i = 0;

while (i < 4) {
    console.log(i++)
}

// let answer = confirm("Ти здав курсову???");
// if (answer == true) {
//     console.log("Молодець")
// } else {
//     console.log(":(")
// }
/*
res = showName(456);
console.log(res);

let funcExp = function () {
    return "Hello, world";
}

funcExp2 = () => {
    return "Hello, world";
}

console.log(funcExp2());

function showName(args) {
    var zz = 100;

    return "Hello " + args;
}

// console.log(zz); // error!