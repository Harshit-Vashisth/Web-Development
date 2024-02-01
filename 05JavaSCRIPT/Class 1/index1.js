// console.log("hearshi");
// const rect={
//         length:5,
//         breath:3,
//         draw: function(){
//             console.log('draw');
//         }
// }; 

//thsi is not excatly fucntion ,, if we are creating a fucntion under object it is kno-wing as method 


//to create multiple rectangle in the code as object ......
//function to create object 
function createRect(len,bre){
    return rect={ 
        l:len,
        b:bre,
        draw: function(){
            console.log("draw");
        }
    };
}
let rectobj1=createRect(3,5);

//constructor fucniton -> prop or methods or initialsie karta h ye we dont need to return here 
//pascal notation is there .. frist letter of every word is capital 
function Rect(){
    // right now reffer to empty 
    this.length=2;
    this.breadth=3;
    this.draw=function(){
        console.log("hello"); 
    }
    //this is the current object 
}

//object creation using rectangle 
let rectangleobj=new Rect();
 rectangleobj.color='yellow';

 delete rectangleobj.color;
 