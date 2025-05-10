{
  /*Pass by value used  primitive types - string, integer, boolean, bigInt, null, 
  undefined, symbol  */
}

let a = 10;
let b = a;
b = 20;

console.log(a); // a is 10 not change
console.log(b); //b is 20

{
  /*Pass by reference used no-primitive types obejct, array
  - pass the value in other function and assigned in another variable
  - copy the value but not change the original
  - we use for safety and you can use data without risk of modifying the original */
}

{
  /*used for nonprimitive type 
  - array, object, function and a reference is passed and changes the reference and effect the original one */
}

let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
