function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    newArray.push(row);
  }
  for (let i = 0; i < n; i++) {
    row.push(0);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);