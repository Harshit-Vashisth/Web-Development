let lastname='babbar';
let lstn=new String("love");

let arr=[1,3,3,3,4]
console.log(arr[1])


arr.push(6);
console.log(arr)
arr.unshift(6);
console.log(arr)
arr.splice(2,0,'a','b');
console.log(arr)

// finding a number if present or not 
console.log(arr.indexOf(4));
console.log(arr.indexOf(9));

//we want to check if no exist in array or not 
if(arr.indexOf(10)!=-1)
    console.log("present");

console.log(arr.includes(5));

console.log(arr.indexOf(4,2))
// so here the searching will start from 3

console.log('red')

let course=[
    {no:1,naam:'love'},
    {no:2,naam:'Rahul'},
    {no:3,naam:'Harshit'}
];
// we made array of object 
console.log(course);

console.log(course.indexOf({no:1,naam:'love'}))
// the ans comign is -1 but by becz it is an object not a array here the ref thing is different

let courses = course.find(course=>course.naam=='love');
console.log(courses)


let arr1=[2,4,5,6,3,6,3,6,7];
arr1.pop();
arr1.shift();
arr1.splice(3,1);
console.log(arr1);

let arr2=arr1;
// here the address would be copied 
// emptying an array 
arr1=[10,20,30,40,50]

// but the values would be store somewhere so garbage collector will remove those value 

for(let val of arr1){
    console.log(val)
}

// for each
arr.forEach(function(no){
    console.log(no);
});

arr1.forEach(function(no){
    console.log(no);
});


arr1.forEach(no=>console.log(no));
// arrow function 

// joining arrays
numbers=[1,3,2]

numbers.sort();
console.log(numbers)


numbers.reverse();
console.log(numbers)

let a=[
    {id:1,name:'love'},
    {id:2,name:'arman'}
];

// to sort this we have to make a predicate fucntion 
// hw ?



// Filter()
// arr1.filter() 
// this cant work we need a callback function 

let fit=arr1.filter(val=> val>20);
console.log(fit)

let num=[4,5,6,32,10]
let mp=num.map(no=>'student-no'+no);
console.log(mp)

// mapping with object 
// mapping with the objects ?
let num1= [1,2,3,4];
let fit1=num1.filter(val=>val>=0);
let items=fit.map(val=>{value:val});
console.log(items)

// chanign 

let item1=num1.filter(val=>val>=0).map(val=>{value:val});
console.log(item1)



