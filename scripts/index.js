import getLocalStorage from '../modules/loadStorage.js';
import bookList from '../modules/bookList.js';
import switchPage from '../modules/pageChange.js';
import bookOnClick from '../modules/bookListOnClick.js';

bookList(getLocalStorage());
switchPage();
bookOnClick();

console.log(getLocalStorage());