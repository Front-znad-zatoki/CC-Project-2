import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import render from '../utils/render';
import ModalWindow from './Modal/ModalWindow';

const handleGame = (chosenMode, callback) => {
  const section = document.querySelector('.section');
  const sectionWrapper = document.querySelector('.section__wrapper');
  sectionWrapper.innerHTML = '';
  sectionWrapper.appendChild(GameModeName(chosenMode));
  section.appendChild(RemainingTime(callback));
};

const displayAnswers = (
  answers,
  correctAnswer,
  humanPlayer,
  callback,
) => {
  const answersWrapper = document.querySelector('.answers');
  const sectionWrapper = document.querySelector('.section__wrapper');
  if (answersWrapper) answersWrapper.remove();
  sectionWrapper.appendChild(
    Answers(answers, correctAnswer, humanPlayer, callback),
  );
};

const displayModal = (
  game,
  humanPlayer,
  computerPlayer,
  callback,
) => {
  render(
    '#swquiz-app',
    ModalWindow(game, humanPlayer, computerPlayer, callback),
  );
};

export { handleGame, displayAnswers, displayModal };
