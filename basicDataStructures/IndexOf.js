function quickCheck(arr, elem) {

  return arr.indexOf(elem) >= 0;

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//indexOf returns index of element if it's exist and -1 if not