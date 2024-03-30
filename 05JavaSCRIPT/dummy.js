console.log("hello Ji");
var a=5;
console.log(a);
var a=6;
console.log(a);
const no=12;

let person={
    fname:'heahri',
    age:24
};
console.log(person.age);

let names=['name','rahil',true];
console.log(names[1]);

console.log(2>3?1:2);
console.log(false||'Love');
console.log(false||2||3);
//undefined, null . 0 . false. '' . NAN    these all are falsey
let exp=2;
switch(exp){
    case 1: console.log('hi'); 
    case 2: console.log('hello');
}

for(let i=0;i<5;i++){
    console.log(i);
}
const remt={
    length:1,
    breadth:2,
    draw: function(){
        console.log("ho");
    }
};

function createrect(l,b){
    return rect= {
        length:l,
        breath:b,
        draw(){
            console.log("shdi");
        }
    };
};

let reato1=createrect(2,3); 

function createe(l,b){
this.length=l;
this.breath=b;
this.draw=function(){
    console.log('draw');
}
}
let rectobj=new createe(4,5);
rectobj.color='yello';

let r1=new Function('l','b',`this.length=l;
this.breath=b;
this.draw=function(){
    console.log('draw');
}`);
let ro1=new r1(2,5);
console.log(rect);