import './styles/style.css';
import { submitScore, getScores } from './modules/data.js';
import { userIcon, createNameScore, displayPlayer } from './modules/ui.js';

const pageElement = document.getElementById('scores-list');
const refresh = document.getElementById('refresh-btn');
const form = document.getElementById('scores-form');
const formSection = document.getElementById('form-section');
const modalClose = document.getElementById('close-btn');
const addScoreBtn = document.getElementById('add-score-btn');
let count = 0;

// Add the game scores to the browser page
refresh.addEventListener('click', async () => {
  pageElement.innerHTML = '';
  const scores = await getScores();
  scores.forEach((data) => {
    count += 1;
    displayPlayer({
      rank: count,
      userImage: userIcon(),
      nameScore: createNameScore(data.user, data.score),
      pageElement,
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
  displayPlayer({
    rank: count,
    userImage: userPhoto,
    nameScore,
    pageElement,
  });

  formSection.classList.add('hide');

  submitScore(userName, score);
});

modalClose.addEventListener('click', () => {
  formSection.classList.add('hide');
});

addScoreBtn.addEventListener('click', () => {
  formSection.classList.remove('hide');
});

window.addEventListener('DOMContentLoaded', async () => {
  pageElement.innerHTML = '';
  const scores = await getScores();
  scores.forEach((data) => {
    count += 1;
    displayPlayer({
      rank: count,
      userImage: userIcon(),
      nameScore: createNameScore(data.user, data.score),
      pageElement,
    });
  });
});