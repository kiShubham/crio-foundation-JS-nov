//--------print matrix in spiral order--------------------------

// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)
/*
function spiralMatrixII(n) {
    let mat=new Array(n);
    for(let i=0;i<n;i++){
        mat[i]=new Array(n);
    }
    let top=0,left=0,right=n-1,bottom=n-1;
    let num=1;
    while( num <= (n*n) ){
        //left to right
        for( var i=left ; i <= right ; i++ ){
            mat[top][i]=num;
            num++;
        }
        top++ ; //eliminate 1st row(fully filled).
        
        //top to bottom
        for( var j=top ; j <= bottom ; j++ ){
            mat[j][right]=num;
            num++;
        }
        right-- ;//eliminate last column(fully filled).

        //right to left
        for(var k=right ; k >= left ; k-- ){
            mat[bottom][k]= num;
            num++;
        }
        bottom--; //last row eliminate as fully filled.

        //bottom to top
        for(var l=bottom ; l >= top ; l-- ){
            mat[l][left] = num ;
            num++;
        }
        left++; //eliminate 1st column on fully  filled.

    }
    return mat ;
}
*/

//------increment number represented as array-------------

///Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.
/*
  function incrementNumber(N, A) {

    let carry=1;
    let ans=[];
    for(let i = N-1 ; i >= 0 ; i-- ){
        let d=A[i];
        let sum= d + carry  ;
        ans.push(sum % 10 ) ;
        carry = Math.floor(sum/10) ;
    }

    // for the edge case.999+1 ,one extra block in array.
    if(carry > 0){
        ans.push(carry);
    }
    ans.reverse();
    return ans;
    
}
*/

//-----find the maximum profit by stocks ---------------

//You have an array in which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit by buying a share on one day and selling it on another day. You may repeat this across the days (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again)
/*

function bestTimeToBuyAndSellStocks(prices) {

    let profit = 0;
    let buyingPrices = prices[0];

    for(let i=1; i < prices.length ; i++ ) {
       
        if(  prices[i] < buyingPrices ) {
            buyingPrices = prices[i];
        }

        else if(prices[i] > buyingPrices ) {
            profit += prices[i] - buyingPrices;
            buyingPrices=prices[i];
        }
    } 
    return profit ;
}

*/

//--------rotate image by 90 degree----------------------

// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// Note:You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.
/*

function rotateImage(n, matrix) {
    
    for(var i = 0; i < n; i++){
        for(var j = i; j < n; j++){
            var temp = matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    for( var i = 0; i < n; i++ ){
        for( var j=0; j < n/2; j++ ){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j]
            matrix[i][n-1-j] = temp;
        }
    }
    return matrix;

}
*/

//======= find first missing positive number in array==========
// ===========================================================

// Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

/*

function firstMissingPositive(n, arr) {
    let isPresent= new Array(n+1);
    for( let i=0; i<n ; i++ ){
        if(arr[i]>=1 && arr[i]<=n ){
            isPresent[arr[i]] = true;
        }
    }
    //now traverse through updated isPresent
    for(let i=1; i<=n ;i++){
        if(!isPresent[i]){
            return i;
        }
    }
    return n+1;
}

*/

//=======find if the string permutation can form palindrome---------==========================================================

//Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

/*

function isPermutationPalidrome(s){
    let count={};
    for( let i=0 ;i< s.length ; i++){
        count[s[i]]=count[s[i]] ? count[s[i]]+1 : 1;
    }
    let odd=0;
    for(let c in count){
        if( count[c] % 2 == 1 ){
            odd++;
        }
    }
    if( odd <= 1 ){
        return true;
    }
    else{
        return false;
    }
    
}

*/

//=========== Reverse order of words in a string ============
// ============================================================
/*
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words.
The returned string should only have a single space separating the words.
Do not include any extra spaces.
*/

/*

function reverseWordsInAString(s) {
    let ans="";
    for(let i=s.length-1 ;i>=0 ; i--){
        if(s[i] !=' '){
            if(ans.length>0){
                ans+=' ';
            }
            let j = i;
            while(j>=0 && s[j]!=' '){
                j--;
            }
            let word='';
            for(let k=j+1; k <= i ; k++ ){
                word += s[k];
            }
            ans+=word;
            i = j ;    
        }
    }
    return ans;
}

*/

