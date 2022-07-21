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
  return data.result.split(' ')[3];
};

// submit new game score
const submitScore = async (id, user, score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
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

export { createGame, submitScore, getScores };
