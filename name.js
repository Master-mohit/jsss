// .........................Var case.......................❕❕❕
// function name(){
//     var a = 10;
//     if(true){
//         var a = 20;
//         console.log(a);  
//     }
//     console.log(a); 
// }
// name();

// .........................let case.......................❕❕❕
// {
//     let b = "mohit chal ja";
//     console.log(b);
// }
// console.log(b);



// console.log(a);
// let a = 10;

// console.log(a);



// .........................Swich case.......................❕❕❕
// let day = "Sunday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the week! 😅");
//         break;
//     case "Friday":
//         console.log("Weekend is near! 🎉");
//         break;
//     case "Sunday":
//         console.log("Relaxing day 😌");
//         break;
//     default:
//         console.log("A regular day! 📆");
// }


// .........................Swich case.......................❕❕❕
// let name = "mohit";
// switch(name){
//      case "mohit":
//             console.log("mohit right");
//             break;
//             case "rohit":
//             console.log("rohit right");
//             break;
//             default:
//                 console.log("no name right");

// }

// ............................Its all about functions in JS............
// .........................Functions expressions.......................❕❕❕

// let add = function(a,  b){
//   return   a + b;
// }
// console.log(add(10, 20));

// .........................Arrow functions.......................❕❕❕
// const add = (a, b) => a + b;
// console.log(add(10, 20));

// .........................Callback functions.......................❕❕❕
// function greet(name, callback){
//     console.log("heyy " + name);
//     callback();
// }
//     function chacha(){
//         console.log("I am chacha");
//     }

// greet("mohit", chacha);


// function eat(callback){
//     console.log("im eating");
//     callback();
// }
// function drink(){
//     console.log("im drinking");
// }
// eat(drink);

// .........................Higher order functions.......................❕❕❕
// function greet(){
//     return function(){
//         console.log("hello there");
//     }
// }
// greet()();

// .........................Global scope.......................❕❕❕

// let x = 10;
// function add(){
//     console.log("add krna h kya");
// }

// add();
// console.log(x);

// .........................Local scope(Function scope).......................❕❕❕
// function greet(){
//     let x = 10;
//     console.log(x);
// }
// greet();
// console.log(x)

// .........................Block scope.....................................❕❕❕
// {
// let a =10;
// const b = 10;
// console.log(a);
// }
// console.log(b);


// .........................Closure.....................................❕❕❕
// function outer(){
//     let a = 10;
//     function inner(){
//         let b = 20;
//         console.log(a + b);
//     }
//     return inner;
// }
// const totl = outer();
// totl();


// function restaurant(){
//     let order = "pizza";

//     function kichen(){
//         console.log(order);
//     }
//     return kichen;
// }
// const getorder = restaurant();
// getorder();

// .........................Promise.....................................❕❕❕
// function fetchdata(){
//    return new Promise((res, rej) => {
//         let success = true;
//         if(success){
//             res("data fetched");
//         }
//         else {
//             rej("data not fetched");
//         }
//     })
// }
// fetchdata()
//           .then((result) => console.log(result))
//           .catch((error) => console.log(error))
//           .finally(() => console.log("done"));

 

// .............................async and await..............................❕❕❕
// function orderFood(){
//     return new Promise((res)=> {
//         setTimeout(()=> {
//             res("food is ready");
//         }, 2000)
//     })
// }

// async function eat(){
//     let food = await orderFood();
//     console.log(food);
// }
// eat();


// function order(isAvailable){
//     return new Promise((res, rej)=> {
//         setTimeout(() => {
//             if(isAvailable){
//                 res("food is ready");
//             }
//             else {
//                 rej("food is not ready");
//             }
//         }, 2000)
//     })
// }
// async function eat(){
//     let food = await order(true);
//     console.log(food);
// }
// eat();

// .............................Execution context..............................❕❕❕
// function greet(){
//     console.log(" hello there mohit");
// }
// greet();

// ...........................Call stack in JS.........................
// function first(){
//     console.log("first function");
//     second();
// }
// function second(){
//     console.log("second function");
//     third();
// }
// function third(){
//     console.log("third function");
// }

// first();

// ...............................Web API.............................
// console.log("Start");
// setTimeout(() => {
//     console.log("2 sec timer");
// }, 2000);
// console.log("End");

