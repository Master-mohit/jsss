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