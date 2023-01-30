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

// var nums = [3, 2, 1]
// let n = nums.length;//3
// let sum = 0;
// let max = 0;

// for (var i = 0; i < n - 2; i++) {
//   for (var j = i + 1; j < n - 1; j++) {
//     for (var k = j + 1; k < n; k++) {
//       if (nums[i] > nums[j] > nums[k]) {
//         console.log(`${nums[i]} ${nums[j]} ${nums[k]} `)
//         sum = nums[i] + nums[j] + nums[k];
//         max = Math.max(max, sum);
//       }
//     }
//   }
// }
// console.log(max);

// var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// let n = arr.length;
// console.log(n);//9
// var vol = 0;
// var x = 0; let y = 0;
// for (var i = 0; i < n - 1; i++) {
//   for (var j = i + 1; j < n; j++) {
//     var currVol = Math.abs((Math.min(arr[i], arr[j])) * (j - i))
//     vol = Math.max(vol, currVol);
//     if (vol < currVol) {
//       vol = currVol;
//       x = i;
//       y = j;
//     }

//   }
// }
// console.log(vol);
// console.log('[i] = ' + x + '[j] = ' + y);
// var arr
// console.log(maxArea(arr))


//========================
// var arr = [1, 4, 2, 5]
// let n = arr.length;
// let prefixSum = new Array(n);
// let suffixSum = new Array(n);
// prefixSum[0] = arr[0];
// suffixSum[n - 1] = arr[n - 1]

// for (let i = 1; i < n; i++) {
//   prefixSum[i] = prefixSum[i - 1] + arr[i];
// }

// for (var i = n - 2; i >= 0; i--) {
//   suffixSum[i] = suffixSum[i + 1] + arr[i];
// }
// for (var i = 0; i < n - 1; i++) {
//   if (prefixSum[i - 1] === suffixSum[i + 1]);
//   // console.log(`suffixsum[${i + 1}] == prefixSum[${i - 1}]`)
//   // console.log("s:" + suffixSum[i + 1])
//   // console.log("p:" + prefixSum[i - 1])
//   // console.log(arr[i])
//   console.log(i);
// }

// console.log(suffixSum[3])
// console.log(prefixSum[1])
// console.log(prefixSum)
// console.log(suffixSum)

//============================
// function subarraySumZero(n, arr) {
//   if (arr[0] == 0) return "Yes";

//   for (var i = 0; i < n; i++) {
//     var sum = arr[i];
//     console.log(sum);
//     for (let j = i + 1; i < n; j++) {
//       // console.log(arr[i],arr[j]);
//       sum = sum + arr[j];
//       // console.log(sum);
//       if (sum == 0) {
//         return "Yes"
//       }
//     }
//   }

//   return "No"
// }
// var arr = [4, 2, -2, 5];
// // console.log(subarraySumZero(4, arr));

// for (var i = 0; i < arr.length; i++) {
//   let sum = arr[i];
//   console.log(sum)
//   for (var j = i + 1; j < arr.length; j++) {
//     sum = sum + arr[j];
//     if(sum === 0){
//       console.log("yes")
//     }
//   }
// }



//===================================================
// HASHING SET AND MAP


// SET
/*

const myArray = [1,2,10,3,3,4,5,5,5,4,7];
const mySet =new Set(myArray);
console.log(mySet);
const uniqueArray = [...mySet]; //set to array 
console.log(uniqueArray);
console.log(mySet.has(3));
mySet.add(8);
console.log(mySet);
mySet.delete(8);
console.log(mySet);
console.log(mySet.has(7));
mySet.clear();
console.log(mySet);

*/

//  ---------------------------Hash MAP;-------------------------------not a map() function
/*
const map1 = new Map();

map1.set('a', 1);
map1.set('a', 2);
map1.set('c', 3);
if(map1.has("a")) console.log(map1.get("a"));
/*
console.log(map1);
// Expected output: 1
const map2 = new Map([["name", "John"], ['surName', 'abraham']])
// console.log(map2);
map2.set('balmukund', 'shubham');
map2.set('kishan', "shubham");
map2.set('shubhank', "kiyaki");
console.log(map2);
console.log(map2.size);
map2.delete('shubhank');
console.log(map2);
console.log(map2.has("kishan"));
console.log(map2.size);
map2.clear();
console.log(map2);

// */
// ============================================================


