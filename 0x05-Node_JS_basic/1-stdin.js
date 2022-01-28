process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.resume();

process.stdin.on('readable', () => {
  const n = process.stdin.read();
  process.stdout.write(`Your name is: ${n}`);
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
