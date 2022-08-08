export default function bookList(books) {
  document.addEventListener('DOMContentLoaded', () => {
    books.forEach((book) => {
      const bookList = document.querySelector('.books-card');

      bookList.innerHTML += `
      <div class="books-card-flex">
      <h3 class="book-title">${book[0].booktitle}</h3>
      <p class="book-about">${book[0].bookauthor}</p>
      <button type="button" class="button-remove">Remove</button>
      </div>
      `;
    });
  });
}