import './style.css';
import { getNameScores, createGame } from './modules/data.js';
import displayNameScore from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');
let gameId = '';

document.addEventListener('DOMContentLoaded', async () => {
  gameId = await createGame();
});



getNameScores().forEach((person) => {
  displayNameScore(person.name, person.score, scoreDisplay);
});
