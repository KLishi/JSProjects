// single line comments
/* multi 
line
comments */
// console stmts
console.log("Hello world!!");
console.error("error!!");
console.warn("warning!!");
// data types
let age;
age=30;
console.log(age);
const name = "named";
const ag = 30;
const isCool = true;
const rating = 9.99;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof ag);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// strings
// old style
console.log('my name is ' +name + " and I am " + age);
// new style
console.log(`my name is ${name} and I am ${30}`);
const hello = `my name is ${name} and I am ${30}`;
console.log(hello);
const s = "hello world";
const t = "hello world!";
// properties(don't have ())
console.log(s.length);
console.log(t.length);
// methods have ()
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,7));//stops before 7
console.log(s.substring(0,7).toUpperCase());
// change strings to arrays
console.log(s.split(''));
console.log(s.split());
const stack = "technology, css, Html";
console.log(stack.split(', '));
// arrays
const fruits = new Array("apple",10,true);
console.log(fruits);
const veg = ["tomato",22,false];
console.log(veg);
// we can change or perform on const, only thing we can't do is to assign it to other values
// to add to array
fruits[3] = "mangoes";
console.log(fruits);
fruits.push("guavas");//to add at end
console.log(fruits);
//returning length and adding at front
console.log(fruits.unshift("pineapples"));

console.log(fruits);
fruits.pop();
console.log(fruits);

