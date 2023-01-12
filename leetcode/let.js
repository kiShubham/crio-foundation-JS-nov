// var twoSum = function (nums, target){
//   var g=[];
// nums.forEach((ele,idx)=>{
// let x = target - ele
// if(nums.includes(x) && idx != nums.indexOf(x)) {
// g=[idx,nums.indexOf(x)]; 
// }
// });
// return g;
// }
//   var arr=[1,2,3,4,5]
//   console.log(twoSum(arr,6));


///

var obj = [

  { firstname: "Robert", lastname: "Obrain" },

  { firstname: "Kevin", lastname: "Hart" },

  { firstname: "Dane", lastname: "Cobby" }

];

// let arr = obj.map((ele) => ele.firstname + " " + ele.lastname);
// console.log(arr);
function getFullName(obj) {
  let arr = obj.map((ele, idx) =>ele.firstname+" "+ ele.lastname)
  return arr;
}
console.log(getFullName(obj));



