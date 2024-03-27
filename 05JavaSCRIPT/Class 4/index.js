//fucntion 
// block of code that fullfill a specific task 

function print(){
    console.log('jeir');
}

print()
// hoisting is the process of moving all the funciton deaculartion to the top of the file and it is done by the js engine 

let f=function walk(){
    console.log("walking");
}
f();
// hositing only works for the function declartion not assignment 

// anonymus fucniton declartions 
let k=function(){

}
//dynamic 
function sum(){
    console.log(arguments);//object which store the mapping 
    let tot=0;
    for(let val of arguments)
        tot+=val;
    return tot;
};
console.log(sum(4,5));
console.log(sum(3));
// nan would be the ans as 3+undefined so NAN
console.log(sum());
console.log(sum(1,3,4,5));
// 1+3   rest 45 ignored


//  Rest Operator
// ...
//but it was spread used for concat 
// function sum1(-,-,-,-,-)

function sum2(...arr){
    console.log(arr);
}
sum2(2,3,4,2,4,2,4);
// isse ek array print hora it means ...arr likhne se arr named ka array baan jata h 
function sum(m2,...arr)
{
    // ek vlaue m2 me baki sari arr me hojaigiii ,,,, but sirf phele likhte h not baad me 
}

//DEFAULT PARAMETER
function inst(p,r=4,t=5){
    console.log(p,r,t);
}
// to kya hota a agar by chance humne value ni di toh ye assume karlega 
inst(7);


// getter and setter 

let person={
    fn:'Love',
    ln:'bab',
    get full(){
        return `${person.fn}  ${person.ln}`;
    },
    set  full(cal){
        if(typeof cal !== 'string'){
            throw new Error("you have not sent a stirng");}
        let part=cal.split(' ');
        this.fn=part[0];
        this.ln=part[1];
    }
};

person.full="rahul kumar";
console.log(person.full);

// getter -> this is readonly function      use get keyword
// setter is to set the val 



// ERROR HANDLING 
//  try & catch $
try{
    //errors 
    person.full='harshit';
}
catch(e)
{
    alert(e);
}

//Redcuing method 
// 1 is to due by loop 

// 2 reduciton fucntion 
// Reduce(callback , acc);
let arr=[1,3,34,4,4,3];
let tott=arr.reduce((acc,current)=>acc+current,0);
// callback function => accum, curr  curr is liek loop of i and acc is liek sum variable   and 0 is the initial value of accumulator 
console.log(tott);