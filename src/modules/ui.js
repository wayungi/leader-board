const userIcon = () => {
  const user = document.createElement('div');
  user.innerHTML = '<i class="fa-solid fa-user"></i>';
  return user;
};

const displayNameScore = (name, score, pageElement) => {
  const nameScoreParagraph = document.createElement('p');
  nameScoreParagraph.innerText = `${name}:${score}`;
  pageElement.appendChild(nameScoreParagraph);
  return true;
};

export default displayNameScore;
