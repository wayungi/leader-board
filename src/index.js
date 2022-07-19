import './style.css';
import getNameScores from './modules/data.js';
import displayNameScore from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');

getNameScores().forEach((person) => {
  displayNameScore(person.name, person.score, scoreDisplay);
});
