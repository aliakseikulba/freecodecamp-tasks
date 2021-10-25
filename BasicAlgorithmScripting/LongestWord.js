function findLongestWordLength(str) {
  let resArr = [''];
  str.split(' ').forEach(w => {
    if (w.length > resArr[0].length) {
      resArr.unshift(w);
    }
  })
  return resArr[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));