//==========find if the one string is an anagram of other====
//===--------------------------------------------------------

/*
Given two strings s and t, write a function to determine if t is an anagram of s.
Note: You may assume the string contains only lowercase alphabets.
*/
/*
function validAnagram(s, t) {
    // let n = s.length;
    // let m = t.length;
    // if(n !== m) return false;
    
    // let count_s = {} ;
    // // let count_t = {} ;

    // for(let k in s){
    //   if(!count_s[s[k]]){
    //     count_s[s[k]]=1;
    //   }
    //   else{
    //     count_s[s[k]]++;
    //     }
    // }
    // for(let k in t){
    //     if(!count_s[t[k]]){
    //         return false;
    //     }
    //     count_s[t[k]]--; 
    // }
    // return true;

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

 // for(let i = 0; i < n; i++){
 //     count_s[s[i]] = count_s[s[i]] ? count_s[s[i]] + 1 : 1 ;
 // }
//////////////////////////////
    // if (s.length !== t.length) return false;
    // const map = {};
    
    // for (let i = 0; i < s.length; i++) {
    //     map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    // }
    
    // for (let i = 0; i < t.length; i++) {
    //     if (map[t[i]]) map[t[i]]--;
    //     else return false;    
    // }

    // return true;
}

*/


//-------- set matrix rows and column to zero -------------
// ------------------------------------------------------------

/*
Given an m x n matrix, if an element is 0, set its entire row and column to 0.
Do it in-place, that is, modify the same matrix. Do not create a new one.
*/

/*
function setMatrixZeroes(matrix) {
    //sc=O(m+n)
    //tc=O(m*n + m*n )worst case
    
    let m=matrix.length;
    let n=matrix[1].length;
    let row=new Array(m);
    let col=new Array(n);

    for( var i=0; i < m; i++){
        for( var j=0; j < n; j++){
            if(matrix[i][j]==0){
                row[i]=0;
                col[j]=0;
            }
        }
    }
    for( var i=0; i < m; i++ ){
        for(var j=0; j <n; j++){
            if(row[i]==0) matrix[i][j]=0;
            if(col[j]==0) matrix[i][j]=0;
        }
    }

    return matrix;
}

*/


// ---------Find pair with Given Sum in Sorted Array ----------
//-------------------------------------------------------------

// Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.


/*

function twoSumInSortedArray(n, arr, target_sum) {
    let l=0; 
    let r=n-1;
    while(l<r){
        let currSum=arr[l]+arr[r];
        if(currSum==target_sum)
            return true;
        else if(currSum < target_sum)
            l++;
        else r--;
    }
    return false;
}

*/

//------------- Merge two sorted array -----------------------
//============================================================

// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

/*

function mergeSortedArray(m, nums1, n, nums2) {
    let ans=[];
    let i=0;// num1 array;
    let j=0;//num2 array;
    while(i<m && j<n){
        if(nums1[i] <= nums2[j]){
            ans.push(nums1[i]);
            i++;
        }
        else{
            ans.push(nums2[j]);
            j++;
        } 
    }
    while(i<m){
        ans.push(nums1[i++]);
    }
    while(j<n){
        ans.push(nums2[j++]);
    }
    return ans;
}

*/



//============ find triplet with maximum sum in unsorted Array---------------------------------------------------------------

// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

