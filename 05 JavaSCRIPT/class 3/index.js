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

// SEARCHING WITH OBJECT 
// for this we are going to use callbakc functions 
// a callback fucntion is a ducnion passed into another fucntion as an argument which is then invoked undeer outer function to perform some kindof actions 

let courses = course.find(function(course){
    return course.name=='Love';
});
// here we are finding a course whose name is love 
console.log(courses);

// USING ARROW FUCNTION TO MAKE IT MORE READABLE 
// REMOVE FUNCTION PUT ARROW IF INPUT PARAMETER IS SINGLE REMOVE BRACKETS 
// IF SINGLE LINE OF CODE REMORE CURLEY BRACE AND RETURN 
let cour = course.find(course=> course.name=='Love');
console.log(cour);

// if no input then blank bracket 


// Removing elements 
// END 
// pop() 

// BEGIN
// shift()

// MIDDLE REMOVE 
// splice(3,1);
let num=[1,2,2,3,4,5];
num.pop();
console.log(num);
num.shift();
console.log(num);

num.splice(2,1);
console.log(num);


// EMPTYING AN ARRAY 
num=[]
// this would work and will be removed by garbage collector 
// there is a problem in this 
let a=[1,2,3,45];
let a2=a;
a=[];
console.log(a);
console.log(a2);
// here a2 will be still storing all the vlaues kyuki ref / address copy hota h yaha pr 

// another way is splice   
let n1=[3,2,3,4,5];
let n2=n1;
n1.splice(0,n1.length);
console.log(n1);
console.log(n2);
// this will work too 


// another way is making length 0 
n2.length=0;
// this will also remove that

// another way is loop and pop 


// COMBINING AND SLICING ARRAY 
let first=[1,2,4,4,5,7];
let second=[4,5,6,4,32];
// combine 
let comb=first.concat(second);
console.log(comb);

// slicing
let slic=comb.slice(3,5);//end index se ek phelee tk elemenet leta h 
console.log(slic);


// Spread Operations 
let f=[1,2,3];
let f1=[1,2,3];
let f2=[...f1,'b',...f];      //this is also used to combine the arrays 
console.log(f2);


//copy 
let another =[...f2];

// Iterating in an array 
let arr=[10,20,30,40,50];
// looop in literal FOR OF 
for(let i of arr){
    console.log(i);
}
console.log(' ');
// FOR EACH LOOP
arr.forEach(function(number){
    console.log(number);
})


console.log(' ');
// converting it to arrow 
arr.forEach(number=>console.log(number));


// JOINIG ARRAY 
let no=[1,2,3];
// 123 i want this as output 
let join=no.join(',');
console.log(join);

// SPLITING 
let m="This is my msg";
let part=m.split(' ');
console.log(part);
// split method creates an array 
// rejoin them 
let joined=part.join('_');
console.log(joined);


// SORTING
let array=[122,42,-52,512,1];
let fg=array.sort();
console.log(fg);
console.log(array.reverse());

// descresing in array is hw
// sometime it is possible that the sort funciton reflect the error which can be resolve using predicate functions 

// Filtering in arrays 
// just like amazon filters 
let filt=array.filter(function(val){
    return val<=0;
});
console.log(filt);

// convert to arrow 
let fil=array.filter(val=> val<=0);
console.log(fil);
