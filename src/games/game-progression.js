import { generateRandomNum, generateQuestion, checkAnswer } from '../index.js';

const progressionGame = () => {
  const progressionStep = generateRandomNum(1, 11);
  const hiddenElemPosition = generateRandomNum(1, 9);
  const progressionLength = 10;
  const progression = [];
  const startNum = generateRandomNum();
  progression.push(startNum);
  let nextNum = startNum + progressionStep;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(nextNum);
    nextNum += progressionStep;
  }
  const correctAnswer = String(progression[hiddenElemPosition]);
  progression[hiddenElemPosition] = '..';
  const question = progression.join(' ');
  return checkAnswer(question, correctAnswer);
};

export default () => {
  console.log('What number is missing in the progression?');
  generateQuestion(progressionGame);
};
