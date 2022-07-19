const displayNameScore = (name, score, pageElement) => {
  const nameScoreParagraph = document.createElement('p');
  nameScoreParagraph.innerText = `${name}:${score}`;
  pageElement.appendChild(nameScoreParagraph);
  return true;
};

export default displayNameScore;
