{
  // Результат функции
  function sum(a, b) {
    return a + b;
  }
  let num1 = sum(2, 4);
  console.log(num1); // 6

  const num2 = sum(6, 34);
  console.log(num2); // 40
}

{
  // Возвращение функции из функции
  function menu(n) {
    if (n == 1)
      return function (x, y) {
        return x + y;
      };
    else if (n == 2)
      return function (x, y) {
        return x - y;
      };
    else if (n == 3)
      return function (x, y) {
        return x * y;
      };
    return function () {
      return 0;
    };
  }

  const action = menu(1); // выбираем первый пункт - сложение
  const result = action(2, 5); // выполняем функцию и получаем результат в константу result
  console.log(result); // 7
}
