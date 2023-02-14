// Node.js program to demonstrate the
// readStream.isTTY property

// Creating and initializing a
// ReadStream object
let ReadStream = process.stdin;

// Checking if it is instance of TTY
// or not by using isTTY() method
const sts = ReadStream.isTTY;

// Displaying the result
if (sts) {
  console.log('It is an instant of TTY');
} else {
  console.log('it is not an instant of TTY');
}
