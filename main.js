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
// to check whether a array

console.log(Array.isArray('hello'));
console.log(Array.isArray(veg));
console.log(veg.indexOf('tomato'));
// objects
const person = {
    firstName: 'Cordelia',
    lastName: 'princess',
    age:26,
    hobbies:['music','games'],
    address:{
        kingdom: 'Avonli',
        palace: 'mahal'
    }

}
console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.firstName, person.lastName);
console.log(person.address.palace);

// to use objesct values as variables
//destructuring
const {firstName, lastName, address:{kingdom}} = person;
console.log(firstName);// instead of person.firstName
console.log(kingdom);// instead of person.address.kingdom
//to add properties
person.study = 'arts';
console.log(person);


// array of objects
const todos = [
    {
        id:1,
        task:"takeout trash",
        isCompleted:true
    },
    {
        id:2,
        task:"clean dishes",
        isCompleted:true
    },
    {
        id:3,
        task:"doctor appointment",
        isCompleted:false
    }
    
] ;
console.log(todos);
console.log(todos[2].task);

//  convert object to json to send to server
const todoJSON = JSON.stringify(todos);//object can take '' for string but for JSON everything strings should be in "" both keys and values
console.log(todoJSON);

//loops
//for loop
for(let i=0; i< 10; i++){
    console.log(i);
    console.log(`for loop number: ${i}`);
}
for(let i=0; i<=10; i++){
    console.log(i);
    console.log(`for loop number ${i}`);
}

//while
let j=0;
while(j<10){
    console.log(`while loop number ${j}`);
    j++;
}