/*
var arr=[1,2,-2,3,-3,4,5];
var prefix = new Array(arr.length);
// var prefix = new Array(n);
prefix[0]=arr[0];
  for( var i = 1; i < arr.length; i++ ){
    prefix[i] = prefix[i-1] + arr[i];
  }
console.log(prefix);
for(var i=0;i<arr.lenght;i++){
  sum =sum+arr[i];
}
*/
/*
function maxLen(arr) {
  // Creates an empty hashMap hM
  let hM = new Map();

  let sum = 0; // Initialize sum of elements
  let max_len = 0; // Initialize result

  // Traverse through the given array
  for (let i = 0; i < arr.length; i++) {

    // Add current element to sum
    sum += arr[i];

    if (arr[i] == 0 && max_len == 0)
      max_len = 1;

    if (sum == 0)
      max_len = i + 1;

    // Look this sum in hash table
    let prev_i = hM.get(sum);

    // If this sum is seen before, then update max_len
    // if required
    if (prev_i != null)
      max_len = Math.max(max_len, i - prev_i);

    else // Else put this sum in hash table
      hM.set(sum, i);
  }
  

  return hM;
  // return max_len;
}         [ 15  13                     ]
let arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(maxLen(arr));

*/
//==================================================================
// 
// let arr = [
//   {
//     "name": "ShUbham",
//     "age": 25
//   },
//   {
//     "name": "Harshal",
//     "age": 23
//   }
// ]

// let n=arr.length
// for(var i=0;i<n;i++){
//           var temp = arr[i].name
//           arr[i].name = temp.toLowerCase();
// }
// console.log(arr);


// function filterByCity(arr) {
//      var n=arr.length;
//      for(var i=0;i<n;i++){
//           var temp = arr[i].city
//           arr[i].city = temp.toLowerCase();
//      }
//      var ans = [] ;
//      const filtered = arr.filter(function(array){
//           for(var i=0;i<n;i++){
//                if(arr[i].city == "hyderabad" || arr[i].city == "bangalore" ){
//                     ans.push(arr[i])
//                }
//           }
// 
//      })

// }

// var arr = [ "hello" , "world" , "your" ];
// function findLength(arr) {
//     arr = arr.map((i) => arr[i] = arr[i].length)
//     return arr;
// }
// console.log(findLength(arr))
//==================================prime
/*
let modify =(array)=>{
  for(let i = 0; i < array.length; i++){
    let n = array[i];

    if(n == 0 || n == 1 ){ 
      array[i] = n * 2; //non prime
    }else{
        let ok = 0;
        for(let j=2; j < n; j++){
            if(n % j == 0){
                ok = 1;
                break;
            }
        }    
        if(ok === 1){
            array[i] = n * 2;
        }else{
            array[i] += 1;
        }
    }
  }
  return array;
}
*/
//=======================================================
/*
  for (let i = 0; i < n; i++) {
    if (ans.length > 0 && meetings[i][0] <= ans[ans.length - 1][1]){
      ans[ans.length - 1][1] = Math.max(meetings[i][1], ans[ans.length - 1][1]);
    }
    else {
      ans.push(meetings[i]);
  }
*/
/*
function meetingRooms(meetings) {
  let n = meetings.length;

  meetings.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  })
  // console.log(meetings);

  let ans = [];
  ans.push(meetings[0])
  for (let i = 1; i < n; i++) {  
   if ( ans[ans.length - 1][1] > meetings[i][0] ) {
      ans.push(meetings[i]);
    
    } 
    else if (ans[ans.length - 1][1] <= meetings[i][0]){
       ans[ans.length - 1][1] = (meetings[i][1]);
    }   
  }
  return { "array": ans, "rooms" : ans.length };
}
*/
// let arr = [[5,10],[0,20],[10,15]]
// let arr = [[1,2],[3,5],[6,12],[7,10],[11,15]];
// let arr = [ [0,10],[5,15],[12,19] ]

// let arr =[[7,10],[2,4]]
// console.log(arr)

// console.log(meetingRooms(arr))

