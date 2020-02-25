import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const answerCount = 3;

const generateRandomNum = (min = 1, max = 100) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

const generateQuestion = (game) => {
  for (let i = 0; i < answerCount; i += 1) {
    const answerResult = game();
    if (answerResult !== true) {
      break;
    }
    if (i === answerCount - 1) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    }
  }
};

const checkAnswer = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

export { generateRandomNum, generateQuestion, checkAnswer };
