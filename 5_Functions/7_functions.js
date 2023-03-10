// Hoisting
// Hoisting представляет процесс доступа к переменным до их определения.
// Возможно, данная концепция выглядит немного странно, но она связана с работой компилятора JavaScript. Компиляция кода происходит в два прохода. При первом проходе компилятор получает все объявления переменных, все идентификаторы. При этом никакой код не выполняется, методы не вызываются. При втором проходе собственно происходит выполнение. И даже если переменная определена после непосредственного использования, ошибки не возникнет, так как при первом проходе компилятору уже известны все переменные.
// То есть как будто происходит поднятие кода с определением переменных и функций вверх до их непосредственного использования.
{
  console.log(foo); // undefined
  var foo = 'Tom';

  var c = a * b;
  var a = 7;
  var b = 3;
  console.log(c); // NaN

  display();

  function display() {
    console.log('Hello Hoisting');
  }
}

{
  // Но от этой ситуации надо отличать тот случай, когда функция определяется в виде переменной:
  // При первом проходе компилятор также получит переменную display и присвоет ей значение undefined.
  display();

  var display = function () {
    console.log('Hello Hoisting');
  };
}

// let-переменные и константы
// в отличие от var-переменных константам и let-переменным при хостинге не присваивается начальное значение.
{
  console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
  let foo = 'Tom';
  console.log(foo); // не будет выполняться
}
