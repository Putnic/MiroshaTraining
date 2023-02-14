{
  // определение функции
  function hello() {
    console.log('Hello from Metanit.com');
  }
  // передача константе message ссылки на функцию hello
  const message = hello;
  message(); // вызываем функцию, ссылка на которую хранится в константе message
}

{
  function goodMorning() {
    console.log('Доброе утро');
  }
  function goodEvening() {
    console.log('Добрый вечер');
  }
  let message = goodMorning; // присваиваем переменной message функцию goodMorning
  message(); // Доброе утро
  message = goodEvening; // меняем функцию в переменной message
  message(); // Добрый вечер
}

{
  // Анонимные функции
  let message = function () {
    console.log('Hello JavaScript');
  };
  message();
}
