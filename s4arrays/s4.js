// "use strict"
//----for loop--------------
/*for (let i =1;i<=3;i++){
  console.log(`favorite song repeat${i}`);
}
*/
// let arr=[];
// arr[0]=1;
// arr[1]="hello";
// arr[2]=null;
// arr[3]=true;
// arr[4]="piotr";
// console.log(arr[1]);
// arr[4]="shubham";
// console.log(arr);
// console.log(arr.length);


/*let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


/*
let array = [1,"hello",null,true,"piotr"];

console.log(array[1]);
array[4]="shubham";
// console.log(array);*/
// let x=[1,2,3];
// let y=x;
// x[0]=1000
// console.log(x)
// console.log(y)


//============================array refrences
// let a=[1,2,3]
// let b=[1,2,3]
// let c=b;
// console.log(a===b);
// console.log(a==b);
// console.log(a===c);
// console.log(c===b);
// console.log(c==b);


//
// let x=[1,2,3]
// x.push(4,5);
// console.log(x);

// x.pop();
// console.log(x);

// x.unshift(0);
// console.log(x);

// x.shift();
// console.log(x);

// let todoDB=[];
// function addTodo(item,priority){
//   if(priority==="high"){
//     todoDB.unshift(item);
//   } else {
//     todoDB.push(item);
//   }
// }
// addTodo('swimming','high')
// console.log(addTodo('swimming','high'))
// addTodo()
// addTodo()
// addTodo()


// var a = [10, 20, 30];
// console.log(a[1]);
//  var arr=new Array();
// // let arr = [] //this will also work
// arr[0] = 10;
// arr[1] = 'harry';
// arr[3] = true;
// console.log(arr);
// console.log(typeof (arr[2]));
// console.log(arr.length);
// // let gry=new Array(3);
// for(var g=0;g<3;g++){
//   gry[g]=prompt(`enter the value for array: `);
// }
// console.log(gry);

//=================SORTING=======================
//----------------Reverse method---------------------

// const arr=[2,1,3,4];
// const ary=["k","l","i","t","r"];
// console.log(arr.reverse());
// console.log(ary.reverse());


//sorting
/*const arr=[2,1,3,4];
const ary=["shubham","lalit","isha","tejaswini","rohit"];
console.log(arr.sort()); ///according to dictionry,lexicographically
console.log(ary.sort()); ///according to dictionry
const arr1=[1,10,1000,1001,11,101,100,111];
console.log(arr1.sort(function(a,b){
  return a - b;
}));

//  ASCII VALUE
var str=["a","s","d","Father"];//ascii value of capitals are higher check on internet

console.log(str.sort());
*/

//====searching in array======================

//using for loop, better way->INCLUDES METHOD(BOOLEAN RESULT );  Arrrays.includes(element,fromIndex)-
/*
var arr=[1,2,3,4];
console.log(arr.includes(2));//true
var str =["a","b","c"]
console.log()
*/
//=========CONVERTING STRING TO ARRAY====================

//-------------------1)split method=--------------------

// var str ='and so the adventure begins'
// var arr=str.split(` `); //space must h 
// console.log(arr);


// var str ='and so the  adventure begins'
// var arr=str.split(''); // no space 
// console.log(arr);

// var str ='and so the adventure begins'
// var arr=str.split(); //no string inside
// console.log(arr);  //['and so the adventure begins']


//  var str ='and so the adventure begins'
// var arr=str.split(' @'); // @ ye h hi ni string m  
//  console.log(arr);


//2) -----------JOIN METHOD ARRAY TO STRING-------------

//var str ='and so the adventure begins'
//var arr=str.split(' '); // @ ye h hi ni string m  
//  console.log(arr);
// console.log(arr.join());//and,so,the,adventure,begins
// console.log(arr.join(' ')) //and so the adventure begins
//console.log(arr.join('')) //andsotheadventurebegins

//// reverse a string
// var str= "abcdefghi";
// var str = "much.very.program.this.like.i";
// var arr = str.split('');
// var arr2 = arr.reverse();
// var arr3 = arr2.join('')
// var arr4=(str.split('').reverse().join(''))
//  console.log(arr3);
// console.log(arr4);

var n = 51
// var str=''
// str=n
var arr4=(n.split('').reverse().join(''))
console.log(arr4);

// var n=51
 
//     var arr=n.split('').reverse().join('');
// console.log(arr);

// let arr=[[1,2],3,4];
// arr.push([])
// console.log(arr);//[[1,2],3,4,[]]
// arr[3].push(5);
// console.log(arr);//[[1,2],3,4,[5]]

// arr.pop();
// console.log(arr);//[[1,2],3,4];


