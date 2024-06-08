// // // function add(){
// // //     console.log("hemlo");
// // // }
// // // document.addEventListener('click', add);
// // // document.removeEventListener('click',add);


// // // // changing the phase of event making it to tigger at caputure phase 
// // // document.addEventListener('click', add,true);

// // let conten=document.querySelector('#wrapper');

// // conten.addEventListener('click',function(event){
// //     console.log(event);
// // });
// // let cont=document.querySelector('a');
// // cont.addEventListener('click',function(event){
// //     event.preventDefault();
// //     console.log("fun");
// // })
// // // the default action


// // let mydiv=document.createElement('div');
// // function parast(event){
// //     console.log("i have clied on para");
// // }
// // mydiv.addEventListener('click',parast);
// // for(let i =1;i<=100;i++){
// //     let newele=document.createElement('p');
// //     newele.textContent='thsi is a para '+i;
    
// //     mydiv.appendChild(newele);
// // }
// // document.body.appendChild(mydiv);

// // now we can acess it directly it is an issue 

// // now we are going to use the phases thing to acheive individuality 
// let mydiv1=document.createElement('div');
// function parast(event){
//     console.log('para'+event.target.textContent)
// }
// mydiv1.addEventListener('click',parast);
// for(let i =1;i<=100;i++){
//     let newele=document.createElement('p');
//     newele.textContent='thsi is a para '+i;
    
//     mydiv1.appendChild(newele);
// }
// document.body.appendChild(mydiv1);
// // 

// let ele=document.querySelector("#wrapper");
// ele.addEventListener('click',function(){
//     console.log("Span"+ event.target.textContent);
// })


let ele=document.querySelector("#wrapper");
ele.addEventListener('click',function(){
    if(event.target.nodeName==='SPAN'){
    console.log("Span"+ event.target.textContent);}
})


