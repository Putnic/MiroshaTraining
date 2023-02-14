{
  let myVar = 89;
  if (myVar) {
    console.log(`Переменная myVar имеет значение: ${myVar}`);
  }
}

{
  let myVar;
  if (myVar) {
    console.log(`Переменная myVar имеет значение: ${myVar}`);
  }

  if (myVar !== undefined && myVar !== null) {
    console.log(`Переменная myVar имеет значение: ${myVar}`);
  }
}

{
  const income = 50;
  if (income > 50) {
    console.log('Доход больше 50');
  } else if (income === 50) {
    console.log('Доход равен 50');
  } else {
    console.log('Доход меньше 50');
  }
}

// Конструкция switch..case
{
  const income = 300;
  switch (income) {
    case 100:
      console.log('Доход равен 100');
      break;
    case 200:
      console.log('Доход равен 200');
      break;
    case 300:
      console.log('Доход равен 300');
      break;
    default:
      console.log('Доход неизвестной величины');
      break;
  }
}
