/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // пароль длиннее 5 символов с двумя цифрами подряд
let result = pwRegex.test(sampleWord);