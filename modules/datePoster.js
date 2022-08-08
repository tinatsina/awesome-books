export default function datePoster(date) {
  document.addEventListener('DOMContentLoaded', () => {
    const dateLuxon = document.querySelector('.date-time-luxon');

    dateLuxon.innerHTML = date;
  });
}