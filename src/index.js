import './style.css';
import { submitScore, createGame, getScores } from './modules/data.js';
import displayNameScore from './modules/ui.js';
import { getGameId, storeGameId } from './modules/storage.js';

const scoreDisplay = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');
const form = document.getElementById('scores-form');

// let gameId = '';

// document.addEventListener('DOMContentLoaded', async () => {
//   if (getGameId()) {
//     gameId = getGameId();
//     return;
//   }
//   gameId = await createGame();
//   storeGameId(gameId);
// });

// Add the game scores to the browser page
refresh.addEventListener('click', async () => {
  scoreDisplay.innerHTML = '';
  const scores = await getScores();
  scores.forEach((gameObj) => displayNameScore(gameObj.user, gameObj.score, scoreDisplay));
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formElements = form.elements;
  const userName = formElements.username.value;
  const score = formElements.score.value;
  formElements.score.value = '';
  formElements.username.value = '';

  if (!userName.trim() || !score.trim()) return;
  displayNameScore(userName, score, scoreDisplay);
  submitScore(userName, score);
});
