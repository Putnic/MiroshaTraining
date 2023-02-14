import process from 'node:process';
import readline from 'node:readline';

console.log('Press any key');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl == true && key.name == 'c') {
    process.exit();
  }
  console.log(`str: ${str}`);
  console.log(str);
  console.log(`key: ${key}`);
  console.dir(key);
});

{
  process.stdin.on('keypress', (chunk, key) => {
    if (key && key.name == 'q') process.exit();
  });
}
