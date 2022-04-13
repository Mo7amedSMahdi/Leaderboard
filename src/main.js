import './css/main.css';
import { render, addScore } from './modules/functionalities.js';

const renderPage = async () => {
  await render();
  await addScore();
};

renderPage();
