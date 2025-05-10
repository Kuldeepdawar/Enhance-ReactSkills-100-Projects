{
  /*What is Promise = Promise is an object that represents a future value either a successful result or failure in an async operation */
}
{
  /*What is Promise state - 1. Pending - Initial State
  2. Fulfilled - successful operation
  3. rejected - failed  */
}

{
  /*Example with .then() and .catch()  */
}
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("fetch");
//       } else {
//         reject("failed");
//       }
//     }, 3000);
//   });
// };

// fetchData()
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

{
  /*why use Promise -
   Promise avoid callback hell and make asyncronous code and more redable and manageble  */
}

{
  /*What is Async - Async is a keyword that returen a promise and
  what is await - await is used inside a async and pause a execution until the promise resolve  */
}

// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched with async/await!");
//     }, 2000);
//   });
// };

// const handleFetch = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data); // "Data fetched with async/await!"
//   } catch (err) {
//     console.log(err);
//   }
// };

// handleFetch();

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data fetch by async and await");
    }, 1000);
  });
};

const handleData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

handleData();
