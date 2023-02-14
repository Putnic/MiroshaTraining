// Стрелочные функции (arrow functions)
{
  function hello() {
    console.log('Hello');
  }
  hello(); // вызываем функцию
}
{
  let hello = () => console.log('Hello');
  hello();
}

// Возвращение результата
{
  let sum = (x, y) => x + y;

  console.log(sum(1, 2)); // 3
  console.log(sum(4, 3)); // 7
  console.log(sum(102, 5)); // 107
}

{
  // Возвращение объекта
  let user = (userName, userAge) => ({ name: userName, age: userAge });

  let tom = user('Tom', 34);
  let bob = user('Bob', 25);

  console.log(tom.name, tom.age); // "Tom", 34
  console.log(bob.name, bob.age); // "Bob", 25
}

{
  const square = (n) => {
    let result = n * n;
    return result;
  };

  console.log(square(5)); // 25
}
