import Display from './modules/interacts.js';
import { DateTime } from './modules/luxon.js';

const booksList = document.querySelector('.books-list');
const addBooks = document.querySelector('.add-book');
const contactInfo = document.querySelector('.contact-info');
const books = document.querySelector('.books');
const forms = document.querySelector('.form');
const contact = document.querySelector('.contact');
const tag = document.querySelector('h1');
const showCurrentTime = document.querySelector('.current-time');

books.style.display = 'none';
forms.style.display = 'block';
contact.style.display = 'none';
tag.style.display = 'none';

booksList.addEventListener('click', () => {
  forms.style.display = 'none';
  contact.style.display = 'none';
  books.style.display = 'block';
  tag.style.display = 'block';
});
addBooks.addEventListener('click', () => {
  forms.style.display = 'block';
  books.style.display = 'none';
  contact.style.display = 'none';
  tag.style.display = 'none';
});
contactInfo.addEventListener('click', () => {
  forms.style.display = 'none';
  books.style.display = 'none';
  tag.style.display = 'none';
  contact.style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
  Display.displayBooks();
});
const form = document.querySelector('.form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  Display.addBook();
  form.reset();
});

const showDateTime = () => {
  const time = DateTime.now();
  const curTime = time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

  showCurrentTime.textContent = curTime;
};
setInterval(showDateTime, 1000);