/*
function maxSumTriplet(n, nums) {
    
    // let sum = 0;
    // let mx = 0;
    // for(var i=0;i<n-2;i++){
    //     for(var j=i+1; j<n-1;j++){
    //         for(var k=j+1;k<n;k++){
    //             if(nums[i]<nums[j]<nums[k]){
    //                 sum = nums[i] + nums[j] + nums[k];
    //                 mx = Math.max(mx,sum);
    //             }
    //         }
    //     }
    // }
    // return mx;

    let ans=0;
    for(let j=1;j<n-1;j++){ //center element lie between 1 to n-2th element. 2nd to second last.
        let leftMax = -1;
        let rightMax = -1;
        for(let i = j-1; i>=0 ;i--){
            if(nums[i]<nums[j]) leftMax = Math.max(leftMax,nums[i]);
        }
        for(let k=j+1;k<n;k++){
            if(nums[j]<nums[k]) rightMax = Math.max(rightMax,nums[k]);
        }
        if(leftMax > 0 && rightMax > 0) 
            ans = Math.max(ans , leftMax + nums[j] + rightMax);
    }
    return ans;
}

*/

//-------Remove duplicates such that each element occurs at most twice ------------------------------------------------

//=========================================================

// Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

/*
//below method m spce complexity O(n) h aur hame O(1) chahiye.

function removeDuplicatesFromSortedArrayII(n, nums) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] != nums[i + 2]) {
      // console.log(nums[i]);
      ans.push(nums[i]);
      
    }
  }
  // console.log(ans)
return { newLength: ans.length, newArr: ans };
}


//yes sirok

//is code m nya [] nhi bna rhe h isilye yha space complexity O(1) h;

function removeDuplicatesFromSortedArrayII(n, nums) {

  let currl = nums.length;//n
  let index = 1;//pointers
  let count = 1;
  for (let i = 1; i < n; i++) {

    if (nums[i] == nums[i - 1]) {
      count++;//ok
    } else {
      count = 1;
    }

    if (count <= 2 ) {
      nums[index] = nums[i];//ok
      index++;
      //i think index++ for last element is working that should be stopped by second last element.
    }

  }

  // console.log(count);
  // let newlen = nums.length;

  // nums.length = newlen + (newlen - currl - 1);

  // console.log(nums.length)
  // console.log(nums);
 
  return { newLength: index, newArr: nums };
  //o just a minute
}
*/



//============ Find pair with given sum in unsorted Array=====
// ==========================================================

// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.
// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.
// Print the indices in increasing order.


/*

function twoSum(nums, target) {
    const cache = {}; 
    for(let idx = 0; idx < nums.length; idx++){
        if(cache[nums[idx] ] >= 0){
            return [cache[nums[idx]] , idx]
        }
        cache[target-nums[idx]] = idx
    }
    
    
    // let n= nums.length;
    // let l=0;
    // let r=n-1;
    
    // let arr=new Array(n);//copy of original nums;
    // for(var i=0; i < n; i++){
    //     arr[i]=nums[i];
    // }
    // //sort the array  nums in increasing order;
    
    // nums.sort(function(a,b){ return a-b});
  
    // while(l < r){
    //     let sum = nums[l]+ nums[r];
    //     if(target==sum){
    //         break;
    //     }
    //     else if(target > sum) l++;
    //     else if(target < sum) r--;
    // }
    
    // var x=0;
    // var y=0;

    // for(var i=0;i < arr.length;i++){
    //     if(arr[i]==nums[l]) 
    //          x = i ;
    // }
    // for(var j=0;j<arr.length;j++){
    //     if(arr[j]==nums[r] && j != x) 
    //         y = j ;
    // }
    // return [x,y];
  
}


*/


//==========Find the container that holds the most water =====
// ===========================================================


// You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.
// Note: You may not slant the container and n is at least 2.


/*

function maxArea(height) {
    var n=height.lenght;
    let ans = 0;
    for(var i=0;i<height.length;i++){
        var cap = height[i]*i;
        ans=Math.max(ans,cap);
    }
    for(var i=n-1;i>=0;i--){
        var cAP=height[i]*i;
        ans=Math.max(cAP,ans)
    }
    return ans;
}
function main() {
    let n = parseInt(readLine(), 10);
    let height = readIntArr();
    let result = maxArea(height);
    console.log(result);
}

*/



//=========== merger overlapping intervals ================
//=========================================================

/*
An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.
Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.
Note: The merged intervals should be printed in increasing order of start value.*/

