console.log("hey how are u ");
let a={
    length:2,
    b:3 ,
    // making functions/
        draw : function(){
        console.log('drawing in the summer');
        }
        // if we created any funciton inside a body wwe call it as method 
};
// here we are doign object oriented programing 



// function for repeatative object creations
// we have two ways to create 
// factory ->function were object get created 
// constructor

//factory 
function createRectangle(length,breath){
    let a={
        length:length,
        b:breath,
        // making functions/
            draw : function(){
            console.log('drawing in the summer');
            }
    };
    return a;
}

// now object wil  be created like this 
let rectob1=createRectangle();


// Consturctor funciton  -> pascal notation 
// pasacl me first letter fo every word is capatical 
function Rectange(){
    this.length=1;
    this.breath=2;
    // this always refer to the current object if not if reffer to an empty object 
    this.draw=function(){
        console.log('hello jiii');
    }
}
// iss wale me we dont return 
// object creation using constructor 
let rect=new Rectange();
// new is keyword in js give us empty object 



// dynamic Nature of object 
// object create kara h amne toh m usme se property add or remove kar skta hu meri marzi h puri 
rect.color='Yello'; 
// toh ye color easily add hojaiga   
delete rect.color;
// now it would get deleted 

let Rectangle1= new Function('len','bre',`
    this.length=len;
    this.breath-bre;
    this.draw=function(){
        console.log('drawing');
    }`
    );
    let rect2=new Rectangle1(8,3);
    console.log(rect2);

// Constructor poroperty 
// object ki proberty consta property hoti h 
 

// functions are ojects
// if i say    
Rectangle1.call;

// type in js 
// primitives or value type 
// ->>>> Number,string,boolean ,undefined,NULL
// Rrefrence type of object 
// ->>> funciton , object , array   all are object

// // diff between primitve adn ref
// let a=5
// let b=a
// so both have same 

// if a++
// so a will be 11
// and b will be 10

let at=10;
let b=at;
at++;
console.log(at);//11
console.log(b);//10

// refernce 
let ab={value:10};
let ba=ab;
ab.value++;
console.log(ab.value);//11
console.log(ba.value);//11
// here this is 11 cause ye dono same value of reffer kare h aalg se store ni kare h 
// vlaue wali location ka address pass hota h instead of value


// note : primitive are copied by their value 
// refrences are copied by their address/ ref

// for in loops
let rect3={length:2,breadth:4};
// for in loop
for(let key in rect3){
    // key are reflected through key variable values are ref thorugh rect key 
    console.log(key,rect3[key]);
}

// for of loop can only be used in iterable -> array  , maps   
// can't be used in object but there is a way 
for(let key of Object.entries(rect3)){
    console.log(key);// it is not an iterable 
}


// to find if property exist in a class ie object
if('color' in rect3)
    console.log('present')
else 
console.log('no');


// OBJECT CLONING
// object cloing mean smae to same copy maaro 
let ass={val:10};
let bss=ass;
// this is not cloning it is ref 

// -> iterations
let src={val:10};
let des={};
for (let key in src){
    des[key]=src[key];
}
// now src and dec are clone 

// ->assign 
let dest=Object.assign({},src);
// this is also a way to clone 
// u can also copy 2 function together into one jsut bt seprating them with a , 



// -> spread 
let dest1={...src};
// this the thrid way to clone 




// Garbage COLLECTION 
// kuch lang liek c and c++ where we allocate dynamic memory by ourself and by have to deallocated by ourself 
// Assign 
// freee 

// Garbage collection is a tool which find  those carible those object which are currently not in used and  it deallocated memory of those auctomatically 
// we have no control over garbage collector 
// run in the bg 



