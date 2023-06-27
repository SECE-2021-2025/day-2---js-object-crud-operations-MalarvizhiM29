// for - of
// let arr = [1, 2, 3];
// for (var element of arr) {
//   console.log(element * 2);
// }

//Odd or even using for-of
// let arr = [11, 12, 13, 14, 15];
// for (var element of arr) {
//   if (element % 2 == 0) {
//     console.log(element + "is even");
//   } else {
//     console.log(element + "is odd");
//   }
// }

//Delete array number
// let arr = [1, 2, 3, 4, 5];
// delete arr[2];
// console.log(arr);
// console.log(arr.length);

//Delete using Splice
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);
// console.log(arr.length);

//Array in Js
// let arr = new Array(1, 2, "Malar", [1, 2, 3], true);
// console.log(arr);
// let arr = new Array(5);
// arr[0] = 1;
// arr.splice(0, 1);
// arr.push(1);
// console.log(arr);

//for Each
// const arr = ["Apple", "Orange", "Banana"];
// arr.forEach((element) => {
//   console.log(element);
// });

//element X 2 (For Each loop)
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//   console.log(element * 2);
// });

//print 2,4,6 (For Each Loop)
// const multiply = (arr, num) => {
//   const newarr = [];
//   arr.forEach((element) => {
//     newarr.push(element * num);
//   });
//   return newarr;
// };
// const res = multiply([1, 2, 3], 2);
// console.log(res);

//Using Map
// const multiply = (arr, num) => {
//   return arr.map((element) => element * num);
// };
// const res = multiply([1, 2, 3], 2);
// console.log(res);

//Odd Even
// const oddEven = (arr) => {
//   const newarr = [];
//   arr.forEach((element) => {
//     element % 2 == 0 ? newarr.push("Even") : newarr.push("odd");
//   });
//   return newarr;
// };
// const res = oddEven([1, 2, 3]);
// console.log(res);

// Map - Odd Even
// const oddEven = (arr) => {
//   return arr.map((element) => (element % 2 === 0 ? "Even" : "Odd"));
// };
// const res = oddEven([1, 2, 3]);
// console.log(res);

//FilterEven
// const filterEven = (arr) => {
//   return arr.filter((element) => {
//     return element % 2 === 1;
//   });
// };
// const res = filterEven([1, 2, 3, 4, 5, 6]);
// console.log(res);

//Array with equal [...] -> Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2 === arr1);
// arr2[0] = 10;
// console.log("arr2 ===> ", arr2);
// console.log(arr2 === arr1);
// console.log("arr1 ===>", arr1);

//Spread Operator
//Combining Array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const res = [...arr1, ...arr2];
// console.log(res);

//Array Element
// const num = [1, 2, 3, 4, 5];
// const maxnum = Math.max(...num);
// console.log(maxnum);

// Array Destructuring -> rest is used at last only
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const [a, b, ...rest] = arr1;
// console.log(a);
// console.log(b);
// console.log(rest);

//Objects
// var student = {
//   name: "Malarvizhi",
//   dept: "EEE",
//   rollno: "21EE024",
// };
// console.log(student.name);
// console.log(student.dept);
// console.log(student.rollno);

//Object within object
// const student = {
//   name: "Malarvizhi",
//   class: "XI",
//   marks: {
//     english: 90,
//     maths: 95,
//     science: 75,
//   },
// };
// const sub = "maths";
// console.log(student.marks[sub]);
// console.log(student.marks.science);

//Object - Task
// const printMarks = (obj, sub) => {
//   return obj.name + ":" + sub + ":" + obj.marks[sub];
// };
// console.log(printMarks(student, "sci"));

// Apend ( + )
//console.log(2 + false);

//Object - Example
// const user = [
//   {
//     id: 1,
//     name: "Ram",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "nandha",
//     age: 22,
//   },
// ];
// console.log(user.length);

//objects - Task
// const obj = {
//   name: "Nandha",
//   age: 22,
//   height: 5,
// };
// const { name: n, age, h: height = 5.9 } = obj;
// console.log(height);

//for - in loop
// for (var key in obj) {
//   console.log(key + "; " + obj[key]);
// }
// const { address = { state: "TN" } } = obj;
// console.log(address.state);
// console.log(obj?.address?.state || "TN");

//Array of Object
// const obj = [
//   {
//     name: "nandha",
//     age: 22,
//     height: 5,
//   },
//   {
//     name: "Ram",
//     age: 25,
//     height: 6.1,
//   },
// ];
// const res = obj.map((user) => ({ ...user, age: user.age + 2 }));
// console.log(res);

//Array of Objects
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   a: 4,
// };
// console.log(obj);

//Spread operator
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

//Check the result object in the console:
console.log(myUpdatedVehicle);
