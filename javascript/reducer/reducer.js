{
  /* Why use reducer  and its basic syntax ,
  - use for avoid loop variable, convert array to object and  
  1. it is used for accumulator like sum, count, total*/
}

// array.reducer((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

{
  /* React world example Shopping cart total*/
}
const cart = [
  {
    name: "iphone",
    price: 200,
    quantity: 2,
  },
  {
    name: "iphone",
    price: 10,
    quantity: 1,
  },
  {
    name: "samsung",
    price: 10,
    quantity: 1,
  },
];

{
  /* use reducer to get total price*/
}

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log(total);

{
  /* othe use cases for count occurence of items*/
}

const fruits = ["apple", "mango", "orange", "banana", "apple", "banana"];

const foundsameFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(foundsameFruits);

{
  /* flatten nested array*/
}

const nested = [1, 2, 3, [3, 4, 5], [24, 5, 5]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log(flat);
