const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 menu.textContent = open ? 'Close' : 'Menu';
 nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true'){
  menu.click(); menu.focus();
 }
});
