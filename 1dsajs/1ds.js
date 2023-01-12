// to convert a number into string
// The toString() method is a built-in method of the JavaScript Number object that allows you to convert any number type value into its string type representation.
// var num = 24;
// var str = num.toString();

const { timeEnd } = require("console");

// console.log(num); // 24
// console.log(str); // "24"
// console.log(
// var arr=str.split('')//.reverse().join('')//);//42


// var n=51
//  var str=n.toString();
//     str.split('').reverse().join('');
//     console.log(arr);
// console.log(Array.isArray(arr));
// for(var i=0;i<arr.length;i++){
//   if()
// }
// var a = 15
// if (a > 5) {
//   console.log('g');
// }
// else if (a > 10) {
//   console.log('k')

// for(;;){
//     console.log('hello')
// }
// console.log(12/5);//2.4
// console.log(1%10);//4
// console.log(Math.floor(12/5));//2


////--------------- TIME COMPLEXITY ---------------------------------

// function main() {

//   let n = 100000;

//   var startTime = performance.now()

//   for (let i; i <= 5; i++) {

//   }

//   var endTime = performance.now()

//   console.log(`Total time : ${endTime - startTime} milliseconds `)

// }

// main();// Total time : 0.00406000018119812 milliseconds ,har bar time alag ayega;

// let g=0
// for (var i = 0; i < 1; i++) {
// console.log(i)
// console.log('printed')
//   {g=10
// }}
// console.log(g)

////=============================================================// magic matrix
// function checkMagicSquare(n, matrix) {
//     var need=0
//     for(var i=0;i<n;i++){
//         need = need + matrix[i][i];
//     }
//   var dia1=0
//   var dia2=0
//     // console.log(need); //15
//   for(var j=0;j<n;j++){
//        var col=0
//             var row=0
//             var bigdia1=0;
//       var bigdia2=0;


//         for(var k=0;k<n;k++){
//             col = col + matrix[j][k] 

//             row = row + matrix[k][j]

//             if(j==k){
//                 dia1 = dia1 + matrix[j][k]
//               // console.log(`dia1=[${j}][${k}] , dia1=${dia1}`)
//             }
//             if(j+k==n-1){
//                 dia2=dia2 + matrix[j][k]
//               // console.log(`dia2=[${j}][${k}] , dia2=${dia2}`)
//             }
//         }
//       bigdia1=dia1;
//       bigdia2=dia2;
//        // console.log(col)
//        // console.log(row)

//          if( col != need || row!=need ) {
//      console.log("No")
//          }    

//   }
//        // console.log(bigdia1)
//        // console.log(bigdia2)
//   if(bigdia1 != need || bigdia2 != need ){
//     console.log("No")
//        } 

//    console.log('Yes')

// }

//

// function checkMagicSquare(n, matrix) {
//   var need = 0
//   var dia1 = 0
//   var dia2 = 0
//   for (var i = 0; i < n; i++) {
//     need = need + matrix[i][i];
//   }

//   // console.log(need); //15
//   for (var j = 0; j < n; j++) {
//     var col = 0
//     var row = 0
//     var bigdia1 = 0
//     var bigdia2 = 0

//     for (var k = 0; k < n; k++) {
//       col = col + matrix[j][k]
//       row = row + matrix[k][j]
//       // if (j == k) {
//       //   dia1 = dia1 + matrix[j][k]
//       // }
//       // if (j + k == n - 1) {
//       //   dia2 = dia2 + matrix[j][k]
//       // }
//     }

//     dia1=dia1 + matrix[j][j]
//     dia2=dia2+ matrix[j][n-1-j]

//     bigdia1 = dia1;
//     bigdia2 = dia2;

//         if (col != need || row != need) {
//           return "No"
//         }

//   }
//   if (bigdia1 != need || bigdia2 != need) {
//     return "No"
//   }

//   return 'Yes'

// }

