// Паттерн Модуль
// Паттерн "Модуль" базируется на замыканиях и состоит из двух компонентов: внешняя функция, которая определяет лексическое окружение, и возвращаемый набор внутренних функций, которые имеют доступ к этому окружению.
{
  let foo = (function () {
    let obj = { greeting: 'hello' };

    return {
      display: function () {
        console.log(obj.greeting);
      },
    };
  })();
  foo.display(); // hello
}

{
  let calculator = (function () {
    let data = { number: 0 };

    return {
      sum: function (n) {
        data.number += n;
      },
      subtract: function (n) {
        data.number -= n;
      },
      display: function () {
        console.log('Result: ', data.number);
      },
    };
  })();
  calculator.sum(10);
  calculator.sum(3);
  calculator.display(); // Result: 13
  calculator.subtract(4);
  calculator.display(); // Result: 9
}

// Рекурсивные функции - что функция вызывает саму себя.
{
  function getFactorial(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * getFactorial(n - 1);
    }
  }
  var result = getFactorial(4);
  console.log(result); // 24
}
{
  function getFibonachi(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    } else {
      return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
  }
  var result = getFibonachi(8); //21
  console.log(result); // 21
}

// Переопределение функций
// Переопределение происходит с помощью присвоения анонимной функции переменной, которая называется так же, как и переопределяемая функция:
{
  function display() {
    console.log('Доброе утро');
    display = function () {
      console.log('Добрый день');
    };
  }

  display(); // Доброе утро
  display(); // Добрый день
}
// TODO: присвоить ссылку на функцию переменной