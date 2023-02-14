// Замыкания (closure) и функции IIFE
// Замыкание (closure) представляют собой конструкцию, когда функция, созданная в одной области видимости, запоминает свое лексическое окружение даже в том случае, когда она выполняет вне своей области видимости.

// Замыкание технически включает три компонента:
// внешняя функция, которая определяет некоторую область видимости и в которой определены некоторые переменные - лексическое окружение
// переменные (лексическое окружение), которые определены во внешней функции
// вложенная функция, которая использует эти переменные
{
  function outer() {
    let x = 5;
    function inner() {
      x++;
      console.log(x);
    }
    return inner;
  }
  let fn = outer(); // fn = inner, так как функция outer возвращает функцию inner
  // вызываем внутреннюю функцию inner
  fn(); // 6
  fn(); // 7
  fn(); // 8
}
{
  function multiply(n) {
    var x = n;
    return function (m) {
      return x * m;
    };
  }
  var fn1 = multiply(5);
  var result1 = fn1(6); // 30
  console.log(result1); // 30

  var fn2 = multiply(4);
  var result2 = fn2(6); // 24
  console.log(result2); // 24
}

// Самовызывающиеся функции
// Immediately Invoked Function Expression (IIFE)
{
  (function () {
    console.log('Привет мир');
  })();

  (function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) result *= i;
    console.log('Факториал числа ' + n + ' равен ' + result);
  })(4);
}
