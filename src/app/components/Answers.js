import isAnswerCorrect from '../logic/isAnswerCorrect';
import elementFactory from '../utils/elementFactory';
import validateString from '../utils/validateString';

const createAnswerElement = (
  answerText,
  isCorrect,
  humanPlayer,
  callback,
) => {
  const answerElement = elementFactory(
    'button',
    {
      className: 'button button__answer',
    },
    answerText,
  );
  answerElement.addEventListener('click', () => {
    answerElement.classList.add(
      `button__answer--${isCorrect ? 'success' : 'fail'}`,
    );
    const buttonsToDisable = document.querySelectorAll(
      '.button__answer',
    );

    buttonsToDisable.forEach((button) => {
      button.setAttribute('disabled', true);
    });
    setTimeout(
      () => humanPlayer.getAnswer(answerText, isCorrect, callback),
      500,
    );
  });
  return answerElement;
};

const Answers = (answers, correctAnswer, humanPlayer, callback) => {
  const answersElement = elementFactory('div', {
    className: 'answers',
  });
  answers.forEach((answerText) => {
    if (!validateString(answerText)) {
      throw new Error('Not a valid string');
    }
    const isCorrect = isAnswerCorrect(answerText, correctAnswer);
    const answerElement = createAnswerElement(
      answerText,
      isCorrect,
      answersElement,
      humanPlayer,
      callback,
    );
    answersElement.appendChild(answerElement);
  });

  return answersElement;
};

export default Answers;
