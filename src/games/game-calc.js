import generateGame from '../index.js';
import generateRandomNum from '../utils.js';

const instruction = 'What is the result of the expression?';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = generateRandomNum(0, operators.length);
  return operators[index];
};

const calcNumsGame = () => {
  const randomNum1 = generateRandomNum();
  const randomNum2 = generateRandomNum();
  const operator = generateRandomOperator();
  const correctAnswer = (num1, num2, oper) => {
    switch (oper) {
      case ('+'):
        return num1 + num2;
      case ('-'):
        return num1 - num2;
      case ('*'):
        return num1 * num2;
      default:
        return false;
    }
  };
  const correctAnswerToString = String(correctAnswer(randomNum1, randomNum2, operator));
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  return [question, correctAnswerToString];
};

export default () => {
  generateGame(instruction, calcNumsGame);
};
