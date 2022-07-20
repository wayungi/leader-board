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
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: 'Tuku kweyo',
      }),
    }
  );
  const data = await response.json();
  console.log(data.result.split(' ')[3]); 
  return data.result.split(' ')[3];
};

// submit new game score
const submitScore = async (id, user, score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: {
        user,
        score,
      },
    }
  );
};

const getScores = async (id) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
    }
  );
  const data = await response.json();
  console.log(data.result);
  return data.result;
};

export { getNameScores, createGame, submitScore, getScores };
