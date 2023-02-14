import { stderr, stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import create from 'prompt-sync';
// import pkg from 'prompt-sync';
// const { create } = pkg;

// The ctrl + c sends a signal to our running Node.js program
// called SIGKILL

// stdin.pipe(stdout);
// stdin.on('data', (data) => {
//   data = data.toString().toUpperCase();
//   stdout.write(data + '\n');
// });

const readline = createInterface({
  input: stdin,
  output: stdout,
});
readline.close();

{
  function ask(question) {
    readline.question(question, (answer) => {
      if (answer === 'q') {
        stderr.write('error! some error occurred\n');
        process.exit(1);
      }
      readline.write(`The answer received:  ${answer}\n`);
      readline.close();
      // ask(question);
    });
  }

  // ask('What is your name: ');
}

{
  const readLineAsync = (msg) => {
    return new Promise((resolve) => {
      readline.question(msg, (userRes) => {
        resolve(userRes);
      });
    });
  };

  const startApp = async () => {
    const userRes = await readLineAsync('How are you? ');
    readline.close();
    console.log(`Your response was: ${userRes} — Thanks!`);
  };

  // startApp();
}

{
  // const prompt = create();
  const prompt = create({ sigint: true });

  const name = prompt('What is your name? ');
  console.log(`Hey there ${name}`);

  const num = prompt('Enter a number: ');
  console.log('Your number + 4 =');
  console.log(Number(num) + 4);
}
