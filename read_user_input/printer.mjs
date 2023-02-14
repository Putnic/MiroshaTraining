#!/bin/env node
import fs from 'node:fs';
import { stdin } from 'process';

import { logger } from './logger.mjs';

// node logger.js | node printer.js
// node ./logger.js | node ./printer.js

logger();

fs.open('./logs.txt', 'w', (err, fd) => {
  if (err) throw Error(err.message);
  stdin.on('data', (data) => {
    fs.write(fd, data.toString() + '\n', (err) => {
      if (err) throw Error(err.message);
    });
  });
});


{
  // async function loadModule() {
  //   const {
  //     default: defaultComponent,
  //     component1
  //   } = await import('./path-to-module');
  //   // ...
  // }

  // loadModule();
}