const obj = {
  name: "kuldeep",
  arrowFunction: () => {
    console.log("arrow function", this.name); //
  },

  normalFunction() {
    console.log("normal function", this.name);
  },
};

obj.arrowFunction(); // undefined
obj.normalFunction(); // kuldeep

{
  /*  syntax Arrow function  */
}

const add = (a, b) => a + b;

{
  /*  syntax Normal function  */
}

function add(a, b) {
  return a + b;
}

{
  /*  Normal function used constructor and used a new keyword and Arrow function doesn't use constructor like new keyword */
}

const Arrow = () => {};

const Normal = function () {};

new Arrow(); //typeError - not used constructor
new Normal(); // works//normal used constructor

{
  /*  Normal function are hoisted and arrow function not hoisted */
}
console.log(add()); // works
function add() {}
console.log(mul(2, 4)); // referenceError ...not works
const mul = (a, b) => {
  return a * b;
};
