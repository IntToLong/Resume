import './style.css';
import { createStars } from './createStars';
import {toggleMode} from './utils';


const toggleButton = document.querySelector('#theme');

createStars();
toggleButton?.addEventListener('click', toggleMode);