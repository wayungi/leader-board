const storeGameId = (gameId) =>
  localStorage.setItem('gameId', JSON.stringify(gameId));

const getGameId = () => localStorage.getItem('gameId');

// const idExists = () => localStorage.getItem('gameId')

export { getGameId, storeGameId };
