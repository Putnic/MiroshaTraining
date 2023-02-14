// Проверка наличия и перебор методов и свойств
{
  const user = {};
  user.name = 'Tom';
  user.age = 26;
  user.print = function () {
    console.log(this.name);
    console.log(this.age);
  };
  let hasNameProp = 'name' in user;
  console.log(hasNameProp); // true - свойство name есть в user

  let hasWeightProp = 'weight' in user;
  console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight

  hasNameProp = user.name !== undefined;
  console.log(hasNameProp); // true
  hasWeightProp = user.weight !== undefined;
  console.log(hasWeightProp); // false

  hasNameProp = user.hasOwnProperty('name');
  console.log(hasNameProp); // true
  let hasPrintMethod = user.hasOwnProperty('print');
  console.log(hasPrintMethod); // true
  hasWeightProp = user.hasOwnProperty('weight');
  console.log(hasWeightProp); // false
}

{
  // Перебор свойств и методов
  const tom = {
    name: 'Tom',
    age: 26,
    print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
    },
  };

  for (const prop in tom) {
    console.log(prop, ' : ', tom[prop]);
  }
}

// Функции Object.entries, Object.keys, Object,values
{
  const tom = {
    name: 'Tom',
    age: 26,
    print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
    },
  };

  for (const prop of Object.entries(tom)) {
    console.log(prop);
  }
}

{
  const tom = {
    name: 'Tom',
    age: 26,
    print() {
      console.log(`Name: ${this.name}  Age: ${this.age}`);
    },
  };

  console.log(Object.keys(tom)); // ["name", "age", "print"]

  console.log(Object.values(tom)); // ["Tom", 26, print()]
}
