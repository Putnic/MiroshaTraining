// В JavaScript имеются следующие виды циклов:
// for
// for..in
// for..of
// while
// do..while

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// break
// continue

{
  // При этом можно опускать различные части объявления цикла:

  let i = 0;
  for (; i < 60; ) {
    console.log(i);
    i = i + 10;
  }
}

{
  // При необходимости можно использовать несколько счетчиков:
  for (let i = 1, j = 1; i < 5, j < 4; i++, j++) {
    console.log(i + j);
  }
  // 1 итерация: i=1, j=1; i + j = 2
  // 2 итерация: i=2, j=2; i + j = 4
  // 3 итерация: i=3, j=3; i + j = 6
}

{
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

{
  // Цикл for..in предназначен главным образом для перебора объектов.
  // Этот цикл перебирает все свойства объекта. Например:
  const person = { name: 'Tom', age: 37 };
  for (prop in person) {
    console.log(prop);
  }
}

{
  // Цикл for...of предназначен для перебора наборов данных.
  const website = 'METANIT.COM';
  for (ch of website) {
    console.log(ch);
  }
}
