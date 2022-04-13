import { addNewScoreService, getAllScoresService } from './Service.js';

const btnRefresh = document.querySelector('#btnRefresh');
const container = document.querySelector('.scores-list');
const form = document.querySelector('form');

const render = async () => {
  container.innerHTML = 'fetching data...';
  const scores = await getAllScoresService().then((result) => result);
  let elements = '';
  if (scores.result.length === 0) {
    elements = '<li><p><strong>No data</strong></p></li>';
  } else {
    scores.result.forEach((score) => {
      elements += `<li><p>${score.user}: ${score.score}</p></li>`;
    });
  }
  container.innerHTML = elements;

  btnRefresh.addEventListener('click', () => {
    render();
  });
};

const addScore = async () => {
  const [name, score] = form.elements;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (name.value.trim() && score.value.trim()) {
      const data = { user: name.value.trim(), score: score.value.trim() };
      await addNewScoreService(data).then((result) => result);
      window.location.reload();
    }
  });
};

export { render, addScore };
