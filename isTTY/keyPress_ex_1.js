import process from 'node:process';

const stdin = process.openStdin();

stdin.resume();
stdin.on('data', function (keydata) {
  process.stdout.write('output: ' + keydata);
});