// var n = 3
// var matrix = [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 6]
// ]
// console.log(checkMagicSquare(n, matrix))


//=====================

// function patternPrintingI(n) {

//     for(var i=1;i<=n;i++){
//         var sum=[];
//          var star="";
//         for(var j=0;j<i;j++){
//             star=star+(" *")
//             sum.push(star)
//         }

//     }
// return sum;
// }
// console.log(patternPrintingI(4))


//==========================================
// matrices
// let matrix1 = [1]
// let matrix2 = [1]
// let m = matrix1[1].length
// let n = matrix1.length

// function additionOfMatrix(matrix1, matrix2) {
//   const arr = [];
//   for (var i = 0; i < n; i++) {
//     let temp = []
//     for (var j = 0; j < m; j++) {
//       temp.push(matrix1[i][j] + matrix2[i][j]);
//       // temp.push()
//     }
//     arr.push(temp);
//   }
//   return arr;
// }


// var t=[7, 9, 22, 20 ,46]
// var w=[28, 94, 82, 3, 7]

// console.log(additionOfMatrix(matrix1, matrix2));
// var g = 4, h = 5;
// console.log(g + h);
// for (var i = 0,j = 0; i < 4, j < 8; i++, j++) {
//   console.log(`value of i =${i}`)
//   // console.log(`value of j =${j}`)
//   // console.log(i + j)
// }

//-----------------------------------------------------

// var word='aM'
// var ans=word.toLowerCase();
// console.log(ans);


//-----------------------Recurssion-------------------------

// function s(n) {
//   if (n == 0) {

//     console.log(44);
//     return 1;
//   }
//   else {
//     console.log(n);
//     s(n - 1);
//   }
// }
// s(5);


//----------------------------------------------------------

//fibonnaci series through iteration,
// function f(n) {
//   let t = new Array(n)
//   t[0] = 0;
//   t[1] = 1;
//   for (var i = 2; i < t.length; i++) {
//     t[i] = t[i - 1] + t[i - 2]
//   }
//   return t
// }
// console.log(f(5))

//
//--------------------------------------



// function series(n) {

//   if (n == 0){}
//   else {
//   n+series(n-1)
//   }
// }
// console.log(series(8))
// // 0112358
// function f(n){
//   if(n==0||n==1||n){
//     return n;
//   }
//   else
//     n-1+f(n-1)
// // }

// let arr=[4,5,6]
// var r=arr.pop();
// console.log(r);
// arr.push(r+1);
// console.log(arr);

// var arr=[1,2,3,4]
// var ary=[];
// //let k=2;
// for(var i=0;i<=k;i++){
//   for(var j=0;j<n;i++){
//     ary[j]=arr[j-1]
//   }
// }
//k=1=>[4123]
//j=0,


// function patternPrintingII(n) {
//   var arr = [];
//   var arr1 = [];
//   for (var i = 1; i <= n; i++) {
//     var str = '';
//     var str2 = ''
//     for (var j = 0; j < i; j++) {
//       str = str + '* '
//     }
//     for (var k = n ; k > i; k--) {
//       str2 += ' *'
//     }
//     arr.push(str)
//     arr1.push(str2)
//   }
//   console.log(arr);
//   console.log(arr1);
// }
// patternPrintingII(5)


///----------------------------



// function patternPrintingII(n) {
//   var arr = [];
//   var arr1 = [];
//   for (var i = 1; i <= n; i++) {
//     var str = '';
//     for (var j = 0; j < i; j++) {
//       str = str + '* '
//     }
//     arr.push(str)  
//   }
//   for (var i = 1; i < n; i++) {
//     var str2 = '';
//   for (var k = n ; k > i; k--) {
//       str2 += ' *'
//     }
//   arr.push(str2)
//   }
//   return (arr);
//   // console.log(arr1);
// }
// console.log(patternPrintingII(5))

// //

