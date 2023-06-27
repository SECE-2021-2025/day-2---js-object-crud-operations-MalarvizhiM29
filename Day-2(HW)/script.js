// // Add user,edit user, Get user, Delete User
// // add user-id,obj
// // const addUser = (id,obj){

// // }
// // const getuser = (id){
// // return //object with id
// // }
// // const editUser =(id,key,value){

// // }
// // const deleteUser = (id){

// // }
// // Edit user - id,key,val
// // delete user - id
// // get user - id

// const users = {};

// const addUser = (id, obj) => {
//   users[id] = obj;
// };

// const getUser = (id) => {
//   return users[id];
// };

// const editUser = (id, key, value) => {
//   if (users[id]) {
//     users[id][key] = value;
//   }
// };

// const deleteUser = (id) => {
//   if (users[id]) {
//     delete users[id];
//   }
// };

// addUser("user1", { name: "Malar", age: 19 });
// addUser("user2", { name: "Yakavi", age: 20 });

// const user = getUser("user1");
// console.log(user);

// editUser("user1", "age", 5);
// console.log(getUser("user1"));

// deleteUser("user1");
// console.log(getUser("user1"));

const user = [
  {
    id: 1,
    name: "Ram",
    age: 20,
  },
  {
    id: 2,
    name: "nandha",
    age: 22,
  },
];

const addUser = (obj) => {
  user.push(obj);
  return user;
};

const getUser = (id) => {
  return user.find((el) => el.id === id);
};

const editUser = (id, key, value) => {
  const a = user.findIndex((el) => el.id === id);
  if (a !== -1) {
    user[a][key] = value;
  }
  return user;
};

const deleteUser = (id) => {
  const a = user.findIndex((ele) => ele.id === id);
  user.splice(a, 1);
  return user;
};

const newUser = {
  id: 3,
  name: "Barani",
  age: 25,
};

console.log(addUser(newUser));
console.log(getUser(2));
console.log(editUser(2, "age"));
console.log(deleteUser(2));
