// index.js
import { createButton } from './components/button/button.js';

document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('div');
    const submitButton = createButton('submit', 'Submit Button');
    div.appendChild(submitButton);

    submitButton.addEventListener('click', () => {
        if (submitButton.classList.contains('button-submit')) {
            submitButton.classList.remove('button-submit');
            submitButton.classList.add('button-disable');
            submitButton.disabled = true;
        } else {
            submitButton.classList.remove('button-disable');
            submitButton.classList.add('button-submit');
            submitButton.disabled = false;
        }
    });
});