// let arr =[2,1,4,5,3,8,7]
// arr.sort((a, b) => {
//    if (a < b) return 1;
//    else if (a > b) return -1;
//    else return 0;
//  })

// arr.sort((a, b) => {
//    if (a[0] < b[0]) return -1;
//    else if (a[0] > b[0]) return 1;
//    else return 0;
//  })
// console.log(arr)


/*

function meetingRooms(meetings){
  let n = meetings.length;
  
  meetings.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  })
  // console.log(meetings)
  let si = new Array(n);
  let ei = new Array(n);
  for(var i=0;i<n;i++){
    si[i] = meetings[i][0];
  }
  for(var i=0;i<n;i++){
    ei[i] = meetings[i][1];
  }
  // console.log(si);
  // console.log(ei);
  
  let max = 0;
  let count = 0;
  let s = 0;
  let e = 0;
  while (s < meetings.length) {
    if(si[s] < ei[e]){
      s += 1;
      count += 1;
    }
    else{
      e += 1;
      count -=1;
    }
    max = Math.max(max,count);
  }
  console.log(max)
}

meetingRooms(arr);
*/
// /*
// const map1 = new Map();
// map1.set('bar', 'foo');
// map1.set(2, 0);

// map1.set(6, 2);
// map1.set(2, 3);
// map1.set(2 , 4);
// map1.set(8, 5);
// console.log(map1);
// console.log(map1.get(2));
// map1.delete(2);
// console.log(map1);
// map1.set(5, 2);
// if (map1.get(5) == 2) {
//   map1[5]--;
//   console.log(map1.get(5))
// }console.log(map1);

// const map1 = new Map() ; 
// map1.set(5, 2);
// if (map1.get(5) == 2) {
// map1.set(5, map1.get(5)-1);
// console.log(map1.get(5))
// }console.log(map1);

// You can try this.
// sir im using in loop like for iteration ;

// map . set(array[ i ],map1.get( array[ i ] - 1);to decrease
// map . set(array[ i ],map1.get( array[ i ] + 1), to increase frequency

// console.log(r)
// console.log(map1);
// */
// console.log(map1.get('bar'));

/*
const highestFreq = (array) => {
  let myMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (myMap[array[i]]){
      myMap[array[i]]++
    console.log(myMap[array[i]])
    }
    else myMap[array[i]] = 1;
  }
  return myMap;
}

const myArray = [101, 104, 108, 108, 111, 119, 119, 119];
// let map1 = new Map();

// console.log(map1[[101,5]])

const myMap = highestFreq(myArray);
console.log(myMap);
// */

//============================================================
//------------------------ largest subarray with sum zero---------
/*
var arr = [2, 3, 1, -4, 0, 6]
function zero(arr) {
 let n = arr.length;
 let prefix = new Array(n);
 prefix[0] = arr[0];
 var maxlen = 0;
 let map1 = new Map();
 let r = 0;

 for (var i = 1; i < n; i++) {
   prefix[i] = prefix[i - 1] + arr[i]
 }
 // console.log(prefix);// [ 2, 5, 6, 2, 2, 8 ]

 for (var i = 0; i < n; i++) {
   if (prefix[i] == 0) maxlen = i + 1;
   if (map1.has(prefix[i])) //boolean
   {
     let x = map1.get(prefix[i])
     let y = i
     var len = y - x
     // maxlen = Math.max(len, maxlen)
     if (len > maxlen) {
       maxlen = len
       r = i;
     }
   }
   else {
     map1.set(prefix[i], i)
   }

 }
 let l = r - maxlen + 1;

 var ans = [];

 for (var i = l; i <= r; i++) {
   ans.push(arr[i]);
 }
 return {
   "array": ans,
   length: maxlen
 };

}
console.log(zero(arr));
*/

//=--------------SORTING---------------------------------------------

// let arr = [2, 6, 4, 8, 1, 0];
// let n = arr.length;
//------bubble sort--------
/*
for (var i = 0; i < n; i++) {
  for (var j = 0; j < n - i -1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
*/

//------------selection sort------------------
/*
for(var i=0;i<n-1;i++ ){
  var minIdx = i;
  for(var j = i; j<n ;j++){
    if( arr[j] < arr[minIdx] )
      minIdx = j;
  }
  var temp = arr [i];
  arr[i] = arr[minIdx];
  arr[minIdx] = temp;
}
console.log(arr);
*/

