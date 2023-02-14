// Объекты в функциях
{
  function createUser(pName, pAge) {
    return {
      name: pName,
      age: pAge,
      displayInfo: function () {
        document.write('Имя: ' + this.name + ' возраст: ' + this.age + '<br/>');
      },
    };
  }
  var tom = createUser('Tom', 26);
  tom.displayInfo();
  var alice = createUser('Alice', 24);
  alice.displayInfo();
}

// Конструкторы объектов
// Кроме создания новых объектов JavaScript предоставляет нам возможность создавать новые типы объектов с помощью конструкторов.
// Как правило, названия конструкторы в отличие от названий обычных функций начинаются с большой буквы.
{
  // конструктор типа Car
  function Car(mName, mYear) {
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function () {
      document.write(
        'Модель: ' + this.name + '  Год выпуска: ' + this.year + '<br/>'
      );
    };
  }
  // конструктор типа User
  function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function (car) {
      document.write(this.name + ' ведет машину ' + car.name + '<br/>');
    };
    this.displayInfo = function () {
      document.write('Имя: ' + this.name + '; возраст: ' + this.age + '<br/>');
    };
  }

  var tom = new User('Том', 26);
  tom.displayInfo();
  var bently = new Car('Бентли', 2004);
  tom.driveCar(bently);
}

// Оператор instanceof
// Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект.
{
  var tom = new User('Том', 26);

  var isUser = tom instanceof User;
  var isCar = tom instanceof Car;
  console.log(isUser); // true
  console.log(isCar); // false
}
