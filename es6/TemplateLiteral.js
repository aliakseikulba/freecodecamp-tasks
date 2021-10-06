const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = [];

  arr.forEach(str => {
    const item = `<li class="text-warning">${str}</li>`;
    failureItems.push(item);
  })

  return failureItems;
}

const failuresList = makeList(result.failure);