//---------------------------------
// console.log(3 % 2);
// Math.ceil

/*
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
// b,s,v

cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
console.log(cars);

var meetings = [ 1, 2, 3, 4 ];
  meetings.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
console.log(meetings);
// 
 var full = new Array(3);
  for(var i=0;i<3;i++){
    full[i][0] = id[i] ;
    full[i][1] = names[i] ;
    full[i][2] = marks[i] ;
  }
  console.log(full);
*/
// var arr =[2000000000000,2];
// arr.sort(function(a, b){return a - b});
// console.log(arr[1]-arr[0]);

// var s="10";
// console.log((s*1)+1);//just multiplu by 1

// let numbers = [ "3" ,"30" ,"1" ,"124" ,"54644" ]
// let n = numbers.length;
// for(var i = 0;i<n;i++){
//   numbers[i] = numbers[i]*1
// }
// numbers.sort((a,b)=>{
//         return a - b 
//     })
// for(var i = 0;i<n;i++){
//   numbers[i] = numbers[i].toString();
// }

// console.log(numbers);

// function numSort(n, numbers) {
//     numbers.sort((a,b)=>{
//         if(a.length != b.length) return a.length-b.length;
//         else return a.localeCompare(b)
//     })
//     return numbers
// }
// console.log(parseInt(2.5)); gives same as floor value

/*
function binarySearch(arr, l, r, x) {

  while (l <= r) {
    let mid = Math.floor(l + r) / 2;

    if (x > arr[mid]) {
      l = mid + 1
    }
    else if (x < arr[mid]) {
      r = mid - 1
    }
    else if (x == arr[mid]) return mid;
  }
  return -1;

}

function findpivot(arr, n) {

  let l = 0; let r = n - 1;
  // if ( l == r) return l; 
  while (l <= r) {

    let mid = Math.floor(l + r) / 2;

    if (arr[mid - 1] > arr[mid]) console.log(mid)
    else if (arr[mid] >= arr[l]) l = mid + 1
    else if (arr[mid] < arr[l]) r = mid - 1

  }
  return -1;
}

function search(nums, target) {

  let n = nums.length
  // let ans = 0;
  let pi = findpivot(nums, n);
  console.log(`pi:` + pi)

  // If we didn't find a pivot,
  // then array is not rotated at all
  if (pi == -1) { //or if(nums[0]<nums[n-1])
    return binarySearch(nums, 0, n - 1, target)
  }
  else {
    if (target >= nums[0])
      // l = 0 ; r = pi-1
      return binarySearch(nums, 0, pi - 1, target)

    else if (target < nums[0])
      // l = pi ; r = n-1
      return binarySearch(nums, pi, n - 1, target)

  }
}

// let arr =[1, 2, 3, 4, 7]
let arr = [4, 5, 6, 7, 0, 1, 2]

console.log(search(arr, 2))
*/
//=============================================================================
/*
function findpivot(arr, n) {

  let l = 0; let r = n - 1;

  // if ( l == r) return l; 
  while (l <= r) {


    let mid = Math.floor((l + r) / 2);

    console.log(`${l}+${r}=` + mid)

    if (arr[mid] > arr[mid+1]) {
      return mid+1;
    }
    else if (arr[mid] >= arr[l]) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }

  }
  return -1;
}
let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findpivot(arr, 7));
*/
//---------------=========================-------------------------------

// let s = "ababach"; let n = s.length;
// let l = 0; let r = 0;
// const map = new Map();
// return map.get("a")
//map . set(array[ i ],map1.get( array[ i ] + 1)
// while (r < n) {

//   if (map.has(s[r]))
//     map.set(s[r], map.get(s[r]) + 1)
//   else map.set(s[r], 1)
//   r++
// }
// console.log(map);

// function lengthOfLongestSubstringKDistinct(s, k) {
//   let n = s.length;
//   let l = 0; let r = 0;
//   const map1 = new Map();
//   // return map.get("a")
//   //map . set(array[ i ],map1.get( array[ i ] + 1)
//   while (r < n) {
//     if (map1.has(s[r])) {
//       map1.set(s[r], map1.get(s[r]) + 1)
//     } else { map1.set(s[r], 1) }
//     r++;
//   }

