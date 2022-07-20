import './style.css';
import { getNameScores, createGame , getScores} from './modules/data.js';
import displayNameScore from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');

let gameId = '';

document.addEventListener('DOMContentLoaded', async () => {
  gameId = await createGame();
});

// Add the game scores to the browser page
refresh.addEventListener('click', async () => {
  const scores = await getScores();
  scores.forEach((gameObj) => displayNameScore(gameObj.name, gameObj.score, scoreDisplay));
});
