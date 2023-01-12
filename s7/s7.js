// MATH FUNCTIONS

// console.log(Math.trunc(0.5 * 0.5))//0

// console.log(Math.round(10/3))//3 

// console.log(Math.floor(30 / 16));//1
// console.log(Math.ceil(30 / 16));//2
// console.log(Math.PI)
// console.log(Math.E)


// /===============function declaration=======
// 1.FUNCTION DECLARATION


// function Same(a, b) {
//   console.log(a + b);
// }
// Same(5, 6);



// 2.-----------------------FUNCTION EXPRESSION



// let call = function() {
//   console.log("hello")
// }
// call();



// 3.----------------------ARROW FUNCTION



// let kall = () => {
//   console.log("arrow")
// }
// kall();

// let fall = f => console.log('arroa')

// fall();




//2parameters


// let sall = (c, d) => {
//   console.log("arrow")
// }
// sall();




//single parameter


// let lall = z => {
//   console.log("arrow")
// }
// lall();

// var gall= a => a * 10;//without reurn and block;
// gall(4);;//40

// var checkEvenNumber=(a,b)=>{
//   if(a%2==0&&b%2==0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// checkEvenNumber(4,6)

// let arrowFn=(a,b)=>{
//  console.log('sum'+(a+b));
// }
// arrowFn(3,5);




//=-------------Pass by VALUE---------------


// all the primitive data type are passed by value.

//  In Pass by value, function is called by directly passing the value of the variable as an argument. So any changes made inside the function does not affect the original value.

// In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value .

// function add(num){
//   num =num +10;
//   console.log(num);
// }
// var num=5
// add(num);//15
// console.log(num);//5


//varible is primitve -pass by value, non mutable.
// const obj = "Jhon";

// function changeName(obj){
//     obj = "Doe";

// }
// console.log("Object before function call");
// console.log(obj);//Jhon
// changeName(obj);
// console.log("Object after function call");
// console.log(obj);//Jhon





//----------------PASS BY REFERENCE------------


// ALL THE NON PRIMITIVE DATA TYPE ARE PASSED BY REFERENCE -arrays,object,functions.


// Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.

// In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. 

//since object is non primitive -pass by refernce

// const obj = {
//      name:  "Jhon"
// }
// function changeName(obj){
//     obj.name = "Doe";

// }
// console.log("Object before function call");
// console.log(obj.name);//Jhon
// changeName(obj);
// console.log("Object after function call");
// console.log(obj.name);//Doe



// const obj = {
//      name:  "Jhon"
// }

// var copy_obj =  obj;
// console.log(obj.name);    // Lame

// copy_obj.name = "Khaby"//changed
// console.log(copy_obj.name);  //Khaby

// console.log(obj.name);  // Khaby




//// =----------------SPREAD SYNTAX----------------


//Spread syntax can be used when all elements from an object or array need to be included in a new array or object.

//If any changes are made in the new object or array  those will not reflect in the original object or array.




// const obj = {
//   name: "Lame"
// }

// var copy_obj = { ...obj };//-------using spread syntax

// console.log(obj.name);    // Lame

// copy_obj.name = "Khaby"

// console.log(copy_obj.name);  // khaby

// console.log(obj.name);    //Lame


//Q======================



// function swap(a,b){
//   var temp =a;
//   a=b;
//   b=temp;
// }
// var a=10;// primitive data type pass by value concept.
// var b=20;
// swap(a,b);
// console.log(a+ " "+ b);//10 20 cuz this is pass by value



// // Q----===================



// const obj2 ={ //object is a non primitive data 
//   id: 9
// };
// const temp=obj;
// temp.id=25;
// console.log(obj.id);//25