//   return map1.size;
// }
// let g = "eceba"
// console.log(lengthOfLongestSubstringKDistinct(g, 2))


// let map = new Map();
// // console.log(map.has(5))

// map.clear;

// let set = new Set();
// set.add(5);
// console.log(set);
// set.delete(5);
// console.log(set);


//===============================================
/*
var subarraysWithKDistinct = function(nums, k) {
   
    let n = nums.length ;
  let l = 0;let r = 0 ;
  const map =  new Map();
  let maxlen = 0;
  let len = 0 ;
   //map.set(array[ i ],map1.get( array[ i ] + 1)
  while(r < n){

      if (map.has(nums[r]))
        map.set( nums[r] , map.get(nums[r]) + 1 )
      else map.set(nums[r], 1)
      r++;

      while( map.size > k){

        map.set( nums[l] , map.get(nums[l]) - 1 );
        if( map.get(nums[l]) == 0 )
          map.delete(nums[l]);
        l++;
      
      }
      if(map.size == k) len ++;
      maxlen = Math.max( len , maxlen );

  }
  return maxlen;
  
};

console.log(subarraysWithKDistinct(nums,2) )
*/

//=--------------------------------========================
// let n = "532163";
// // let n = 532163;

// // console.log(n % 10);
// // for(var i = 0 ;i<n.length)
// // console.log(n[1]);
// var arr = n.split('');
// // console.log(n);
// console.log(arr);
// let temp = arr[3];
// arr[3] = arr[5];
// arr[5] = temp
// console.log(arr)

function nextGreaterElementWithSameSetOfDigits(n) {

  let text = n.toString();
  let arr = text.split('');
  let len = arr.length;
  // return arr;//[ '4', '8', '3', '7', '6', '4' ]
  // arr[2] = 10;
  // let num = arr.join("") * 1
  // return typeof num;

  //find smallest digit from right lesse than last digit;
  let smallIdx = null;
  for (var i = len - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      smallIdx = i - 1;
      break;
    }
  }

  // console.log(smallIdx)// 2, arr[2]=3

  if (smallIdx == null) return -1;
  if (smallIdx == len - 2) {
    //swaping last two element;
    let temp = arr[len - 2]
    arr[len - 2] = arr[len - 1]
    arr[len - 1] = temp;
    let num = arr.join("") * 1
    if (num > 2147483647) {
      return -1
      // 2147483648
    }
    return num;

  }

  //now as we find small ,now find smallest number right of its location;

  let swapidx = smallIdx + 1;
  // return swapidx;//3
  let swapNo = arr[smallIdx + 1];//arr[2+1] = 7;
  // arr[swapidx] >> should always greater than arr[smallIdx]
  for (var i = swapidx; i < len; i++) {

    if (arr[i] < swapNo && arr[i] > arr[smallIdx]) {
      swapNo = arr[i]
      swapidx = i;
    }
  }
  // console.log(swapNo, swapidx)//4 , 5
  // console.log(arr[swapidx],arr[smallIdx]);// 4 , 3

  // //now swap the swapno. with arr[smallIdx] ;
  let temp = arr[swapidx] //4
  arr[swapidx] = arr[smallIdx];
  arr[smallIdx] = temp;
  // console.log(arr[swapidx],arr[smallIdx]);// 3 , 4

  // console.log(arr);//[ '4', '8', '4', '7', '6', '3' ]

  //now sort the array ;
  // get the sorting portion of array
  let arr1 = arr.slice(smallIdx + 1, len);
  // console.log(arr1);//[ '7', '6', '3' ]
  arr1.sort((a, b) => a - b);
  // console.log(arr1);//[ '3', '6', '7' ]
  let k = 0
  for (var i = smallIdx + 1; i < len; i++) {
    arr[i] = arr1[k]
    k++;
  }
  let num = arr.join("") * 1
  return num

  // if (num > 2147483647) return num

  // return -1;


}
let num = 2147483647;
console.log(nextGreaterElementWithSameSetOfDigits(num))
//230142 x
//230421
//=------------------------=================================