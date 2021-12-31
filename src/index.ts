import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What day do you want to run? ', (answer) => {
  switch(answer.toLowerCase()) {
    case '1':
      console.log('Running day 1 of advent of code!');
      break;
    default:
      console.log('This day is not implemented yet :(');
  }
  rl.close();
});