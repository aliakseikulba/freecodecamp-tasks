let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // исключить гласные и цифры
let result = quoteSample.match(myRegex);
console.log(result); // [' ', 'b', 'l','n', 'd', ' ','m', 'c', '.']