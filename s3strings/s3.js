//strings
// let favPlaceToLearn="Crio Do"
// console.log(favPlaceToLearn);
// console.log(favPlaceToLearn.length); //7
// console.log("shubh.am".length); //8 .counts everything in ""
/*let h="how\"re"
console.log(h);
*/
// var A,B;

// console.log("A"-"B"+"2");
// console.log("A"-"B"+2);
// console.log(-"1"+"2"+ +"hello");


//================STRING IMMUTABILITY=================

// const str = "string";
// str[0] = "a";
// console.log(str);//string

// const str = "string";
// str = "system";
// console.log(str);//type error

// let str = "string";
// str = "system";
// console.log(str);//system


//THEREFORE a single character of a string cannot be updated yet full string can be changed. 
// ======================================================

///===========TEMPLATE STRINGS==============
/*let str = `CRIO.DO id the 
best place to learn`;
let str2 = "crio.do is the \n best place to learn";
console.log(str);
console.log(str2);

let a = 5;
let value1 = "the value of a is :" + a;
let value2 = `the value of a is :${a}`;
console.log(value1);
console.log(value2);

let vale3=`the sum of 2 numbers :${2+5}`;
console.log(vale3);
*/
///===========================================

//===========https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith===========//
// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // expected output: true
// console.log(str1.length);

// console.log(str1.endsWith('best',17));
// // expected output: true//18 is the length and 17 is total index value.

// const str2 = 'Is this a question?';
// console.log(str2.length);
// console.log(str2.endsWith('question?',18));
// // expected output: false

// /////=========================================


// /// protype.indexOf(), lastIndexOf();
// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked,was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);


// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// // expected output: "The index of the first "dog" from the beginning is 40"

// console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 2))}`);
// // expected output: "The index of the 2nd "dog" is 52"


// var str = 'sea sells seashells by the sea-shore';
// console.log( str.indexOf("sea") );
// console.log(str.lastIndexOf("sea"));
// console.log(str.indexOf("time"));

// //===========================================

// console.log(1+ +"2"+"2"); //32
// console.log(1- -'2'+'2'); //32
// console.log('A'+'B'+2)  //AB2
// console.log('A'-'B'+'2')    //NaN2
// console.log('A'-'B'+2)    //NaN
// console.log(2+ +'Hello')  //NaN
// console.log('A' + 'B')    //AB
// console.log('A' - 'B')    //NaN

// //=========================================================

///===========SUBSTRINGS==========================
// var str="lddjflkdj"//k=2=>d,therfore (str.length-(2)=7
// if (str.charAt(0)==="l"){
//   console.log(str.charAt(2));

// };

// function kthCharFromEnd(str, k){
//   let ln = str.length;
//   let ch=ln-k
//   return ch;


/////=======================Repeat a String using ES6 repeat() method==================================loop can also used======

function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  
  //Step 2. Else if times is negative, return an empty string if true
  else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
var sum = "";
var str = "";
var k = '';
function repeatString(str, k) {
  for (var i = 1; i <= k; i++) {
    sum = str + sum
  }
  console.log(sum)
}

repeatString('!', 5);


