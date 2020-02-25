import { generateRandomNum, generateQuestion, checkAnswer } from '../index.js';

const isEvenGame = () => {
  const randomNum = generateRandomNum();
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return checkAnswer(randomNum, correctAnswer);
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  generateQuestion(isEvenGame);
};
