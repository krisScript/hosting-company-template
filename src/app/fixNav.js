import logoIcon from '../assets/logo/logo-white.svg';
const fixNav = () => {
  const navContainer = document.querySelector('.header');
  const fixNav = () => {
    const landingSection = document.querySelector('.landing--section');
    const topOfLanding = landingSection.offsetTop;
    const logo = document.querySelector('.header__logo');
    const windowY = window.scrollY;
    if (windowY >= topOfLanding + 500) {
      logo.firstElementChild.src = logoIcon;
      window.removeEventListener('scroll', fixNav);
      navContainer.classList.add('header--fixed');
      document.body.style.setProperty('--nav', '#ffffff');
    }
  };
  window.addEventListener('scroll', fixNav);
};
export default fixNav;
