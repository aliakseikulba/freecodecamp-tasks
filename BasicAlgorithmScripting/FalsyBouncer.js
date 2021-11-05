function bouncer(arr) {
  const res = [];
  arr.forEach(i => {
    if (!!i) {
      res.push(i);
    }
  })
  return res;
}

console.log(bouncer([7, "ate", "", false, 9]));;