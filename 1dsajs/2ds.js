"use strict"
/*

function incrementNumber(N, A) {

  let index = N - 1;//nya array isme nhi bna rhe 
  console.log(index);
  while (index >= 0 && A[index] == 9) {
    //initially index=2;a[index]
    A[index] = 0;
    index--;
  }
  if (index < 0) {
    A.unshift(1);
  }
  else if (index >= 0) {
    console.log(index);
    // A[N-1] = 1 +  A[N-1];
    A[index]++
  }

  return A;
}
console.log(incrementNumber(4, 1111));

*/

const { join } = require("path");

// function incrementNumber(n, A) {
//   let arr = []
//   let carry = 1;
//   for (var i = n - 1; i >= 0; i--) {
//     //traverse in reverse order.
//     let d = carry + A[i];
//     // (d%10) unit place = sum = jo neche likha jayega.
//     // (d/10) tens place = carry;
//     let sum = (d % 10);
//     carry = Math.floor(d / 10);
//     arr.push(sum);
//   } // 999

//   if (carry > 0) {
//     arr.push(carry);
//   }
//   arr.reverse();
//   return arr;
// }

// console.log(incrementNumber(3, 111));

/*
function incrementNumber(N, A) {

  let carry = 1;
  let ans = [];
  for (let i = N - 1; i >= 0; i--) {
    let d = A[i];
    let sum = d + carry;
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  // for the edge case.999+1 ,one extra block in array.
  if (carry > 0) {
    ans.push(carry);
  }
  ans.reverse();
  return ans;
}
console.log(incrementNumber(3, 111));
*/


//===============================
// var maxProfit = function(prices) {
//   let profit = 0;
//   let n = prices.length;

//   for (var i = 0; i < n; i++) {

//     for (var j = i + 1; j < n; i++) {

//      
//       
//       // let diff = prices[j] - prices[i];
//       // if ( diff > profit) {
//       //   profit = (prices[j] - prices[i])
//       // }

//     }
//     // if( ( prices[i]-prices[i-1] ) > profit )
//     //     profit = prices  

//   }
//   return profit;

// };


// var maxProfit = function(prices) {
//   let profit=0;
//   let bp=prices[0];
//   for( var i=1; i < prices.length; i++){
//     let cost=prices[i]-bp;
//     profit=Math.max(profit,cost);
//     bp=Math.min(bp,prices[i]);
//   }
//   return profit;    
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//=========================================
//
//=============

/*
function setMatrixZeroes(matrix) {
  // let count = 0;
  let m = matrix.length;
  let n = matrix[1].length;
  let row = new Array(m);
  let col = new Array(n);

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 0;
        col[j] = 0;
      }
    }
  }

  for (var i = 0; i < m; i++) {
    
      for (var j = 0; j < n; j++) {
        if (row[i] == 0) matrix[i][j] = 0;
        if(col[j] == 0) matrix[i][j] = 0;
      }
  }  
  return matrix;
}
*/
// var arr1 = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ]
// console.log(setMatrixZeroes(arr1));

// //===============
// function setMatrixZeroes(matrix) {

//   var col0 = 1;
//   let row = matrix.length;
//   let col = matrix[1].length;

//   for(var i=0; i<row; i++){
//     if(matrix[i][0]==0) col0=0;
//     for(var j=1; j<col; j++){
//       if(matrix[i][j]==0){ 
//         matrix[i][0]=0;
//         matrix[0][j]=0;}
//     }
//   }

//   for(var i = row -1; i>=0; i--){
//     for(var j = col -1; j>=1; j--){
//       if(matrix[i][0]==0 || matrix[0][j]==0) {
//         matrix[i][j]=0;}
//       if(col0==0) matrix[i][0]=0;
//     }
//   }
//   return matrix;
// }
// console.log(setMatrixZeroes(arr1));
//===========================================================

//rotate an 2d array;
/*
var rotate = function(matrix) {
  let m = matrix.length;
  let n = matrix[1].length;
  let newMatrix = new Array(m);
  
  for (var i = 0; i < m; i++) {
    newMatrix[i] = new Array(n);
    for (var j = 0; j < n; j++) {
      newMatrix[i][j] = matrix[i][j];
    }
    newMatrix[i].reverse();
  }
  return newMatrix;
}*/

//===============transpose
//
// var rotate = function(matrix) {
//   let n= matrix.length;
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       matrix[j][i] = matrix[i][j]; 
//     }
//   }
//   return matrix;
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// console.log(rotate(arr));

