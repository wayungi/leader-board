const userIcon = () => {
  const user = document.createElement('div');
  user.innerHTML = '<i class="fa-solid fa-user fa-3x"></i>';
  return user;
};

const createNameScore = (user, score) => {
  const nameScoreDiv = document.createElement('div');
  nameScoreDiv.classList.add('name-score');
  const namePara = document.createElement('p');
  namePara.innerText = `${user}`;
  const scorePara = document.createElement('p');
  scorePara.innerText = `${score}`;
  nameScoreDiv.appendChild(namePara);
  nameScoreDiv.appendChild(scorePara);
  return nameScoreDiv;
};

const displayPlayer = (record) => {
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');
  const rankDiv = document.createElement('div');
  rankDiv.classList.add('rank');
  rankDiv.innerText = record.rank;
  scoreContainer.appendChild(rankDiv);
  scoreContainer.append(record.userImage);
  scoreContainer.appendChild(record.nameScore);
  record.pageElement.appendChild(scoreContainer);
  return scoreContainer;
};

export {
  userIcon,
  createNameScore,
  displayPlayer,
};
