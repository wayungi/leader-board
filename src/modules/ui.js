const userIcon = () => {
  const user = document.createElement('div');
  user.innerHTML = '<i class="fa-solid fa-user"></i>';
  return user;
};

const createNameScore = (name, score) => {
  const nameScoreDiv = document.createElement('div');

  const namePara = document.createElement('p');
  namePara.innerText = `${name}`;

  const scorePara = document.createElement('p');
  scorePara.innerText = `${score}`;

  nameScoreDiv.appendChild(namePara);
  nameScoreDiv.appendChild(scorePara);
  return nameScoreDiv;
};

const displayPlayer = (playerRecord) => {
  const { userIcon, nameScore, pageElement, rank } = playerRecord;
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');

  const rankDiv = document.createElement('div');
  rankDiv.classList.add('rank');
  rankDiv.innerText = rank;

  scoreContainer.appendChild(rankDiv);
  scoreContainer.appendChild(userIcon);
  scoreContainer.appendChild(nameScore);

  pageElement.appendChild(scoreContainer);

  return scoreContainer;
};

export {
  userIcon,
  createNameScore,
  displayPlayer,
};
