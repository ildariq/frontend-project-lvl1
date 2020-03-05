import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const answerCount = 3;

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

const generateQuestion = (game) => {
  for (let i = 0; i < answerCount; i += 1) {
    const questionAndCorrectAnswer = game();
    const question = questionAndCorrectAnswer[0];
    const correctAnswer = questionAndCorrectAnswer[1];
    const userAnswer = checkAnswer(question, correctAnswer);
    if (userAnswer !== true) {
      break;
    }
    if (i === answerCount - 1) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
    }
  }
};

export default (instruction, game) => {
  console.log(instruction);
  generateQuestion(game);
};
