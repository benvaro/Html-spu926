let number = 23.565676;

console.log(Math.floor(number)); // відкидає дробову частину - заокруглює до найменшого цілого  (ігнорують закони математики)
console.log(Math.ceil(number)); // заокруглює до найближчого більшого числа (ігнорують закони математики)
console.log(Math.round(number)); // заокруглення за правилами математики
console.log(number.toFixed(2));
console.log(23..toFixed(2));

let str = 'hello';
let str2 = "js";
let str3 = ` is today is ${str2}`;

str = `hello 
today 
is 
saturday`


str = str2 + str3;
console.log(str);
console.log(str.length)
console.log(str.concat("a", "b", "c"));

//str[0] = 'o'; // error
console.log(str[0]);
console.log("hello".toUpperCase())
console.log("HELLO".toLowerCase())

let res = str.split('');
console.log(res);

let words = ["aa", "bb", "zz"];
let sentence = words.join(' ');
console.log(sentence)

//res = Array.from(str).find(x => x == 'i');
//console.log(res);

console.log(str.indexOf("is"));
console.log(str.lastIndexOf("is"));
console.log(str);
res = str.substring(-5);
res = str.slice(-1); // end не включається в діапазон
console.log(res);
// substring i slice - вирізають підрядок - але substring не працює з від'ємними параметрами
console.log(str.search('today'))
if (str.includes("too")) {
    console.log("is exists");
} else {
    console.log("not found")
}

//str.charAt(0) == str[0]

let arr = [];
let other = new Array();
other = new Array(12, 23, 45);

arr = [12, 2, "hello", {
    name: 'Alex',
    id: 1
}, 56, 9];
arr[0] = {
    id: 100
};
console.log(arr.length);
arr[100] = 1000;
arr.length = 30;

arr.push([1, 2, 3]); // add to the end
arr.unshift(1000); // add to the start

arr.pop();
arr.shift();
arr.splice(1, 1);
arr.splice(0, 3, "new element", 90, 'ksjkldfjksd', 2234);
arr.splice(0, 0, "new inserted value");
console.log(arr);

let copy = other;
copy[0] = "copy";
console.log(other);

// copy = arr.slice(2, 3);
// console.log(copy);

console.log(arr.find(x => x % 2 == 0))
res = arr.filter(x => x % 2 == 0)
console.log(res);

arr.forEach(x => console.log(x));
res = arr.map(x => {
    return "changed " + x;
});

console.log(res);

let person = ['Olia', 'Popova'];

let [name, surname] = person;
// name == person[0]
// surname == person[1]
console.log(name)
console.log(surname);

arr = [1, 2, 3];
other = [4, 5, 6];

// let [model, brand] = {}

res = [...arr, ...other]; // spread operator
console.log(res);

// 100 1 2 3 <-- 100 length