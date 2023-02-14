// month.js (ES-модуль)
// https://habr.com/ru/company/ruvds/blog/556744/
// node ./month.js "2022-04-01"
const dateString = process.argv[2] ?? null;

if (dateString === null) {
  console.log('Please indicate date argument');
} else {
  (async function () {
    const { monthFromDate } = await import('./month-from-date.js');
    console.log(monthFromDate(dateString));
  })();
}
