{
  // Передаваемые параметрам значения еще называют аргументами.
  // При этом в отличие от ряда других языков программирования мы в принципе можем не передавать значения параметрам. Например:
  function print(message) {
    console.log(message);
  }
  print();
}

{
  // Необязательные параметры и значения по умолчанию
  function sum(x, y) {
    if (y === undefined) y = 5;
    if (x === undefined) x = 8;
    const z = x + y;
    console.log(z);
  }
  sum(); // 13
  sum(6); // 11
  sum(6, 4); // 10

  function sum(x = 8, y = 5) {
    const z = x + y;
    console.log(z);
  }
  sum(); // 13
  sum(6); // 11
  sum(6, 4); // 10
}

{
  // При этом значение параметра по умолчанию может быть производным, представлять выражение:
  function sum(x = 8, y = 10 + x) {
    const z = x + y;
    console.log(z);
  }
  sum(); // 26
  sum(6); // 22
  sum(6, 4); // 10
}

{
  // Массив arguments
  function sum() {
    console.log(typeof arguments);
    let result = 0;
    for (const n of arguments) result += n;
    console.log(result);
  }
  sum(6); // 6
  sum(6, 4); // 10
  sum(6, 4, 5); // 15
}

{
  // Неопределенное количество параметров
  // В данном случае второй параметр ...temps указывает, что вместо него можно передать разное количество значений.
  function display(season, ...temps) {
    console.log(typeof temps);
    console.log(season);
    for (index in temps) {
      console.log(temps[index]);
    }
  }
  display('Весна', -2, -3, 4, 2, 5);
  display('Лето', 20, 23, 31);
}

{
  // Функции в качестве параметров
  function sum(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function operation(x, y, func) {
    console.log(typeof func);
    const result = func(x, y);
    console.log(result);
  }

  console.log('Sum');
  operation(10, 6, sum); // 16

  console.log('Subtract');
  operation(10, 6, subtract); // 4
}
