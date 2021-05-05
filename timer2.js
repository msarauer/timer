const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');


// for (const time of args) {
//   if (time > 0) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, time * 1000)
//   }
// }

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key > 0 && key < 10) {
    // console.log(`setting timer for ${key} seconds...`)
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
  }
});