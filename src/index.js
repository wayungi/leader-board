import './style.css';
import { submitScore, getScores } from './modules/data.js';
import { userIcon, createNameScore, displayPlayer, userIcon } from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');
const form = document.getElementById('scores-form');

// Add the game scores to the browser page
refresh.addEventListener('click', async () => {
  scoreDisplay.innerHTML = '';
  const scores = await getScores();
  const userIcon = userIcon();
  let count = 0;
  scores.forEach((gameObj) => {
    count += 1;
    const nameScore = createNameScore(gameObj.user, gameObj.score)
    displayPlayer({ userIcon, nameScore, scoreDisplay, count });
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
