AOS.init({duration: 1200});

const year = document.getElementById('fullYear');
year.innerHTML = new Date().getFullYear();

const navItems = document.querySelectorAll('.navigation__link');
const navCheckbox = document.getElementById('navi-toggle');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navCheckbox.checked = false;
  });
});