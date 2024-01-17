
// 1. no arrgument and no return
//2. with arrgument and no return
//3 with arrgument and with return  (99% use)

// 1. no arrgument and no return
// function Add() {
//     var a = 5
//     var b = 10
//     var c = a + b
//     console.log("Sum = " + c)
    
// }

//  Add()
 


// // 1. 2. with arrgument and no return
function Add(n=[]) {
    
    console.log(n[0]+n[1])
    
}
var n=[5,6,5]
 Add(n)
//  Add(18, 7)
//  Add(6, 10)


// 1.  with arrgument and with return
// function Add(a, b) {
//     var c = a + b
//     return c
    
// }
// var x=5
// var y=10


// console.log(Add(x, y))

// //Normal Method 
// function oddEven(){
//     var n=6
//     let msg
//     var r= n%2
//     if(r==0){
//       msg  ="EVEN"
//     }
//     else{
//         msg = "ODD"
//     }
//     console.log(msg);
// }

// oddEven()


// //variable of funciton 
// var oddEven = function (){
//     var n=6
//     let msg
//     var r= n%2
//     if(r==0){
//       msg  ="EVEN"
//     }
//     else{
//         msg = "ODD"
//     }
//     console.log(msg);
// }

// oddEven()

//arrow function (important) 
// var oddEven =  ()=>{
//     var n=6
//     let msg
//     var r= n%2
//     if(r==0){
//       msg  ="EVEN"
//     }
//     else{
//         msg = "ODD"
//     }
//     console.log(msg);
// }

// oddEven()