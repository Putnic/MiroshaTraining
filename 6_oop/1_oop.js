// Объектно-ориентированное программирование
{
  let user = new Object();
  user = {};

  user.name = 'Tom';
  user.age = 26;

  user = {
    name: 'Tom',
    age: 26,
  };

  let name = 'Tom';
  let age = 34;
  user = { name, age };
  console.log(user.name); // Tom
  console.log(user.age); // 34
}

// Методы объекта
{
  let user = {
    name: 'Tom',
    age: 26,
    display: function () {
      console.log(this.name);
      console.log(this.age);
    },
    display_1() {
      console.log(this.name, this.age);
    },
    move(place) {
      console.log(this.name, 'goes to', place);
    },
  };

  user.display(); // Tom 26
  user.move('the shop'); // Tom goes to the shop

  // вызов метода
  user['display']();
}

{
  // свойства состоит из двух слов, разделенных пробелом:
  let user = {
    name: 'Tom',
    age: 26,
    'full name': 'Tom Johns',
    'display info': function () {
      console.log(user.name);
      console.log(user.age);
    },
  };
  console.log(user['full name']);
  user['display info']();
}

{
  // Динамическое определение имен свойств и методов
  const prop1 = 'name';
  const prop2 = 'age';
  let tom = {
    [prop1]: 'Tom',
    [prop2]: 37,
  };
  console.log(tom); // {name: "Tom", age: 37}
  console.log(tom.name); // Tom
  console.log(tom['age']); // 37
}

{
  // Удаление свойств
  let user = {};
  user.name = 'Tom';
  user.age = 26;
  user.display = function () {
    console.log(user.name);
    console.log(user.age);
  };

  console.log(user.name); // Tom
  delete user.name; // удаляем свойство
  // альтернативный вариант
  // delete user["name"];
  console.log(user.name); // undefined
}

{
  // Константные объекты
  const person = { name: 'Tom', age: 37 };
  Object.freeze(person);
  person.name = 'Bob';
  console.log(person.name); // Tom - значение свойства не изменилось
}

{
  // Создание объекта из переменных и констант
  function display() {
    console.log(this.name, this.age);
  }
  const move = function (place) {
    console.log(this.name, 'goes to', place);
  };
  const name = 'Tom';
  const age = 37;
  const salary = 500;
  const person = { name, age, salary, display, move };

  person.display(); // Tom 37
  person.move('cinema'); // Tom goes to cinema
}

{
  const move = (place) => {
    console.log(this.name, 'goes to', place);
    console.log(this);
  };
  const name = 'Tom';

  const person = { name, move };
  person.move('cinema'); //  goes to cinema
}

{
  // Фукция Object.fromEntries()
  const personData = [
    ['name', 'Tom'],
    ['age', 37],
  ];
  const person = Object.fromEntries(personData);
  console.log(person); // {name: "Tom", age: 37}
  console.log(person.name); // Tom
}
