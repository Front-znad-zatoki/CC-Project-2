import elementFactory from '../utils/elementFactory';
import { PEOPLE, VEHICLES, STARSHIPS } from '../constants';

const repeatableText =
  'You have 2 minutes to answer as many questions as you can. During the game you should select';

const rulesTexts = {
  [PEOPLE]:
    'what Star Wars character do you see on the picture (e.g. Jar Jar Binks).',
  [VEHICLES]:
    'which Star Wars vehicle do you see on the picture (e.g. Sith Speeder).',
  [STARSHIPS]:
    'which Star Wars starship do you see on the picture (e.g. TIE Advanced x1).',
};

const ModeRules = (mode) => {
  const rulesTextElement = elementFactory(
    'div',
    { className: 'rules-text' },
    `${repeatableText} ${rulesTexts[mode] ?? rulesTexts.people}`,
  );
  const rulesIcon = elementFactory('span', {
    className: 'rules-icon fa fa-graduation-cap',
  });

  const rulesHeader = elementFactory(
    'header',
    { className: 'rules-header' },
    rulesIcon,
    'Mode Rules',
  );

  const rulesElement = elementFactory(
    'div',
    { className: 'rules' },
    rulesHeader,
    rulesTextElement,
  );

  return rulesElement;
};

export default ModeRules;
