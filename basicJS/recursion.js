function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n-1];
  }
}

console.log(multiply([1, 2, 3, 4, 5], 4));

//1 - return 4
//2 - return 3
//3 - return 2
//4 - return 1
//5 - return 1
//6 - 1*1*2*3*4 = 24

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n-1) + arr[n-1];
}

console.log(sum([2,2,3,4,5], 4));

//1 - 4-1, return arr[3] = 4
//2 - 3-1, return arr[2] = 3
//3 - 2-1, return arr[1] = 2
//4 - 1-1, return arr[0] = 2
//5 - return 0
// 6 - 2+2+3+4 = 11