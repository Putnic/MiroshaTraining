// Область видимости переменных
// Scope of variables
{
  // Глобальные переменные
  // Все переменные и константы, которые объявлены вне функций, являются глобальными:
  var a = 5;
  let b = 8;
  const c = 9;
  function displaySum() {
    var d = a + b + c;
    console.log(d);
  }
  displaySum(); // 22
}

{
  // Определение локальной области видимости
  // Для определения локальной области видимости в JavaScript используются фигурные скобки { }, которые создают блок кода.
  {
    var a = 5;
    let b = 8;
    const c = 9;
  }
  // var определяет локальные переменные уровня функции, а let определяет локальные переменные уровня блока кода (подобным образом const определяет константы уровня блока кода).
}

{
  // Переменные и константы функции
  function print() {
    var a = 5;
    let b = 8;
    const c = 9;
    console.log('Function print: a =', a);
    console.log('Function print: b =', b);
    console.log('Function print: c =', c);
  }
  print();
  console.log('Global: a =', a); // Uncaught ReferenceError: a is not defined
}

// Локальные переменные в блоках кода, условиях и циклах
// безымянный блок
{
  // Переменная var
  {
    var a = 5;
  }
  console.log('a =', a); // a = 5

  // условная конструкция
  if (true) {
    var b = 6;
  }
  console.log('b =', b); // b = 6

  // цикл
  for (var i = 0; i < 5; i++) {
    var c = 7;
  }
  console.log('c =', c); // c = 7
}

{
  // Переменная let и константы
  {
    let a = 5;
    const b = 5;
  }
  console.log('a =', a); // Uncaught ReferenceError: a is not defined
  console.log('b =', b); // Uncaught ReferenceError: b is not defined
}

// Скрытие переменных
{
  // Скрытие переменных var
  var z = 89;
  function print() {
    var z = 10;
    console.log(z); // 10
  }
  print(); // 10

  // var определяет переменную уровня функции. Поэтому с помощью оператора var мы НЕ можем определить одновременно две переменных с одним и тем же именем и в функции, и в блоке кода в этой функции.
  function displayZ() {
    var z = 20;

    {
      var z = 30; // Не определяет новую переменную, а изменяет значение переменной z уровня функции
      console.log('Block:', z);
    }
    console.log('Function:', z);
  }
  displayZ();
}

{
  // Скрытие переменной let
  // let определяет переменную уровня блока кода
  // Все, что относится к оператору let, относится и к оператору const
  let z = 10;
  function displayZ() {
    let z = 20;

    {
      let z = 30;
      console.log('Block:', z);
    }

    console.log('Function:', z);
  }

  displayZ();
  console.log('Global:', z);
}

{
  // Необъявленные переменные
  // Если мы не используем это ключевое слово при определении переменной в функции, то такая переменная будет глобальной.
  function bar() {
    foo = '25';
  }
  bar();
  console.log(foo); // 25
  // Однако если мы не вызовем функцию, переменная будет не определена:
}

{
  // strict mode
  // Определение глобальных переменных в функциях может вести к потенциальным ошибкам. Чтобы их избежать используется строгий режим или strict mode:
  function bar() {
    'use strict';
    foo = '25'; // Uncaught ReferenceError: foo is not defined
  }

  bar();
  console.log(foo);
}
