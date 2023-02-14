const people = ['Tom', 'Alice', 'Sam'];
console.log(people[7]); // undefined

{
  const people = ['Tom', 'Alice', 'Sam'];
  console.log(people[7]); // undefined - в массиве только три элемента
  people[7] = 'Bob';
  console.log(people[7]); // Bob
}

{
  const numbers1 = [0, 1, 2, 3, 4, 5]; // одномерный массив
  const numbers2 = [
    [0, 1, 2],
    [3, 4, 5],
  ]; // двумерный массив

  const people = [
    ['Tom', 25, false],
    ['Bill', 38, true],
    ['Alice', 21, false],
  ];

  console.log(people[0]); // ["Tom", 25, false]
  console.log(people[1]); // ["Bill", 38, true]
}
