import React from "react";

// ✅ Sample nested array data
const arrayValue = [
  {
    name: "kuldeep",
    children: [
      {
        name: "dawar",
        address: { city: "hona" },
      },
      {
        name: "sima",
      },
    ],
  },
];

// ✅ Recursive component to render nested items
const Category = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        // ✅ Return is now explicit
        <li key={item.name}>
          {" "}
          {/* Use unique name as key */}
          {item.name}
          {/* ✅ If children exist, render recursively */}
          {item.children && <Category data={item.children} />}
        </li>
      ))}
    </ul>
  );
};

// ✅ Root component
const Recursive = () => {
  return (
    <div>
      <h2>Recursive Category Tree</h2>
      <Category data={arrayValue} />
    </div>
  );
};

export default Recursive;

// import React from "react";

// // ✅ Sample category data
// const categories = [
//   {
//     name: "Electronics",
//     children: [
//       { name: "Mobiles" },
//       {
//         name: "Laptops",
//         children: [{ name: "Gaming Laptops" }, { name: "Ultrabooks" }],
//       },
//     ],
//   },
//   {
//     name: "Clothing",
//     children: [
//       {
//         name: "Men",
//         children: [{ name: "T-Shirts" }, { name: "Jeans" }],
//       },
//       {
//         name: "Women",
//         children: [{ name: "Dresses" }, { name: "Tops" }],
//       },
//     ],
//   },
// ];

// // ✅ Recursive component to display nested category tree
// function CategoryTree({ data }) {
//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.name}>
//           {item.name}
//           {item.children && <CategoryTree data={item.children} />}
//         </li>
//       ))}
//     </ul>
//   );
// }

// // ✅ Example usage inside a component
// function Recursive() {
//   return (
//     <div>
//       <h1>Category Tree</h1>
//       <CategoryTree data={categories} />
//     </div>
//   );
// }

// export default Recursive;