//===============
// var transpose = function(matrix) {
//     let m=matrix.length;
//     let n=matrix[0].length;
//     let arr=[];
//     for(var i=0;i < n ; i++){
//         arr[i]=new Array(m)
//     }
//     for(var i=0;i<m;i++){
//         for(var j=0;j<n;j++){
//             arr[j][i]=matrix[i][j]
//         }
//     }
//     return arr;
// };

// =correct way to transpose.===========

// function rotateImage(matrix){

//  let n = matrix.length;
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//      var temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
//   for(var i = 0; i < n; i++){
//     for(var j = 0; j < n/2; j++){
//       var temp=matrix[i][j];
//       matrix[i][j]=matrix[i][n-1-j];
//       matrix[i][n-1-j]=temp;
//     }
//   } 
//   return matrix;

// }
//   let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// console.log(rotateImage(arr));

//==================================

//first missing positive number.
//hash set
// const arr=[2,3,4,5,6,7,8,9];
// let n=arr.length;
// const set1= new Set();
// for(var i=0;i<n;i++){
//   set1.add(arr[i]);
// }
// console.log(set1);
// for(var i=1;i<n+1;i++){
//   if(!set1.has(arr[i])){
//     console.log(i);
//   }  
// }

//===========================================

// let g = {
//   first: 'shubham'
//   , last: 'singh'
//   , age: 18,
//   address: 'hari charan'
// }
// for (var key in g) {
//   console.log(key + ':' + g[key]);
// }
//=====================================

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let count_s = {};
//   // let count_t = {};

//   for (let k in s) {
//     if (!count_s[s[k]]) {
//       count_s[s[k]] = 1;
//     } else {
//       count_s[s[k]]++;
//     }
//     // console.log(s[k])
//   }
//   for (let k in t) {
//     if (!count_s[t[k]]) {
//       return false;    
//     }
//     count_s[t[k]]--;
//   }
//  return true;
// }

// let s = 'acr';
// let t = 'car';
// console.log(isAnagram(s, t));

// function isAnagram(s, t) {
//   if (s.length!== t.length) {
//     return false;
//   }
//   let counter = {};
//   for(let letter of s){
//     counter[letter] =(counter[letter] || 0) + 1;
//   }
//   for(let items of t){
//     if(!counter[items]){
//       return false;
//     }
//     counter[items] -= 1 ;
//   }
//   return true;
// }
// console.log(isAnagram('acr', 'car'));
//=================


// console.log(points.length);
// console.log(points[0][1]);

// var maxPoints = function(points) {
//   var count = 0;
//   for (var i = 0; i < points.length; i++) {
//     for (var j = 1; j < points[0].length; j++) {
//       if (points[i][j - 1] == points[i][j]) {
//         count++;
//       }
//     }
//   }
//   return count;

// };

// var points = [[1, 2], [3, 3], [1,1]]

// console.log(maxPoints(points));

//=================================

// var twoSum = function(nums, target) {
//     let n= nums.length;
//     let l=0;r=n-1
//     while(l <= r){
//         let sum = nums[l]+ nums[r];
//         if(target==sum) return [l,r];
//         else if(target > sum) l++;
//         else if(target < sum) r--;
//     }
// };
// console.log(twoSum([3,2,4],6));

//======================================
/*
var twoSum = function(nums, target) {
    
  let n= nums.length; 
  let l=0;r=n-1;
  var arr=new Array(n)
  for(var i=0; i<n; i++){
    arr[i]=nums[i];
  }
    //sort the array first in increasing order;
    nums.sort(function(a,b){ return a-b});
  
    while(l <= r){
        let sum = nums[l]+ nums[r];
        if(target==sum) {
          break;
        }
        else if(target > sum) l++;
        else if(target < sum) r--;
    }             
  var x=0;y=0;
  for(var i=0;i< arr.length;i++){
        if(arr[i]==nums[l]) 
          x=i ;
          break;
  }
  for(var j=0;j<arr.length;j++){
        if(arr[j]==nums[r] && j != x){ 
          y=j ;
          break;
        }
  }
    return [x,y];
};

console.log(twoSum([3,2,4],6));
*/

//=============================================================

