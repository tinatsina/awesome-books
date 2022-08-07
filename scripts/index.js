import { DateTime } from '../modules/luxon.js';
import getLocalStorage from '../modules/loadStorage.js';
import bookList from '../modules/bookList.js';
import switchPage from '../modules/pageChange.js';
import bookOnClick from '../modules/bookListOnClick.js';

console.log(DateTime.now());
bookList(getLocalStorage());
switchPage();
bookOnClick();