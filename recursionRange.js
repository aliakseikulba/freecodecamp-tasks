function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum) {
    return [];
  }
  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(endNum);
  return arr;
}

console.log(rangeOfNumbers(5, 10));


