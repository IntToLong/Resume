import './style.css';
import { createStars } from './createStars';
import { toggleMode } from './utils';

const toggleButton = document.querySelector('#theme');

const theme = localStorage.getItem('theme');
createStars();
toggleButton?.addEventListener('click', toggleMode);

if (theme) {
	document.documentElement.classList.add('dark');
}