// 3sum
/*
var threeSum = function(nums) {
  let n = nums.length;
  let arr = [];
  var target = 0;
  nums.sort(function(a, b) { return a - b });

  // console.log(nums);
  var x = null; y = null, z = null;
  let l = 0;
  while (l < nums.length) {
    let m = l + 1; r = n - 1;
    while (m  <  r) {
      var sum = nums[l] + nums[m] + nums[r];
      
      if ( sum == target ){
        
        x = nums[l]; y = nums[m]; z = nums[r];
        arr.push([nums[l], nums[m], nums[r]])
        break;
      }
      else if (sum < target) m++;
      else if (sum > target) r--;
    }

    // var temp = nums[l+1];
    // if(nums[l]!=temp) l++;
    // else l += 2;
    l++;
  };

  return arr;

};
// console.log(threeSum([-1,0,1,2,-1,-4])); 
console.log(threeSum([0, 0, 0, 0]));
// sorted array [-4,-1,-1,0,1,2]
*/
//====================
/*
var countOdds = function(low, high) {
    var count = 0;
    while(low <= high){
        if(low%2 !== 0){
            count++;
        }
        low++;
    }
  return count;
    
};
console.log(countOdds(3,7*/

// var x=null;
// var y=10;
// console.log(y>x);
/*
var nums=[1,5,4,8,2,7];
var n= nums.length;
var x=nums[0];
var x_i=null;
 for(var i=0; i<n; i++){
        if( x <= nums[i] ) {
            x = nums[i];
            x_i = i;
        }
    }
 for(var i=0; i<n; i++){
        if( x <= nums[i] ) {
            x = nums[i];
            x_i = i;
        }
    }
 for(var i=0; i<n; i++){
        if( x <= nums[i] ) {
            x = nums[i];
            x_i = i;
        }
    }
 
console.log(x);
console.log(x_i);
*/

//======================================
/*
function getNumberOfDays(date) {
  
     let date1 = new Date('August 28, 2023 00:00:00');
     const gDate =date.split('/');
    let x = gDate[1]+'/'+gDate[0]+'/'+gDate[2]
  
  let date2 = new Date(x);
  
  console.log(Math.abs((date1-date2)/86400000));
  
  
}var date ='28/08/2023';
getNumberOfDays(date);

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);

*/
//===================

/*
const arr = [1, 2, 4, 5];
arr.forEach((element, idx) =>{
  arr[idx] = ((idx + 1) * element)
})
console.log(arr);
*/// 
// var arr1 = ["one","two","three"];

// arr1.forEach(function(part){
//   part = "four";
//   return "four";
// })
// console.log(arr1);

//
/*
const originalArr = ["Iron", "Super", "Ant", "Aqua"];
originalArr.forEach((name, index) =>
  originalArr[index] = `${name}man`);

console.log(originalArr);*/

// var arr=[1,2,4,5];
// for(var i=0;i<arr.length;i++){
//   arr[i]=i+arr[i];
// }
// console.log(arr);
// var array=[1,2,3,4,5,6];
//  for( var i = 0; i*i <= array.length; i++){

//     if( array[i] == 0 || array[i] == 1 ){ 
//       array[i] = array[i] * 2; //non prime
//     }
//     else if( array[i] % i == 0 ){ 
//       array[i] = array[i] * 2; //non prime;
//     }
//     else{  
//       array[i] = array + 1 ;//for prime
//     }

//   }
// console.log(array);
/*
var array=[1,2,3,4,5];
// [2, 3, 4, 8, 6]
var l=array.length;

for( var i = 0; i < l; i++){
  
    if( array[i] < 2) array[i] = array[i] * 2; //non prime
      
    else if(array[i] >= 2){
      
      var temp = array[i];
      for(var j=2; j < array[i]; j++){  
        if( array[i] % (i) == 0 ) 
          array[i] = array[i] * 2;//non prime;
          break;
      } 
      if(array[i] = temp){
          array[i] = array[i] + 1
        console.log('hi'+array[i]);
      }//for prime
    }   
    
  }
console.log(array);
*/

// var arr=[1,2,3,4,5];
// for(var i=0;i<arr.length;i++){
//   var n=arr[i];
//   if (n === 1)
//       array[i] = array[i] * 2;
//     else iffor(var i=2;i<n;i++){
//       if(n%i==0){
//        array[i] = array[i] * 2;
//         }
//       }
//       array[i] = array[i] + 1;
// }
var arr = [1, 2]
arr.apend(3);
console.log(arr);