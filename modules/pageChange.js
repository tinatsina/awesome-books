export default function switchPage() {
  const addNewPage = document.querySelector('.book-adder-section');
  const addListPage = document.querySelector('.book-list-section');
  const contactPage = document.querySelector('.contact-section');

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.display-add-new').addEventListener('click', () => {
      addListPage.classList.add('active');
      addNewPage.classList.add('active');
      contactPage.classList.remove('active');
    });

    document.querySelector('.display-list').addEventListener('click', () => {
      contactPage.classList.remove('active');
      addListPage.classList.remove('active');
      addNewPage.classList.remove('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.display-contact').addEventListener('click', () => {
      contactPage.classList.add('active');
      addListPage.classList.add('active');
      addNewPage.classList.remove('active');
    });
  });
}