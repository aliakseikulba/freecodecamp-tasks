function repeatStringNumTimes(str, num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(str);
  }
  if (res.length > 0) {
    return res.join('');
  }
  return '';
}

repeatStringNumTimes("abc", 3);