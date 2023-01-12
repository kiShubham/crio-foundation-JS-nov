'use strict';
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
//   }

// userDetails.name.first='rocky'
// userDetails.name.last='montana' //modified
// userDetails.status.isProMember=false //added
// console.log(userDetails);

//=========DESTRUCTURING=====================
// const obj={name : "buddha" , age : 20}
// // var name=obj.name;
// // var age=obj.age;

// const {name , age, gender } = obj //Destructuring  syntax
// console.log(name);
// console.log(age);
// console.log(gender);//undefined ,not in obj

// const {name:fullName , age:yaAge, gender:xyz } = obj 
// obj.name='raj';
// console.log(obj.name);//raj
// console.log(fullName);//buddha
// console.log(yaAge);//20
// console.log(xyz);//undefined
//we can take any variable name of our choice;

// let arr=[1,2,3,4,5]
// //0 : 1
// //1 : 2
// //2 : 3
// //3 : 4
// //4 : 5
// //length=5
// const obj ={name:'shubham'};
// console.log(typeof(arr));
// console.log(typeof(obj));
// 

//checking array or not , ISARRAY====================

// console.log(Array.isArray(obj));//FALSE
// console.log(Array.isArray(arr)); //TRUE

// const ary=[1,2,3,4,5];
// // const [a,b]=ary;// array m key name fix h ,batane ki jarurat nhi h 
// const[_a,_b,c]=ary
// // console.log(a);
// // console.log(b);
// console.log(c);

// car ={color;}
// const vehicle=[
//   {color:'black' ,type:'sedan'  ,capacity:4 },
//   {color:'blue' ,type:'noroof'  ,capacity:2 },
//   {color:'green' ,type:'spaceship' ,capacity:10 }

// ]
// let b;
// console.log(0/b)

// var student = [
//   { name: "Kevin", std_id: 10, marks: 25 },
//   { name: "Austin", std_id: 20, marks: 30 },
//   { name: "Robin", std_id: 30, marks: 20 }
// ]




// let ourStorage={
//   "cabinet":{
//     "top drawer":{
//       "folder1":"a file",
//       "folder2":"secrets"

//     },
//   }
// };
// console.log(ourStorage.cabinet["top drawer"]);
// ourStorage.cabinet["top drawer"].folder1='no file';
// ourStorage.cabinet["top drawer"].folder2='no secrets';
// console.log(ourStorage.cabinet["top drawer"]);

'use strict';
// const arr=[1,2,3,4,5]

// const [a]=arr;
// const [,b]=arr;
// const [,,c]=arr;
// const [,,,d]=arr;
// const [,,,,e]=arr;
// console.log(a);//1
// console.log(b);//2
// console.log(c);//3
// console.log(d);//4
// console.log(e);//5
// console.log(0/0);


// const ary = [
//   { color: 'red', type: 'Station Wagon', capacity: 5 },
//   { color: 'green', type: 'Convertible', capacity: 2 },
//   { color: 'white', type: 'time machine', capacity: 4 }
// ];
// ary[0].color = 'teal';
// console.log(ary[0].color);
// console.log(ary);

// console.log(0 / 0);
// console.log(typeof (infinity))

// function maxCapacityType(arr) {
//   var long = 0;
//   var naam = '';
//   for (var i = 0; i < arr.length-1; i++) {
//       if (arr[i].capacity > long) {
//       long = arr[i].capacity;
//       naam = arr[i].type;
//     };

//   }
//   return naam;
// }
//console.log(maxCapacityType(ary))//for finding which type of vehicle has maximum capacity.

// console.log(vehicle[2].type);
// const[a]=
// console.log(a);




// var r=maxCapacityType(arr)  ;
// console.log(r);
// console.log(arr.length);
// // arr.sort();
// // console.log(arr);
// var [a,b,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(c.capacity);


// var checkEvenNumber = (a, b) => {
//   if (a % 2 == 0 && b % 2 == 0) {
//     console.log(true)
//   }
//   else {
//     console.log(false)
//   }
// }
// checkEvenNumber(4, 6)
// checkEvenNumber(4, 7)

// var a=10;
// var b=a;
// console.log(b)
// b=b+10;

