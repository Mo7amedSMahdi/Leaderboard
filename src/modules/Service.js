const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wEjyDFj1AY9plTjvNsub/scores';

const getAllScoresService = async () => {
  const result = await fetch(baseUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return result.json();
};

const addNewScoreService = async (game) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  return response.json();
};

export { getAllScoresService, addNewScoreService };
