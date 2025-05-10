{
  /* 1st problem var function is not used in modern code */
}
// function App() {
//   if (true) {
//     var message = "kuldeep";
//   }
//   console.log(message); // accssible in function scope
// }

// App();

{
  /* 2nd problem  we can change real value */
}

// var x = 19;
// var x = 20;
// console.log(x);

{
  /* LET used for blocked scoped and mutable variable and variable can changed */
}

// for (let i = 1; i <= 10; i++) {
//   console.log(i); // each iteration has its own ieteration
// }

{
  /* LET another rule */
}

// let userRole;
// if (isAdmin) {
//   userRole = "Admin";
// } else {
//   userRole = "User";
// }

{
  /* LET  can't redeclare */
}

// let count = 21;
// let count = 22;

// console.log(count); // can't redeclare

{
  /* const  block scope and immutable binding
  -- but can mutate object and array*/
}

//const name = "kuldeep";

// const user = {
//   name: "kuldeep",
//   age: 33,
// };

// user.age = 35; // user obeject can change value
// user = {}; // can't reassign again

{
  /* Let - block scope */
}

// function letExample() {
//   if (true) {
//     let message = "Hellow, bro, Me hu na";
//     console.log(message);
//   }
//   //console.log("outside", message);
// }

// letExample();

// {
//   const pi = 3.14;
//   console.log("pi is", pi); // works
// }
// console.log("outside", pi); // not works value should never reassigned

{
  /* let block socpe */
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 100);
}

// output is  0, 1,2, 3

// for(var i = 0<3; i++ ){
//   setTimeout(() => console.log(i), 100)
// }

// 3,3,3
