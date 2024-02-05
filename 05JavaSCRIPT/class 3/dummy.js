console.log("hello guys");

console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(2.7));

// stirng are the primitive type not object
let lastname='bbar';
let last=new String("bbabr");
// this is used to create an object stirng 
console.log(typeof last);
console.log(typeof lastname);

// now lets focus on slipt a strong 
let msg='this is string';
let w=msg.split(' ');
console.log(w);


//template litreal
let ms=`helo
jarjsot
kjfdfkdifid`;
console.log(ms);

let date=new Date();
console.log(date);


//array 
let a=[2,2,2,2];
a.push(3);
console.log(a);
a.splice(2,0,'a');
console.log(a);
a.unshift(4);
console.log(a);


//searching 
console.log(a.indexOf('a'));
console.log(a.includes('a'));

//refrence