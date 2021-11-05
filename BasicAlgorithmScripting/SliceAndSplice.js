function frankenSplice(arr1, arr2, n) {
  const copyArr2 = arr2.slice();
  copyArr2.splice(n,0,...arr1);
  return copyArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
