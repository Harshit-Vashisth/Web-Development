// TOPIC 1 math OBJECT  inbuit 
// MDN 
Math.random()
Math.PI
Math.round(1.2)//1
Math.round(5.6)//6
Math.max(211,34,5,6,6);

Math.min(211,34,5,6,6);


/// STRINGS (primitive)
let lastName='Babbar';
console.log(lastName);

// OBJECT STRING 
let lastname=new String("babbar");
console.log(lastname);


// convert primitive to obejct  just type dot its the behaviour of js 

lastName.toUpperCase();
lastName.includes("ba");
// startwith endwith trim replace etc we have many more function like this 

let msg='this is my first msg';
let words=msg.split(' ');
console.log(words);

// // template literal
// suppose i wan tto print like this 
// hello, 
// my name is harshit
// i am a full stack web dev

let ms='hello \n my name is \' harshit \n i am a full stack dev';
console.log(ms);
// \' isse we can use single code to skip esc seq 

let lastame="harshi";
// now i am going to use 
// Template literal 
let message=`this is ${lastame},
my first msg 
tata`;
console.log(message);
// now it would work fine  `` these are template literal 


// object literal {}
// string literal ''
// template literal ``


// DATE LITERAL
let date = new Date();
let date2 = new Date('June 20 1998 07:15');
let date3 = new Date(1998 ,5, 20, 7); // indexing of month start form 0 
console.log(date);
console.log(date2);
console.log(date3);


date3.setFullYear(2002);
console.log(date3);



//->> ARRRAYS
// it is also a type of object 
// collections of item 
// bucket whihc can store dif dif type of data 

// creations of array 
let numbers=[1,2,3,4,6];
console.log(numbers);

numbers.push(9);
numbers.unshift(8);
numbers.splice(2,0,'a',4); // index deletecount  number 
console.log(numbers);
console.log(numbers.indexOf(9));

if(numbers.indexOf(7)!=-1)
    console.log("number is present in the list");
    console.log(numbers.includes(7));
    console.log(numbers.includes(9));

    console.log(numbers.indexOf(4,2));

let course=[
    {no:1,name:'Love'},
    {no:2 , name:'babbar'}
];
// this is an array of object 

console.log(course);

console.log(course.indexOf({no:1,name:'love'}));
// ans is giving -1 whyyy
// it is because it is not primitive they both are let diff 
// in dono ka ref alg alg place pr h 
