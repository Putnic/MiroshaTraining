var a;
var b = 2;
console.log(a);
a = 7;

b = a;
console.log(a);

const src = [1, 2, 3, 4, 5, 6];

function rmvFirstTwo(lst) {
  const [, , ...arr] = lst;
  return arr;
}

const arr = rmvFirstTwo(src);
console.log(arr);
console.log(src);

let res = 0 ?? 'hello';
console.log(`0 ?? 'hello' = ${res}`);

res = null ?? 'not null';
console.log(`null ?? 'not null' = ${res}`);

res = undefined ?? 'defined';
console.log(`undefined ?? 'defined' = ${res}`);

let message = 'Welcome to JavaScript';
let text = 'Hello work!';
text ??= message;
console.log(text); // Hello work!

text = null;
text ??= message;
console.log(text); // Welcome to JavaScript

// Преобразования данных
let number1 = parseInt(0.000005); // 0;
console.log(number1);

let number2 = parseInt(0.0000005); // 5
console.log(number2);

number1 = parseInt(String(0.000005)); // 0;
console.log(number1);

// Для дробных чисел меньше 10-6 (0.000001) применяется экспоненциональная запись, то есть число 0.0000005 представляется как 5e-7:
// То же самое касается очень больших чисел типа 999999999999999999999, которые также представляются к экспоненциальной форме.
console.log(0.0000005); // 5e-7
number2 = parseInt(String(0.0000005)); // 5
console.log(number2);

let num1 = 'javascript';
let num2 = '22';
let result = isNaN(num1);
console.log(result); // true - num1 не является числом

result = isNaN(num2);
console.log(result); //  false - num2 - это число

{
  let num1 = '110';
  let num2 = parseInt(num1, 2);
  console.log(num2); // 6
}
