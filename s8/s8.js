// //=============== GLOBAL SCOPE ===================




// let a=5;                       //accessed globally
// console.log(a);

// if(true){                      //accessed in block 
//   console.log(a);
// }


// //============== FUNCTION SCOPE =================


// function add(...args: [a: any]) {
//     var b = 6;
//     console.log(a + b);
// }

// add(6);

// console.log(b); //error b is not defined;




// ///============== BLOCK SCOPE ====================
// // very much similar to function scope





// {
//   let c = 7;
//   console.log(a);
// }

// console.log(c); // error c is not defined;






// // in BLOCK SCOPE let ,const vs  var. 
// //variables declared using 'var' can be accessed outside the block ,hence violating the rule






// {
//   let c = 7;        // declared using let
//   console.log(c);//7
// }

// console.log(c); // error c is not defined;

// {
//   var f = 7;   //declared using var
//   console.log(f);// 7
// }

// console.log(f); //7 f is defined hence violating the block concept ,




// // ------------Re-declaring variable using ‘var’ 


// var a = 10;
// var a = 20;
// console.log(a); //20

// //

// if(1){
//   var a = 10;
//   var a = 20;
// }
// console.log(a);//20

// //

// var a = 10;

// func();
// function func() {
//    var a = 20;
// }
// console.log(a);//10



// //------------Re-declaring variable using ‘const’



// const a = 10;
// a = 20;//type error,assignment to constant variable;
// const a=20//syntax error a has already defined.

// console.log(a);


// //

// if(1){
//   const a = 10;
//   const a = 20;// error
// }
// console.log(a);

// //

// const a = 10;

// func();
// function func() {
//    const a = 20;
// }
// console.log(a);  // 10


// //Re-declaring variable using ‘let’



// let a = 10;
// let a = 20; //syntx error a is alredy declared

// console.log(a);


// //

// if(1){
//   let a = 10;
//   let a = 20; //syntx error 'a' is alredy declared
// }
// console.log(a);

// //

// let a = 10;

// func();
// function func() {
//   let a = 20;
// }
// console.log(a);  // 10



///------------------ LEXICAL SCOPE ------------








////=----------------- HOISTING -----------------


// Hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.


// console.log(g); // undefined
// var g=10;


// msg(); //hera-pheri
// console.log(a)//undefined


// function msg() {
//   console.log("hera-pheri");
// }
// const a = 5;

// add();
// var add=()=>{
//   console.log(7)
// }

// let add=()=>{
//   console.log(7)
// }
// add();
// var add = () => console.log('hera pheri')


// console.log(a);
// let a=89// reference error





//------------------ CALL BACK -----------------//


// In JavaScript, a callback is a function passed into another function as an argument to be executed later.
// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has been completed.



// function parentFunction() {
//   //lexical scope of childFunction() begins
//   const message = 'hi! i\'m a message from parent';
//   function childFunction() {
//     let a = 10;
//     console.log(message + ' ' + a);
//   }

//   return childFunction;
// }

// const ans= parentFunction()
// ans();
// or
// parentFunction()();


//simple example

// var callback=()=>console.log('hi the work is done');

// var y=(callback)=>{
//   console.log('hi currently working ')
//   callback();
// }
// y(callback); // hi currently working
// //hi the work is done




//------------------ CLOUSERS ------------------------

//Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!


//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//search mdn website.


//A CLOSURE REFER TO THE LEXICAL scope a function was declared in and the variable it has access to .
// if a function is created inside another function it retains acceess to the scope of that outerfunction even after that inner function returns.

// eg.


// function parentFunction(a) {
//   //lexical scope of childFunction() start. 
//   const message = "Hi! i'm a message from parent";
//   function childFunction(x) {
//     // let a = 10;
//     console.log(message + " " + a + x);
//   }
//   return childFunction;//remember not write chilFunction();
//   //lexical scope of the childFunction() ends.
// }


// // const ans=parentFunction();//Hi! i'm a message from parent 10.
// // ans();//
// parentFunction('10')('20');//

// DOUBT

//-------eg.2

// function x() {
//   var a = 7;
//   function y() { // return function y(),neche se hta k yha lga diyya.
//   console.log("a: " + a);
//   }

//  return y;  // yha se return hata do |^
// }
// var z = x();
// console.log(z) //[fuction: y]
// z();//a: 



// function x() {
//   var a = 7;
//   function y() { // return function y(),neche se hta k yha lga diyya.
//   console.log("a: " + a);
//   }
//  a=100;//mutate a value now what will be the answer? 
//  return y;  // yha se return hata do |^
// }
// var z = x();
// console.log(z) //[fuction: y]
// z();//a: 

// arr=[12,3,4,5,6]

// function great(arr){
//   var ans=0
//   arr.forEach((ele,idx)=>{
//     if (ele==3){
//       ans=idx;}
//   })
//  return ans;
// }
// console.log(great(arr));// 1  //for each k andar return statment nhi ati .

//compare it with above ,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//return value is undefined thats y cant return anything ,save a variable then return the variable outside the foreach loop.

// function great(arr) {
//   var ans = 0
//   arr.forEach((ele, idx) => {
//     if (ele == 3) {
//       ans=1
//     }
//   })
//   return ans===1;//condition is true
// }
// console.log(great(arr));//true