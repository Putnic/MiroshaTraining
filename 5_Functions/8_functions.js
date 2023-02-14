// Передача параметров по значению и по ссылке

// Передача параметров по значению
// Строки, числа, логические значения передаются в функцию по значению. Иными словами при передаче значения в функцию, эта функция получает копию данного значения.

{
  function change(x) {
    x = 2 * x;
    console.log('x in change:', x);
  }

  var n = 10;
  console.log('n before change:', n); // n before change: 10
  change(n); // x in change: 20
  console.log('n after change:', n); // n after change: 10
}

// Передача по ссылке
// Объекты и массивы передаются по ссылке.
{
  function change(user) {
    user.name = 'Tom';
  }

  var bob = {
    name: 'Bob',
  };
  console.log('before change:', bob.name); // Bob
  change(bob);
  console.log('after change:', bob.name); // Tom
}

{
  function change(user) {
    // полная переустановка объекта
    user = {
      name: 'Tom',
    };
  }

  var bob = {
    name: 'Bob',
  };
  console.log('before change:', bob.name); // Bob
  change(bob);
  console.log('after change:', bob.name); // Bob
}
