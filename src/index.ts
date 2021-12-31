import * as readline from 'readline';
import * as day1 from './1/day1';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

askQuestion();

function askQuestion() {
  rl.question('What day do you want to run? ', (answer) => {
    switch (answer.toLowerCase()) {
      case '1':
        console.log('Running day 1 of advent of code!\n');
        day1.run();
        break;
      default:
        console.log('This day is not implemented yet :(\n');
    }
    rl.close();
  });
}
