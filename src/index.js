import './style.css';
import { getNameScores, createGame } from './modules/data.js';
import displayNameScore from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');
c

getNameScores().forEach((person) => {
  displayNameScore(person.name, person.score, scoreDisplay);
});
