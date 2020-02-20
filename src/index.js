import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const correctAnswer = 'yes';
const incorrectAnswer = 'no';


const createRandomNum = () => {
  const randomNum = Math.ceil(Math.random() * 100);
  const isEven = (randomNum % 2 === 0) ? correctAnswer : incorrectAnswer;
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== isEven) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEven}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};


export default () => {
  console.log(`Answer "${correctAnswer}" if the number is even, otherwise answer "${incorrectAnswer}".`);
  const answerCount = 3;
  for (let i = 0; i < answerCount; i += 1) {
    const result = createRandomNum();
    if (result !== true) {
      break;
    }
    if (i === answerCount - 1) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    }
  }
};
