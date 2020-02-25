import { generateRandomNum, generateQuestion, checkAnswer } from '../index.js';

const isPrimeGame = () => {
  const randomNum = generateRandomNum(2, 101);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (randomNum % i === 0) return false;
    }
    return true;
  };
  const correctAnswer = (isPrime(randomNum) === true) ? 'yes' : 'no';
  return checkAnswer(randomNum, correctAnswer);
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  generateQuestion(isPrimeGame);
};
