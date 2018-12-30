const menuBtn = document.querySelector('.header__nav--mobile--btn');
let menuState;
const toggleMenu = () => {
  console.log('nani')
  if (menuState) {
    menuBtn.classList.remove('close');
    // Set Menu State
    menuState = false;
  } else if (!menuState) {
    menuBtn.classList.add('close');
    // Set Menu State
    menuState = true;
  }
};

const menu = () => {
  const menuMobileButton = document.querySelector('.header__nav--mobile--btn');
  menuMobileButton.addEventListener('click', e => {
    const menu = document.querySelector('.nav--mobile');
    const menuActiveClass = 'nav--mobile--active';
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
    toggleMenu();
    menu.classList.toggle(menuActiveClass)
  });
};
export default menu;
