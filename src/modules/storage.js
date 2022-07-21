const storeGameId = (gameId) => localStorage.setItem('gameId', JSON.stringify(gameId));

const getGameId = () => localStorage.getItem('gameId');

export { getGameId, storeGameId };
