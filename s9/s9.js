'use strict';
// --------------- FOR EACH LOOP ----------------


// const arr = [1, 2, 3, 4, 5]

// arr.forEach(function (element,idx,array){ //function ka naam likhne ki jarurat nhi h , likhenge tou bhi farak nhi padega.
//   console.log(element)
//     console.log(idx);
// })

//// whenever you are going to work with methods which are applicable on an array and they are expecting a callback function, we are always make use of"ARROW FUNCTION SYNTAX".

// ARROW FUNCTION SYNTAX

// arr.forEach((abc)=>console.log(abc));
// //single line h ,no{}

// arr.forEach((abc,idx,array)=>{
//   if(idx===2){
//   console.log(abc)  //3
//   }
// });

//------------------ FIND() ------------------------



// const data = [
//   { _id: "1", name: "Vivek" },
//   { _id: "2", name: "Neha" },
//   { _id: "3", name: "Satya" },
//   { _id: "4", name: "Amit" },
// ];
// const res = data.find((element) => element._id === "1");
// console.log(res)

// const x=arr.find((ele)=>ele===5);
// console.log(true);

//----------------- SORT() OF NUMBERS--------------------


// arr = [10, 21, 100, 2100, 1000, 55];

// arr.sort();
// console.log(arr)//[10,100,1000,21,2100,55] arranging numbers according to lexicographically.

// using call back function to arive at proper answer.
// could be called as COMPARATOR FUNCTION.


// arr.sort(function(a,b){
//   if(a<b)
//     return -1;
//   else if(a>b)
//     return 1;
//   else 
//   return 0;
// })
// console.log(arr)//[10,21,55,100,1000,2100]


// arr.sort(function(a,b){
//   if(a<b)
//     return -1;})//any negative no. or a-b thats also negative 
// console.log(arr);//[10,21,55,100,1000,2100]



// arr.sort(function(a, b) {
//     return a - b;})
// console.log(arr) //[10,21,55,100,1000,2100]

// // decreasing order----------

// arr.sort(function(a, b) {
//     return b-a;})
// console.log(arr) //[ 2100, 1000, 100, 55, 21, 10 ]

// using arrow function =>



// arr.sort((a,b)=>a-b)

// You only need to implement this function.

// console.log(arr)  //[10,21,55,100,1000,2100]

// arr.sort((a,b)=>b-a)
// console.log(arr) //[ 2100, 1000, 100, 55, 21, 10 ]

// function sortNumerically(arr) {
//   arr.sort((a,b) => a-b);
//   console.log(arr);
// }
// sortNumerically(arr);


//--------------- Sort an array of objects -----------------


//Print the names of the people in ascending order of their age.


// const arr = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];

// // console.log(arr[0].name);//accessing in arrays of objects.
// arr.sort((a,b)=>a.age-b.age);
// console.log(arr);


// ================ map() METHOD==========================


//doubling every value of array in simpler way

// let arr=[10,30,50];

// const arrDoubled=arr.map((ele)=>ele*2);
// console.log(arrDoubled);


// with for each loop---------------


// const arrDoubledByForEach=[];
// arr.forEach((ele)=>arrDoubledByForEach.push(ele*2));
// console.log(arrDoubledByForEach);//[ 20, 60, 100 ]
// console.log(arr); //[ 10, 30, 50 ]

// area of each circle in new array arr ,givn radius as element of array r

// console.log(Math.PI);
// var r=[1,2,3]
// var arr=r.map((ele)=>(ele*ele*(Math.PI)));
// console.log(arr);//[ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]

// console.log(r)//[1,2,3]




//-=================== FILTER() METHOD =======================




// filter()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let arr=[10,15,30,50];
// let filteredArray=arr.filter((ele)=>ele%3===0);
// console.log(filteredArray);//[15,30]


// //
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(ele => ele.length > 6);

// console.log(result);//[ 'exuberant', 'destruction','present' ]



//
//Searching in array--------------->>>>>>>>>>>>>>>>>


// Following example uses filter() to filter array content based on search criteria.

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']


////================= REDUCE() METHOD =====================



//some important rules -
/*
accumulator->
The value resulting from the previous call to callbackFn. On first call, initialValue if specified, "otherwise the value of array[0]".

currentValue=element
The value of the current element. On first call, the value of array[0] if an initialValue was specified,"otherwise the value of array[1]".

currentIndex=index
The index position of currentValue in the array. On first call, 0 if initialValue was specified, "otherwise 1".

array
The array reduce() was called upon.

initialValue Optional
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, accumulator is initialized to the first value in the array, and currentValue is initialized to the second value in the array.
*/






//reduce()
//reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)



// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,initialValue);

// console.log(sumWithInitial);
// expected output: 10


///--------------------



// let arr=[10,20,30];
// const sum=arr.reduce((accumlator,element,index,array)=>accumlator+=element,0);
// console.log(sum);//60,0 is the initial value (by default) of accumulator. 



//-------------------------



// const sum=arr.reduce((accumlator,element,index,array)=>{accumlator+=element
//    console.log(accumlator)                                                    }); 
// console.log(sum);// what is the mistake?=initial value not give hence arr[0]taken as initail value ,and intial elemnt taken arr[1] index started from 1 not from 0.





////===================== SPLICE() METHOD =============================




//// splice() -> check mdn.
// syntax=splice(start, deleteCount, item1, item2, itemN)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.splice(5);//inplace method();
// console.log(arr);//[ 1,2,3,4,5 ]

// let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let ary = arr1.splice(5);
// console.log(ary);//accessing array of deleted elements-[ 6,7,8,9,10 ]



//--------------



// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0);// 0, 'Feb'
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


//////


// //// Remove 0 (zero) elements before index 2, and insert "drum"

// const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// const removed = myFish.splice(2, 0, 'drum');
// console.log(myFish)// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// console.log(removed)//[]// removed is [], no elements removed


////

// Remove 1 element at index 3

// const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// const removed = myFish.splice(3 , 1,'hello','ji');

// console.log(myFish);// myFish is ["angel", "clown", "drum", "sturgeon"]
// console.log(removed);// removed is ["mandarin"]


//q.


let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
// output =["Banana", "Orange", "Kiwi"]

// function remove(fruits, startIndex, deleteCount) {
//  fruits.splice(startIndex,deleteCount)
//   console.log(fruits);
//   // You only need to implement this function.
// }
// const g = remove();
// g();//errooor

 fruits.splice(2,2)
  console.log(fruits);//[ 'Banana', 'Orange', 'Kiwi' ]





