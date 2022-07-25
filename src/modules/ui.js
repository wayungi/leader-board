const userIcon = () => {
  const user = document.createElement('div');
  user.innerHTML = '<i class="fa-solid fa-user"></i>';
  return user;
};

const nameScoreDiv = (name, score) => {
  const nameScoreDiv = document.createElement('div');

  const namePara = document.createElement('p');
  namePara.innerText = `${name}`;

  const scorePara = document.createElement('p');
  scorePara.innerText = `${score}`;

  nameScoreDiv.appendChild(namePara);
  nameScoreDiv.appendChild(scorePara);
  return nameScoreDiv;
};





export default displayNameScore;
