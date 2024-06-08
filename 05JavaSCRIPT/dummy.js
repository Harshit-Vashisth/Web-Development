function area(){
    console.log("heh")
};
let f=function k(){
    console.log("fjiodf")
}
let k =function(){

}
let x=1;
x='a';


function sum(a,b){
    console.log(arguments)
    let tot=0
    for(let value of arguments)
        tot+=value
    return tot;
}

console.log(sum(2,3))

console.log(sum(2,3,2,3))

console.log(sum(2))
// nan not a number

function sum1(...arr){
    let tot=0;
    for(let value of arr)
        tot+=value
    return tot;
}

console.log(sum1(2,2,5,3,543,23,53));


function sum3(a=3){
    return a*2;
}
console.log(sum3(10));
let person={
    fn:'love',
    ln:'bab',
    get fun(){
        return `${person.fn} ${person.ln}`
    },
    set fun(val){
        if(typeof val!==string)
            throw new Error("you snet a wrong")
        let parts=val.splits(' ');
        this.fn=parts[0];
        this.ln=parts[1];
    }
};
console.log(person.fun);

// reducing an array 
let nums=[1,2,3,4];
let tot=0;
for(let i of nums)
    tot=tot+i;
console.log(tot);

//iterables pr for off loop lagta h bss 
let totsum=nums.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(totsum); 









