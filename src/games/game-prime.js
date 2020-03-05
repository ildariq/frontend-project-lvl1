import generateGame from '../index.js';
import generateRandomNum from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPrimeGame = () => {
  const randomNum = generateRandomNum(2, 101);
  const correctAnswer = (isPrime(randomNum) === true) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export default () => {
  generateGame(instruction, isPrimeGame);
};
