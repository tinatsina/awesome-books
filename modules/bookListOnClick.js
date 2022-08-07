import Booklibrary from './BookLibrary.js';
import getLocalStorage from './loadStorage.js';

const books = getLocalStorage();

export default function bookOnClick() {
  document.addEventListener('DOMContentLoaded', () => {
    const buttonRemove = document.querySelectorAll('.button-remove');

    buttonRemove.forEach((button) => {
      button.addEventListener('click', (e) => {
        const bookAuthor = e.target.previousElementSibling.innerText;
        const bookTitle = e.target.previousElementSibling.previousElementSibling.innerText;

        const y = new Booklibrary(books);
        y.remove(bookTitle, bookAuthor);
        e.target.parentElement.remove();
      });
    });
  });

  document.querySelector('form').addEventListener('submit', () => {
    const x = new Booklibrary(books);
    x.add(document.querySelector('.title').value, document.querySelector('.author').value);
  });
}