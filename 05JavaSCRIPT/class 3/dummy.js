console.log("hello guys");


// maths objects 

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

let d=new Date(`June 20 1998 04:15`);
console.log(d);

//array 
let arr=[1,2,3,4,5,5];
arr.push(18);
console.log(arr);
arr.splice(2,0,'a');
console.log(arr);
arr.unshift(4);
console.log(arr);


console.log(arr.indexOf(18));
console.log(arr.includes(18));
console.log('harshi');






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
let cour=[
    {no:1,naam:'koef'},
    {no:3,naam:'def'}
];

console.log(cour);
console.log(cour.indexOf({no:1,naam:'koef'}));
// ??if we are working with obj we are not able to indectify 
//it is object it not a object they both are different so we wont be ablr to tell that 
// to search we would requiered a callback functions 
let fo=cour.find(function(course){
    return course.naam=='def';
});
console.log(fo,);
let f=cour.find(course=>course.naam==='koef');
console.log(f);

//removing element 
//end pop()
let n=[1,2,3,4];
console.log(n);
n.pop();
console.log(n);
n.shift();
console.log(n);
n.push(3);
n.push(4);
n.push(5);
n.splice(2,2);
console.log(n);

//empty array
n=[];
console.log(n);
//if element is store somewhere them it is removed by garbage collector
function Create(){
return rect={
    l:4,
    k:5,
    draw:function(){
        console.log("hrllo");
    }
};
}


// combining and slicing the aarray '
let first=[1,2,3];
let lastn=[4,5,6];
let comb=first.concat(lastn);
console.log(comb);
let k=comb.slice(2,4);
console.log(k);

// spread operatorr
let cons=[...first,...lastn];
console.log(cons);
let another=[...cons];
console.log(another);


// Iterating in an array ]\
for(let c of comb){
    console.log(c);
}

comb.forEach(function(no){
    console.log(no);
});

arr.forEach(no=>console.log(no));

//mapping  map each element to something else
let no=[1,2,3,4,5];
let map=no.map(function(val){
    return 'stud_no'+val;
});
console.log(map);

// mapping with objects 