/*

function mergeIntervals(n, intervals) {
    //sorting the array first.
    intervals.sort((a,b)=>{
        if(a[0]<b[0]) return -1;
        else if(a[0]>b[0]) return 1;
        else return 0;
    })

    let ans=[];
    for(let i=0;i<n;i++){
        if( ans.length >0 && intervals[i][0] <= ans[ans.length-1][1] )
        {
            ans[ans.length-1][1]=Math.max(intervals[i][1],ans[ans.length-1][1]);
        }
        else{
            ans.push(intervals[i]);
        }
    }

    return ans;
}

*/


//=======Find minimum number of meeting Rooms Required========
//============================================================

// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

/*
function meetingRooms(meetings){

  let n = meetings.length;
  let si = new Array(n);
  let ei = new Array(n);
  meetings.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  })
  for(var i=0;i<n;i++){
    si[i] = meetings[i][0];
  }
  // console.log(meetings)
  meetings.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else return 0;
  })
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
  return max
}

*/


/*
function meetingRooms(meetings) {
    let n = meetings.length;
    if ( n==0 ) return 0;
   

    meetings.sort((a,b)=>{
        if(a[0]<b[0]) return -1;
        else if(a[0]>b[0]) return 1;
        else return 0;
    })

// 0  20  ; 5  10  ;10  15
// 0  20  ; 5   15 ;


    let ans=[];
    ans.push(meetings[0])
  for (let i = 1; i < n; i++) {  
   if ( ans[ans.length - 1][1] > meetings[i][0] ) {
      ans.push(meetings[i]);
    
    } 
    else if (ans[ans.length - 1][1] <= meetings[i][0]){
       ans[ans.length - 1][1] = (meetings[i][1]);
    }   
  }

    return ans.length;
   
}

*/

//---------- Find equal partition index -------------------
//---------------------------------------------------------

// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.
// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.
// Return the index of the partitioning element. If no such element exists, return -1.

/*

function equalPartition(n, arr) {
    let prefixSum = new Array(n);
    let suffixSum = new Array(n);
    
    prefixSum[0] = arr[0];
    suffixSum[n-1]=arr[n-1]

    for( let i = 1; i < n; i++ ){
        prefixSum[i] =  prefixSum[ i - 1 ] + arr[ i ];
    }
    // console.log(prefixSum);

    for( var i = n-2; i >= 0 ; i-- ){
        suffixSum[i] = suffixSum[ i + 1 ] + arr[i];
    }
    // console.log(suffixSum);

    for(var i = 1; i < n-1; i++){
        if(prefixSum[i-1] === suffixSum[i+1]){
            // if(prefixSum[i] === suffixSum[i]){
            return i;
        }
    }
        return -1;
}


*/


//========== find the largest sum constiguous subArray =======
//------------------------------------------------------------


// Given an array, find a non-empty contiguous subarray with the largest sum.

/*

function contigiousSequence(n, arr) {
    let sum=0;
    let maxSum=0;
    // let maxNum = null;
    let maxNum=arr[0];
    for( var i=0;i < n; i++ ){

        maxNum = Math.max(arr[i] , maxNum);

        sum += arr[i];
        if(sum < 0) sum=0;
        maxSum = Math.max(sum,maxSum);
    }
    // console.log(arr[0])
    if(maxNum <= 0) 
        return maxNum;

    return maxSum;

} 

*/

//========== Find if there exists a subarray with sum 0 ======
//------------------------------------------------------------

//Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.
// Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

/*

function subarraySumZero(n, arr) {
  if(arr[0]==0) return "Yes";

    for(var i=0;i<n;i++){
      var sum = arr[i];
      if(sum == 0) return "Yes"
      for(let j= i+1 ;j < n ;j++){
        sum=sum+arr[j];
        if(sum==0)return "Yes"
      }
    }
    return "No"


  // sum = 0;
  // for(var i =0 ;i<n ;i++){
  //   sum = sum + arr[i];
  //   if(sum==0) return "Yes";
  // }
  // return "No"
}

*/

//========== Find largest subarray with sum 0 ===========
//------------------------------------------------------

// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.
// If there is no such sub-array print -1.


