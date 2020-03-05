import generateGame from '../index.js';
import generateRandomNum from '../utils.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const randomNum = generateRandomNum();
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => {
  generateGame(instruction, isEvenGame);
};
