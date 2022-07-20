const nameScore = [
  { name: 'Francis', score: 100 },
  { name: 'James', score: 93 },
  { name: 'Peter', score: 97 },
  { name: 'Bosco', score: 80 },
  { name: 'Okla', score: 87 },
  { name: 'Mich', score: 71 },
  { name: 'Wayungi', score: 75 },
  { name: 'Cekcan', score: 89 },
  { name: 'Omara', score: 45 },
  { name: 'Owino', score: 74 },
  { name: 'Karuhanga', score: 45 },
  { name: 'Galikuki', score: 74 },
];

const getNameScores = () => nameScore;

const createGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Tuku kweyo',
      }),
    }
  );
  const result = await response.text();
  return result;
};

export { getNameScores, createGame };