/*

function largestSubarraySumZero(n, arr) {

    var prefixSum = new Array(n);
    var sum = 0; let maxlen = 0;
    var r = 0; var l = 0;
    var map = new Map() ;

    for(var i = 0; i<n ; i++ ){
        sum = sum + arr[i];
        prefixSum[i] = sum ;
    }

    if(prefixSum[n-1] == 0) return arr ;
   
    for(var i=0;i<n;i++){

        if(map.has(prefixSum[i])) {
            let x = map.get(prefixSum[i]) ;
            let y = i ;
            var len = y - x;
            if( len > maxlen){
                maxlen = len
                r = i
            }
        }
        else {
            map.set(prefixSum[i],i)
        }
    }
    
    l = r - maxlen + 1 
    // console.log(l,r);
    var ans = new Array(maxlen); 
    for(var i = l ; i <= r ; i++ ){
        ans[i] = arr[i];
    }
    // console.log(maxlen);
    // If there is no such sub-array print -1.
    if(maxlen == 0){
        return [ -1 ];
    }
    //otherwise    
    return ans;
             
}

*/



//========= Find the longest substring with at most k Distinct charracters===========================================

/*
Given a string, find the length of the longest substring that contains at most K distinct characters.
Note:Uppercase and Lowercase characters should be considered as different characters.
There can be numbers and special characters as well.
*/

/*

function lengthOfLongestSubstringKDistinct(s, k) {
  let n = s.length ;
  let l = 0;let r = 0 ;
  const map =  new Map();
  let maxlen = 0;
   //map . set(array[ i ],map1.get( array[ i ] + 1)
  while(r < n){
      if (map.has(s[r]))
        map.set( s[r] , map.get(s[r]) + 1 )
      else map.set(s[r], 1)
      r++;

      while( map.size > k){
        map.set( s[l] , map.get(s[l]) - 1 );
        if( map.get(s[l]) == 0 )
          map.delete(s[l]);
        l++;
      }
      var len = r - l  ;
      maxlen = Math.max( len , maxlen )

  }
  return maxlen;
}

*/


//===== Find the maximum sum possible out of all subarray of size k ==
//----------------------------------------------------------

//Given an array of integers and a number k, find the maximum sum of a subarray of size k.


/*

function maximumSubarraySumSizeK(N,A,K) {
    
    var maxSum = 0;
    if(N == 0) return 0;
    var sum = 0;
    let l = 0;
    let r = l + K;
    //first window
    for(var i = 0;i < K ; i++ ){
        maxSum = maxSum + A[i];
    }
    sum = maxSum;

    for( var i = K ;i < N ; i++ ){
        r = i; // isko add karenge sum m ;
        l = r - K // isko subract karenge sum m se;
        sum = sum + ( A[r] - A[l] ) ;
        // sum = sum + ( A[i] - A[i-K] ) ;
        maxSum = Math.max(sum ,maxSum)  
    } 
return maxSum;
//162609

}
*/


/// Find the longest substring without a repeating character==
//=------------------------------------------------------------

// Given a string, find the length of the longest substring which has no repeating characters.

/**

function longestSubstringWithoutRepeatingCharacter(s) {
    let n = s.length;
    let l=0; let r =0;
    const set1 = new Set();
    let maxlen = 0;
    let len =  0;
    // set1.add(s[r]);
    // r++;
 
    while( r < n ){
        
        while(set1.has(s[r])){
          set1.delete(s[l])
          l++;
        }  
        set1.add(s[r])
        r++;
        len =  set1.size;
        maxlen = Math.max(len,maxlen)
  }
  
  return maxlen
  
}


*/


//===== Sort in Wave Array ===================================
//------------------------------------------------------------


// Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

/*

function wiggleSort(arr, n) {
    arr.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  })
  //  return arr;

    let l = 0;
    let r = 0;
    let left =[];
    let right =[];
    let m = Math.ceil(n/2);
    for(var i = 0;i < n ;i++){
        if(i < m) left.push(arr[i]);
        if(i >= m) right.push(arr[i]); 
    }
    for(var i = 0;i < n ; i++ ){
        if(i%2==0){
            arr[i] = left[l]
            l++;
        }else{
            arr[i] = right[r] 
            r++
        }
    }
    return arr;
}

*/


