import './styles.css';
import gsap from 'gsap';

const isSideBarOpen = JSON.parse(window.localStorage.getItem('isOpen'));
const burgerRef = document.querySelector('.burger');
const sideBarRef = document.querySelector('.side-bar');
const closeButtonRef = sideBarRef.querySelector('.x-mark');
const sideBarLinkRef = sideBarRef.querySelectorAll('.side-bar__link');

const openSideBar = () => {
  //   sideBarRef.classList.add('active');

  localStorage.setItem('isOpen', true);

  gsap.set(sideBarLinkRef, { x: -40, opacity: 0 });
  const timeLine = gsap.timeline();
  timeLine.to(sideBarRef, { x: '0%', duration: 0.6 }).to(sideBarLinkRef, {
    x: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.2,
    ease: 'elastic.out(1 , 0.5)',
  });
};

const closeSideBar = () => {
  localStorage.setItem('isOpen', false);

  const timeLine = gsap.timeline();
  timeLine
    .to(sideBarLinkRef, {
      y: 25,
      opacity: 0,
      duration: 0.4,
      stagger: -0.1,
      //   ease: 'elastic.in(1 , 0.5)',
    })
    .to(sideBarRef, { x: '-100%', duration: 0.4 }, '-=0.2');
};

burgerRef.addEventListener('click', openSideBar);
closeButtonRef.addEventListener('click', closeSideBar);

if (isSideBarOpen) {
  openSideBar();
}
