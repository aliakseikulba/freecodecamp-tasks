function findElement(arr, func) {
  let res = [];
  arr.forEach(item => {
    if(func(item)) {
      res.push(item);
    }
  })
  return res[0];
}

// function findElement(arr, func) {
//   return arr.find(func);
// }

findElement([1, 2, 3, 4], num => num % 2 === 0);