//==== Find the next greater number with the same digit =====
//-----------------------------------------------------------


// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

/*

function nextGreaterElementWithSameSetOfDigits(n) {
        
  let text = n.toString();
  let arr = text.split('');
  let len = arr.length;
  // return arr;//[ '4', '8', '3', '7', '6', '4' ]
  // let num = arr.join("") * 1
  // return typeof num;// number;

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
    arr[len - 1] = temp
    let num = arr.join("") * 1
    if(num > 2147483647){
        return -1
        // 2147483648
    }
    return num;
  }

    //now as we find small ,now find smallest number right of     its location;

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
  let arr1 = arr.slice(smallIdx + 1, len );
  // console.log(arr1);//[ '7', '6', '3' ]
  arr1.sort((a, b) => a - b);
  // console.log(arr1);//[ '3', '6', '7' ]
  let k = 0
  for(var i = smallIdx + 1; i < len ;i++){
    arr[i] = arr1[k]
    k++;
  }
  let num = arr.join("") * 1

    if(num > 2147483647){
        return -1
        // 2147483648
    }

    return num;


}

*/

//====== Implement count sort on given string =============
//---------------------------------------------------------


// A string S is given consisting of lowercase alphabetical characters only. You need to return a sorted string using Count Sort.

/*
function countSort(n, str) {

    let count = new Array(26);
    count.fill(0)
    for (let i = 0; i < str.length; i++) {
        count[str.charCodeAt(i) - 97]++;
    }
    let result = '';
  for (let i = 0; i < 26; i++) {
    result += String.fromCharCode(i + 97).repeat(count[i]);
  }
  
  return result;
}


*/


//======  Sorting Structures ==========================
//-----------------------------------------------------

/*
You are given a list of marks over 5 subjects scored by n students. You need to sort the student by following rules.

The student whose sum of marks will be highest must come at the top of the leaderboard.

Students whose total sum of marks are the same will be sorted alphabetically ascending by name.

In all other cases, student with lesser id will come before in the leaderboard
*/

/*

function marksSort(n, students) {

  var id = new Array(n);
  for(var i = 0; i <n;i++ ){
    id[i] = students[i][0]
  }
  // return id;
  var names = new Array(n);
  for(var i = 0; i < n;i++ ){
    names[i] = students[i][1];
  }
  // return names;
  var marks = new Array(n);
  for(var i = 0; i < n; i++ ){
    var sum = 0;
    for(var k = 2; k < 7;k++){
      sum += students[i][k];
    }
    marks[i] = sum;
  }
  // return marks;
// [ [id0,names0,marks0],[] ]
  var full = [];
  for(var i=0;i<n;i++){
    full.push( [ id[i],names[i],marks[i] ] )
  }
  // [ [ 1, 'Alan', 228 ], [ 2, 'Fabien', 465 ], [ 3, 'Gamora', 345 ] ]
  // console.log(full);
 //now make comparator function ;

  full.sort((a,b) => {

    if(a[2] == b[2]){
      if(a[1] == b[1]){
        return a[0]-b[0];
      }else return a[1].localeCompare(b[1]);
    }else return b[2] - a[2];

  })
// console.log(full)
  var ans = new Array(n);
  for(var i=0; i<n ;i++){
    ans[i] = full[i][0];
  }

  return ans;

}

*/


//======= Sort based on absolute value ====================
//---------------------------------------------------------

// Given an array of integers, sort the array based on the absolute value of the elements.

/*

function sortArrayAbsolute(n, nums) {
    nums.sort((a,b) => {
        if(Math.abs(a) > Math.abs(b)) return 1;
        else if (Math.abs(a) < Math.abs(b)) return -1;
        else return 0;
    })
    return nums;
}

*/

//========== Sort Array with string elements =============
//--------------------------------------------------------


// Given an array, where integers are written as strings, sort the array and return it, with the elements still being strings.
// Note that the number of digits in each element may go up to 10^6.

