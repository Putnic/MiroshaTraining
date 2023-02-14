// Node.js program to demonstrate the
// readStream.isTTY property

// Importing dgram module
import { Buffer } from 'node:buffer';
import dgram from 'node:dgram';

// Creating and initializing client
// and server socket
var client = dgram.createSocket('udp4');
var server = dgram.createSocket('udp4');

// Handling the message event
server
  .on('message', function (msg) {
    // Creating and initializing a
    // ReadStream object
    let ReadStream = process.stdin;

    // Checking if it is instance of TTY
    // or not by using isTTY() method
    const sts = ReadStream.isTTY;

    // Displaying the result
    if (sts) {
      process.stdout.write(msg + 'an instant of TTY' + '\n');
    } else {
      process.stdout.write(msg + 'not an instant of TTY' + '\n');
    }

    // Exiting process
    process.exit();
  })

  // Binding server with port
  .bind(1234, () => {});

// Client sending message to server
const message = Buffer.from('It is ');

client.send('It is ', 1234, 'localhost', (err) => {
  client.close();
});
