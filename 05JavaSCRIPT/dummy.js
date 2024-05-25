console.log("hello")
let rect={
    l:1,
    b:2,
    draw:function(){
        console.log('draw');
    }
};

function Rectangle(){
    let rect={
        l:1,
        b:2,
        draw (){
            console.log('Dwar');
        }
    };
    return rect;
}
console.log(rect.b)

let rect1=Rectangle();
console.log(rect1.l);


// if i also want to chagne the parametere value toooso let say create rect me input para aare h 

function hello(length,breadth){
    return rect={
        l:length,
        b:breadth,
        draw(){
            console.log(l,b);
        }
    };
}
let a=hello(5,3);
console.log(a)

//constructor fucntion prop or method of initilize karta h 
function NoOfStudent(){
    this.length=1;
    this.breadth=2;
    this.draw=function(){
        console.log('fj');
    }
}

//object creation
//object using constructor
let rectobj=new NoOfStudent();
//new give a empty constructor

rectobj.color='yekki';
delete rectobj.color;
console.log(rectobj);

