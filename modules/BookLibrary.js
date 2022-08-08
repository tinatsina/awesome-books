export default class Booklibrary {
  constructor(books) {
    this.books = books;
  }

  add(addauthor, addtitle) {
    const bookauthor = addauthor;
    const booktitle = addtitle;
    const { books } = this;

    const book = [{ booktitle, bookauthor }];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  remove(removeAuthor, removeTitle) {
    const bookAuthor = removeTitle;
    const bookTitle = removeAuthor;
    const { books } = this;

    for (let i = 0; i < books.length; i += 1) {
      if (books[i][0].booktitle === bookTitle && books[i][0].bookauthor === bookAuthor) {
        books.splice(i, 1);
      }
    }
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(books));
  }
}