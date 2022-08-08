import { DateTime } from '../modules/luxon.js';
import getLocalStorage from '../modules/loadStorage.js';
import bookList from '../modules/bookList.js';
import switchPage from '../modules/pageChange.js';
import bookOnClick from '../modules/bookListOnClick.js';
import datePoster from '../modules/datePoster.js';

datePoster(DateTime.now().toLocaleString(DateTime.DATETIME_MED));
bookList(getLocalStorage());
switchPage();
bookOnClick();