// let arr1 = [4, 5, [1, 2]]
// arr1[2].push(3);
// console.log(arr1)
// arr1[2].push([]);//adding sub-subarray in arr1 
// console.log(arr1);
// arr1.pop();//removing subb array
// console.log(arr1);


/// ================MULTI DIMENSIONNAL ARRAY============
//---------------in 2d arrays use nested for loop--------
/*
for{ //for row (whole sub array)
for{ //for columns inside subarrays
}
}*/

// for(var i=0;i<3;i++){
//   for(var j=0;j<3;j++)
//     console.log(`i,j : ${i},${j}` ) //arr${i,j}
// // }

// console.log( ` Element for this iteration is    =   ${arr[i][j]}` ); 
//   }


// function printArray(arr){
// for( let i=0; i < arr.length; i++ ) {
//   for( let j=0; j < arr[i].length; j++ ) {
//     console.log(`[${i},${j}] =  ${arr[i][j]}`); 
//   }}}
// const arr=[[0,1],[2,3],[4,5]];
// printArray(arr);

// const ar2=[[0,2],[2,3],[4,5]];
// printArray(ar2);


///======falsy value ===============

//false, null, 0, "", ‘’, undefined, and NaN.===

//=================object ===============


// var a=[1,2,3,4]
// // console.log(arr[3]);
// var sum=0;

// for(var i=0; i<4; i++)
//     {
//         if(a[i]%2==0)
//             sum=sum+(a[i]*a[i]*a[i]);
//     }
// console.log(sum)



// //=====  REVERSE a string======

//var str= "abcdefghi";
// var arr=str.split('');
// var arr2=arr.reverse();
// var arr3=arr2.join('')
// console.log(arr3);
 // or var arr=str.split('').reverse().join('')  chain the methods.
//console.log(arr)


// var result=[];
// var arr=[1,2,false,null,undefined, '',"",0,NaN,20];
// for(var i=0;i<arr.length;i++){
//   if( arr[i]!==NaN && arr[i]!==false && arr[i]!==null && arr[i]!== undefined && arr[i]!==''&&arr[i]!==""&&arr[i]!==0  ){
//     result.push(arr[i]); 
//   }  
// }
// console.log(result);
// var arr=[1,2,false,null,undefined, '',"",0,NaN,20];
// let result = [];
//   let i;
//   let n = arr.length;
//   for (i = 0; i < n; i++) {
//     if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== '' && arr[i] !== undefined && arr[i] !== NaN) {
//       result.push(arr[i]);
//     }
//   }
// console.log(result);

// var arr=[1,2,false,null,undefined, '',"",0,NaN,20];
// const result=arr.filter(callbackFn);
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// // console.log(arr.includes(3,3));
// console.log(arr.length)

// var str = ['ands', 'jdfkj', 'djfk'];
// console.log(str[2].length

// var str="he there im shubham singh";
//   function findLongestWordLength(str){
//   var arr=str.split(' ');
//   for(var i=1;i<10;i++){
//     const result=arr.filter(word=>
//       word.length>i);
//     if(result.length===1){
//       console.log(result[0].length)
//     }
//   }}
  // You only need to implement this function.
//   var str="he there im shubham singh";
// findLongestWordLength(str);

// var ar=[[1,2,55],[2,4]]
// console.log(ar[0].length);
// var firstName='yahoo';
// var middleName='haha';
// var lastName='uu';

//  console.log(`${firstName} ${middleName}${lastName}`)

// const userDetails = {
//     name: {
//       first: "Kapil",
//       last: "Raghuwanshi",
//     },
//     jobTitle: "JS Instructor @ Crio.do",
//     email: {
//       work: "kapil@epsilon.com",
//       personal: "",
//     },
//     status: {
//       isOnline: true,
//       isVerified: false,
//     }
//   // }
// 'use strict';
// let arr=[4,5,[1,2]];
// arr[3].push(3);
// console.log(arr);

// const ary=[[0,1],[2,3],[4,5]];
// for(let i=0;i<ary.length;i++){
//   for(let j=0;j<ary[i].length;j++){
//     console.log(`[${i},${j}]=${ary[i][j]}`)
//   }
// }


// var firstName='alex';
// var middleName='P';
// var lastName='John'
// const name={
//   fullname:`${firstName} ${middleName} ${lastName}`
// };
// console.log(name.fullname);
// console.log(name);
// delete name.fullname;
// // console.log(name)
// let a='a';
// let b='b';
// console.log(a+b);

// var propName='age';
// let obj={
//   firstName:'rocky',
//   lastName:'singh',
//   age:24

// }

// obj.age=20

// console.log(obj.age)
// console.log(propName)

// n ,o to n-1
// var 
// for ()

// sort()(fuction(a,b))

