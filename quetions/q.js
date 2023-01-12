//1.


// arr1 = ["Raghu", "Goli", "Farhat", "Mridula", "Rahul"]
// arr2 = ["Mridula", "Raghu", "Goli", "Farhat"]

// function findSeatNumber(arr1, arr2) {
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] === 'Mridula') {
//       for (var j = 0; j < arr2.length; j++) {
//         if (arr1[i - 1] === arr2[j]) {
//           return (j);
//         }
//       }
//     }
//   }
//   return (-1);
// }
// console.log(findSeatNumber(arr1, arr2));

// //2.


// arr = [[1, 1, 1, 1],
// [2, 2, "h", 2],
// [3, 56, 55, 'jki'],
// [4, 4, 4, 4]
// ]
// console.log(arr[2][3])


//3.

// function createMatrixII(size){
//   var arr=[];
//   for(var i=0;i<size;i++){
//     temp=[];         // 4
//     for(var j=0;j<size*size;j++){//0,1
//       if(j<size){
//           temp[j]=j;
//         }
//         else if(j>=size){//2,3
//         temp1=0;
//             for(var h=0;h<size;h++){
//                 temp1[h]=j;
//             }
//             temp.push(temp1)
//         }
//     arr.push(temp);
//   }
// return arr; 
// // You only need to implement this function.
// }

// console.log(createMatrixII(2));


//Q4


// var str = 'aamar'
// // console.log(str.split('').reverse().join(''))
// ss1 = ''
// ss1 = str.split('').reverse().join('');
// console.log(ss1);

// let ob = {
//   1: "One",
//   2: "Two",
//   3: "Three"
// };

// console.log(ob[3]);

// var x = 2;
// var y = "2";
// console.log(x == y);//true
// console.log(x === y);//false

// console.log(10 > 9);
// console.log(typeof (typeof (10)));
// console.log(typeof (10));
// console.log(typeof ('10'));

// var number = 10;
// number = 'hello';
// if (5 != 7) {
//   console.log(number);
// }
// else { console.log(4) }

// var num;
// console.log(num);
// console.log(Math.PI);
// console.log(Math.floor(4 / 9));
// console.log(Math.ceil(4 / 9));
// console.log(Math.sqrt(25));

// console.log(Math.abs(-100));
// const arr = [1, 2, 5];
// console.log(Math.max(...arr,2))

// // const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(max);

// let fall = f => console.log ('arroa')

// fall();

// function add(num){
//   num =num +10;
//   console.log(num);
// }
// var num=5
// add(num);//15
// console.log(num);//5



// 


// const readBooks=(book1,book2)=>console.log(`I read '${book1}'published in '${book2}'`);
// readBooks('Rework','2010');


//

// function greeting(day) {
//   function fn(){
//     console.log("Today is: "+day);
//   }

//   return fn;
//   // You only need to implement this function.
// }
// greeting('Sunday')();


// var arr = ['abc', 'pqr', 'banana'];
// function sort(arr) {
//  console.log(arr.sort());
//   // You only need to implement this function.
// }
// sort(arr);



// //q.

// function multiplyThree(arr) {
//   var result=[];
//   arr.forEach((abc)=>{
//     result.push(abc*3)
//   })

//   console.log(result);
//   // You only need to implement this function.
// }
// arr=[1,2,3];
// multiplyThree(arr);


//q.

// function getFullName(obj) {
//   var arr=[]
//   for(var i=0;i<obj.length;i++){
//     arr.push(`${obj[i].firstname} ${obj[i].lastname}`);
//   }
//   console.log(arr);
//   // You only need to implement this function.
// }
// const obj    =      [

//       {firstname : "Robert", lastname: "Obrain"},

//       {firstname : "Kevin", lastname: "Hart"},

//       {firstname : "Dane", lastname: "Cobby"}

//       ];

// getFullName(obj)


//q. 


// var arr=[1,2,3,4,5]

// //remove 2,3
// var ary=[];
// for(var i=0;i<arr.length;i++){
//   if(arr[i]!=2 && arr[i]!=3){
//     ary.push(arr[i])
//   }
// }
// console.log(ary);

//---------------------q.


// var  names=["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"]
// var start=2
// var end=4
// // ["Kiran", "Shashwat"]

// function getName(names, start, end) {
//   var arr=[]
//   names.forEach((ele,idx)=>{
//     if(idx>start-1 && idx<end){
//      arr.push(ele) 
//     }
//   })
// console.log(arr);
//   // You only need to implement this function.
// }
// getName(names,2,4)



//--------------------q.

//                                 2         3           4
// let names=["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"]
// 2,2

// Sample Output
// ["Kiran", "Shashwat"]

// function remove(names, startIndex, deleteCount) {
//   var arr=[];
//   var k=startIndex+deleteCount;
//   names.forEach((ele,idx)=>{
//     if(idx>startIndex-1 && idx<k){
//       arr.push(ele)
//     }
//   })
//   console.log(arr);
//   // You only need to implement this function.
// }

// remove(names,2,2);


// similar q

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
// , 2, 2
// output=["Banana", "Orange", "Kiwi"];


// function remove(fruits, startIndex, deleteCount) {

//   var arr=[];
//   var k=startIndex+deleteCount;
//   fruits.forEach((ele,idx)=>{
//     if(idx>startIndex-1 && idx<k){}
//     else {
//       arr.push(ele);
//     }
//   })
//   console.log(arr);
//   // You only need to implement this function.
// }

// remove(fruits,2,2);


//q.

// const arr = [10, 30, 50];

// function multiplyByTwo(arr) {
//     const newArr = [];

//     for(let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i] * 2;
//     }
//     console.log(newArr);// 'console.log likha h '
// }

// const arrDoubled = multiplyByTwo(arr);//[ 20, 60, 100 ]
// console.log(arrDoubled); undefined

// // or
// const arrDoubled = multiplyByTwo;
// arrDoubled(arr);

// const arr = [10, 30, 50];

// function multiplyByTwo(arr) {
//     const newArr = [];

//     for(let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i] * 2;
//     }
//     return newArr;  // 'return likha h'
// }

// const arrDoubled = multiplyByTwo(arr); // value stored ,return ki vajah se
// console.log(arrDoubled); // [ 20, 60, 100 ]


function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
console.log(addSix(10));