/*


function numSort(n, numbers) {
    numbers.sort((a,b)=>{
        if(a.length != b.length) return a.length-b.length;
        else return a.localeCompare(b)
    })
    return numbers


    // for(var i = 0;i<n;i++){
    //     numbers[i] = numbers[i]*1
    // }

    // numbers.sort((a,b)=>{
    //     return a - b 
    // })
    // for(var i = 0;i<n;i++){
    //     numbers[i] = numbers[i].toString();
    // }
    // return numbers;

}


*/

//========== Min difference between two Array elements =====
//----------------------------------------------------------

// Find the minimum difference possible between any two elements in the given array.

/*
function minDiff(n, arr) {
// tc = O(nlogn),sc= O(1)
   arr.sort(function(a, b){return a - b});
    let min = arr[1] - arr[0];
    for(var i=0;i<n-1;i++){
        var diff = arr[i+1] - arr[i]
        min =Math.min(min,diff);
    }
    return min;
}

*/

//========= Find the first One ============================
//---------------------------------------------------------


// Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1;

/*

function zeroOnes(n, arr) {
    let l = 0;
    let r = n-1;
    while( l <= r ){
    
        var mid = Math.floor((l + r) / 2);
        // if true, then 'mid' is the index of first '1'
        if( arr[mid]==1 && ( mid == 0|| arr[mid-1] == 0)){
            return mid;
        //  first '1' lies to the left of 'mid'
        }else if(arr[mid] == 1){ 
            r = mid -1; 
        }
        // first '1' lies to the right of 'mid'
        else  l = mid + 1 ; 

    }
    return -1

}

*/

//======= Search in Sorted Rotated Array ==================
//---------------------------------------------------------

// An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.
// You are given a rotated sorted array, and some integer values. You have to find each value’s location in the array. If the value is present, return the index in which it is stored ( 0 based indexing) , otherwise if not found return -1.
// Assume the array doesn’t have duplicates.

/*

function binarySearch(arr,l,r,x){

    while(l <= r){
        let mid = Math.floor((l+r)/2);

        if( x > arr[mid] ){
            l = mid + 1
        }
        else if(x < arr[mid]){
            r = mid - 1
        }
        else if(x == arr[mid] ) return mid;
    }
    return -1;

}

function findpivot(arr,n){
    
    let l = 0;let r = n-1 ;
    // if ( l == r) return l; 
    while(l <= r){

        let mid = Math.floor(( l + r )/2);
        
        if ( arr[mid] > arr[mid+1] ) { return  mid+1  }
        else if (arr[mid] >= arr[l]) { l = mid + 1 }
        else if( arr[mid] < arr[l] ) { r = mid - 1 }

    }
    return -1;
}

function search(nums, target) {

    let n = nums.length
    // let ans = 0;
    let pi = findpivot(nums,n);

    // If we didn't find a pivot,
    // then array is not rotated at all
    if ( pi == -1 ){ //or if(nums[0]<nums[n-1])
        return binarySearch( nums, 0, n-1, target)
    }
    else{
        if( target >= nums[0] )
            // l = 0 ; r = pi-1
            return binarySearch( nums, 0, pi-1, target)

        else if( target < nums[0] )
            // l = pi ; r = n-1
            return binarySearch( nums, pi, n-1, target)
    
    }

}

*/

//=========== Find the peak element in the array ===========
//----------------------------------------------------------



// A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must write an algorithm that runs in O(log n) time.

/*

function peakElement(N,nums) {
    
    for(var i=0;i<N;i++){
        if(nums[i] > nums[i+1] && nums[i] > nums[i-1]){
            return i;
        }
        if( i == 0 && nums[i]>nums[i+1] )
            return i;
        if( i == N-1 && nums[N-1] > nums[N-2] && nums[N-1]>nums[0] ) return i;
    }
    
}

*/

///==== Count occurence of an integer ===================
//-------------------------------------------------------


// Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.


/*
function countOccurrences(n, k, arr) {
    let len = 0 ;
    for(var i=0;i<n;i++){
        if(arr[i]==k){
            len++
        }
    }
    return len ;
}

*/


