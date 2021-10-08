let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // выбрать пробелы в начале и конце строки
let result = hello.replace(wsRegex, ""); // заменить пробелы на пустую строку