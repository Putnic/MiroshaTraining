// Вложенные объекты и массивы в объектах
{
  var country = {
    name: 'Германия',
    language: 'немецкий',
    capital: {
      name: 'Берлин',
      population: 3375000,
      year: 1237,
    },
  };
  console.log('Столица: ' + country.capital.name); // Берлин
  console.log('Население: ' + country['capital']['population']); // 3375000
  console.log('Год основания: ' + country.capital['year']); // 1237
}

// Копирование и сравнение объектов
{
  // В отличие от данных примитивных типов данные объектов копируются по ссылке.
  const tom = { name: 'Tom' };
  const bob = tom;
  // проверяем свойство name у обоих констант
  console.log(tom.name); // Tom
  console.log(bob.name); // Tom

  // меняем свойство name у константы bob
  bob.name = 'Bob';
  // повторно проверяем свойство name у обоих констант
  console.log('После изменения');
  console.log(tom.name); // Bob
  console.log(bob.name); // Bob
}

{
  // Метод Object.assign
  const tom = { name: 'Tom', age: 37 };
  const bob = Object.assign({}, tom);
  bob.name = 'Bob';
  bob.age = 41;

  console.log(`Объект tom. Name: ${tom.name}   Age: ${tom.age}`);
  console.log(`Объект bob. Name: ${bob.name}   Age: ${bob.age}`);
}

{
  // Копирование из нескольких объектов
  const tom = { name: 'Tom', age: 37 };
  const sam = { age: 45 };
  const person = { height: 170 };
  Object.assign(person, tom, sam);
  console.log(person); // {height: 170, name: "Tom", age: 45}
}

{
  // Копирование объекта с помощью spread-оператора
  // spread-оператор ... позволяет разложить объект на различные пары свойство-значение, которые можно передать другому объекту.
  const tom = { name: 'Tom', age: 37, company: 'Google' };
  const bob = { ...tom };
  bob.name = 'Bob';
  // const bob = {...tom, name: "Bob"};

  console.log(tom); // {name: "Tom", age: 37, company: "Google"}
  console.log(bob); // {name: "Bob", age: 37, company: "Google"}
}
// Тем не менее если объекты содержат вложенные объекты, то эти вложенные объекты при копировании опять же по сути будут представлять ссылки на один и тот же объект:

{
  // Сравнение объектов
  const tom = { name: 'Tom' };
  const bob = { name: 'Tom' };
  console.log(tom == bob); // false
  console.log(tom === bob); // false
}

{
  const tom = { name: 'Tom' };
  const bob = tom;
  console.log(tom == bob); // true
  console.log(tom === bob); // true
}
