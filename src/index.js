import './styles/style.css';
import { submitScore, getScores } from './modules/data.js';
import { userIcon, createNameScore, displayPlayer } from './modules/ui.js';

const scoreDisplay = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');
const form = document.getElementById('scores-form');
let count = 0;

// Add the game scores to the browser page
refresh.addEventListener('click', async () => {
  scoreDisplay.innerHTML = '';
  const scores = await getScores();
  let count = 0;
  scores.forEach((data) => {
    count += 1;
    displayPlayer({
      rank: count,
      userImage: userIcon(),
      nameScore: createNameScore(data.user, data.score),
      pageElement: scoreDisplay,
    });
  });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formElements = form.elements;
  const userName = formElements.username.value;
  const score = formElements.score.value;
  formElements.score.value = '';
  formElements.username.value = '';

  if (!userName.trim() || !score.trim()) return;
  const userPhoto = userIcon();
  const nameScore = createNameScore(userName, score);
  count += 1;
  displayPlayer({ userPhoto, nameScore, scoreDisplay, count });

  submitScore(userName, score);
});

window.addEventListener('DOMContentLoaded', async () => {
  scoreDisplay.innerHTML = '';
  const scores = await getScores();
  let count = 0;
  scores.forEach((data) => {
    count += 1;
    displayPlayer({
      rank: count,
      userImage: userIcon(),
      nameScore: createNameScore(data.user, data.score),
      pageElement: scoreDisplay,
    });
  });
});