import { generateRandomNum, generateQuestion, checkAnswer } from '../index.js';

const gcdGame = () => {
  const randomNum1 = generateRandomNum();
  const randomNum2 = generateRandomNum();
  const question = `${randomNum1} ${randomNum2}`;
  const findRemainder = (greater, smallest) => greater % smallest;
  const findGcd = (greater, smallest) => {
    let greaterNum = greater;
    let smallestNum = smallest;
    let remainder = findRemainder(greaterNum, smallestNum);
    if (remainder === 0) {
      return smallestNum;
    }
    while (remainder > 0) {
      greaterNum = smallestNum;
      smallestNum = remainder;
      remainder = findRemainder(greaterNum, smallestNum);
    }
    return smallestNum;
  };
  const correctAnswer = (num1, num2) => {
    if (num1 > num2) {
      return findGcd(num1, num2);
    }
    if (num1 < num2) {
      return findGcd(num2, num1);
    }
    return num1;
  };
  const correctAnswerToString = String(correctAnswer(randomNum1, randomNum2));

  return checkAnswer(question, correctAnswerToString);
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  generateQuestion(gcdGame);
};