// function cyclicRotation(n, arr, k) {
//   // let ary = [];
//   for (var i = 0; i < k; i++) {
//     arr.unshift(arr.pop())
//     // for (var j = 0; j < n; j++) {


//     // }

//   }
//   return arr
// }
// var arr = [1, 2, 3, 4];
// console.log(cyclicRotation(4, arr, 3))

///



// function cyclicRotation(n, arr, k) {
//   let ary = [];
//   for (var i = 0; i < k; i++) {
//     var l=0;
//     for (var j = 0; j < n; j++) {
//       if(j==0){
//         ary[0]=arr[n+k];
//       }
//       ary[j] = arr[l]
//       l++

//     }

//   }
//   return ary
// }
// var arr = [1, 2, 3, 4];
// console.log(cyclicRotation(4, arr, 2))


///


// function oddNumbers(N) {
//     var ans=''
//     var n=1
//     for(var i=0;i<N;i++){
//     if(n==N){
//         return ans+N; 
//     }
//     else{
//         ans +=`${n} ` 
//         n+=2
//     }    
//     }
// }
// // var ans=''
// console.log(oddNumbers(7))
// for(var j=1;j<=7;j++){
//     if(j%2!=0)
//     ans+=j+''
// }
// console.log(ans)

// function  fib(n)
//   {
//       /* Declare an array to store Fibonacci numbers. */
//       let f = new Array(n);// 1 extra to handle case, n = 0
//       let i;
//       /* 0th and 1st number of the series are 0 and 1*/
//       f[0] = 0;
//       f[1] = 1;
//       for (i = 2; i <= n; i++)
//       {
//           /* Add the previous 2 numbers in the series
//           and store it */
//           f[i] = f[i-1] + f[i-2];
//       }
//       return f[n];
//   }
//   let n=9;
//   console.log(fib(n));

//------------------------------------------------
// greatest comon divisor by EUCLIDIAN ALOGRITHM



// var n=prompt('enter the value of n')
// var m =prompt('enter the value of m')
//check if the numbers is coprime or not 
// function gcd(a,b){
//   if(b==0)
//     return a;
//   else 
//     return gcd(b,a%b)  
// }
// console.log(gcd(12,36))
//all coprime number with n
// function note(n){
//   let temp=[];
//   for(var i=1;i<n;i++){
//     if(gcd(i,n)==1)
//     temp.push(i);
//   }
//   return temp
// }
//-------
//how many are coprime with n

// function note(n){
//   let temp=[];
//   for(var i=1;i<n;i++){
//     if(gcd(i,n)==1)
//     temp.push(i);
//   }
//   return temp.length
// }
// // console.log(note(10,1))//coprime;
// console.log(note(9))
// //-------------------------------------------------

// explain this line 473
// function isPrime(num, div = 3){
//       if(num === 2) return true;
//       if(num < 2 || num % 2 === 0)  return false;
//       if(div * div > num) return true;
//       if(num % div === 0) return false;
//       return isPrime(num, div + 2);
// }



// function isPrime(n){
//   if (n === 1)
//     return false;
//     for(var i=2;i<n;i++){
//       if(n%i==0){
//         return false;
//         }
//       }
//   return true;
// }   

// console.log(isPrime(2))//true
// console.log(2%2==0)//true
// // var n=2
// for(var i=2;i<10;i++){
//   if(n%i==0){
//     console.log(false)
//     console.log(i)
//     break;
//   }
// }
// var arr=[];
// var ans=0
// for(var i=1;i<=3;i++){
//   var temp=[];
//   for(var j=0;j<i;j++){
//     ans=ans+1
//     temp.push()
//   }
// }
// var size = 3
//  var arr=[];
//   var count=1
//   for(var i=0;i<size;i++){
//    var temp=[];
//     for(var j=0;j<size;j++){
//       temp[j]=count;
//       count++
//     }
//     arr.push(temp);
//   }
// console.log(arr);  

// console.log(parseInt("10*54545"))

