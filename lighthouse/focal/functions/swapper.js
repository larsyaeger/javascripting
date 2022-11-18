//creating the function that grabs the value within the object based on the given key
const grabValue = (key, object) => {
//empty variable that we will assign to object[key] 
  let temp = 0;
//looping through the object
  for (const element in object) {
 //if the given key is equal to the current element we are in
    if (element === key) {
 //assigning the value within the key to the temp  
      temp = object[key];
    }
  }
//returning temp so swapper can read it
  return temp;
}
//function that swaps the values
const swapper = function (key1, object1, key2, object2) {
//temp and temp2 are using our grabValue function 
  let temp = grabValue(key1, object1);
  let temp2 = grabValue(key2, object2);
 //assigning what the temps hold to swap them
  object1[key1] = temp2;
  object2[key2] = temp;
}

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// const swapper = function (key1, object1, key2, object2) {
//   let temp = grabValue(key1, object1);
//   let temp2 = grabValue(key2, object2);
// // for (const key in object1) {
// //   if (key === key1) {
// //     temp = object1[key];
// //   }
// // }
// // for (const key in object2) {
// //   if (key === key2) {
// //     temp2 = object2[key];
// //   } 
// // };
//   object1[key1] = temp2;
//   object2[key2] = temp;
//   console.log(object1);
//   console.log(object2);
// }