//spiral II --------------------------------------------
// function spiral(n) {
//   let mat = new Array(n)
//   for (let i = 0; i < n; i++) {
//     mat[i] = new Array(n)
//   }//we have created a square matrix,n*n size;
//   //now we have to fill in spiral order;
//   let top = 0, left = 0, right = n - 1, bottom = n - 1;
//   let num = 1;
//   while (num <= (n * n)) {
//     // left to right;( 0 to 2 for n=3)
//     for (var i = left; i <= right; i++) {
//       mat[top][i] = num;
//       num++;
//     }
//     top++;
//     //top to bottom;
//     for (var j = top; j <= bottom; j++) {
//       mat[j][right] = num;
//       num++;
//     }
//     right--;
//     //rigth to left;
//     for (var k = right; k >= left; k--) {
//       mat[bottom][k] = num;
//       num++;
//     }
//     bottom--;
//     //bottom to top
//     for (var l = bottom; l >= top; l--) {
//       mat[l][left] = num;
//       num++;
//     }
//     left++;
//   }
//   return mat;
// }
// console.log(spiral(4))

//----------------------------------------
//best time to buy and sell stock;multiple times;

// function stock(prices){
//   let profit=0;
//   let buyingPrice=prices[0];
//   for(let i=1;i<prices.length;i++){
//     if(prices[i]<buyingPrice){
//       buyingPrice=prices[i];
//     }
//     else if(prices[i]>buyingPrice){
//       profit+=prices[i]-buyingPrice;
//       buyingPrice=prices[i]
//     }
//   }
//   return profit;
// }

// var y = [7, 1, 2, 3, 7, 4];
// // console.log(stock(y));
// y.push(5);
// console.log(y);

// var arr = new Array(4);
// arr.push(1)
// arr.push(3)
// arr.push(5)
// arr.push(4)
// // arr.push(2)
// console.log(arr);
// arr[5] = 78;
// console.log(arr);

//===========================================================
// function incrementNumber(N, A) {

//     let carry=1;
//     let ans=[];
//     for(let i = N-1 ; i >= 0 ; i-- ){
//         let d=A[i];
//         let sum= d + carry  ;
//         ans.push(sum % 10 ) ;
//         carry = Math.floor(sum/10) ;
//     }

//     // for the edge case.999+1 ,one extra block in array.
//     if(carry > 0){
//         ans.push(carry);
//     }
//     ans.reverse();
//     return ans;

// }
// console.log(incrementNumber(3,[1,2,2]));
//=======================================================

// arr=[7 ,1 ,5 ,3 ,6 ,4]

// function bestTimeToBuyAndSellStocks(prices) {

//     let profit = 0;
//     let buyingPrices = prices[0];

//     for(let i = 1; i < prices.lenght ; i++ ) {

//         if(  prices[i] < buyingPrices ) {
//             buyingPrices = prices[i];
//         }

//         else if(prices[i] > buyingPrices ) {
//             profit = profit + ( prices[i] - buyingPrices) ;
//             buyingPrices = prices[i];
//         }
//     } 
//     return profit ;
// }
// console.log(bestTimeToBuyAndSellStocks(arr));


// function reverse(s){
//   let ans="";
//   for(let i=s.length-1;i>=0;i--){
//     if(s[i] !=' '){
//       if(ans.length>0){
//         ans +=" ";
//       }
//       let j=i;
//       while(j>=0 && s[j]!=" ")
//         j--;
//       let word='';
//       for(let k=j+1;k<=i;k++)
//         word+=s[k];
//       ans+=word;
//       i=j;
//     }
//   }
//   return ans;
// }
// console.log(reverse('hello world'))


//=====================================================
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
let nums = [2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8];
console.log(removeDuplicatesFromSortedArrayII(13, nums));

//==

let mat=new Array(3);
    for(let i=0;i<3;i++){
        mat[i]=new Array(3);
    }
console.log(mat)