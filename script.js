'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnscrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const header1 = document.querySelector('.header');
const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.body);
const allSection = document.querySelectorAll('.section');
// console.log(allSection);
const header = document.querySelector('.header');

document.getElementById('selection--1');

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

const mess = document.createElement('div'); //creeaza elementul DOM si il salveaaza in mess, inca nu se afla pagina(reperezinta DOM element)
mess.classList.add('cookie-message'); //creeam elementul si adaugam css-ul cookie-message
mess.textContent = 'hau bau mniau'; //setam textul
mess.innerHTML =
  'hau mniau <button class="btn btn--close-cookie">Got it!</button>'; //creeam butonul
header.prepend(mess); //ia mess ca si primul 'copil' din header (append(mess) pune ca si ultimul 'copil si il afiseaza in josul paginii)
// header.append(mess); //afiseaza o data deoarece elementul DOM nu se poate multiplica, e unic
// header.prepend(mess.cloneNode(true)); //cloneaza obiectul DOM
// header.before(mess) //afiseaza inainte de header
// header.after(mess)//afiseaza dupa header
document
  .querySelector('.btn--close-cookie') //selectam butonul pe care l-am creat
  .addEventListener('click', function () {
    mess.remove(); //sterge obiectul DOM
    // mess.parentElement.removeChild(mess);
  });

//styles
mess.style.backgroundColor = '#123343';
mess.style.width = '120%';
// console.log(mess.style.height); //nu afiseaza nimic deoarece nu am atribut nimic noi 'one line style'
// console.log(mess.style.backgroundColor); //o sa afiseaza RGB-ul pe care l-am setat
// console.log(getComputedStyle(mess).color); //obtinem informatiile din CSS, putem obtine informatii sin din afara CSS-ului, de ex heuight, browserul calculeaza inaltimea automat si o poate afisa
mess.style.height = //setam inaltimea adaugand inca 30 de pixeli la ea
  Number.parseFloat(getComputedStyle(mess).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered'); //selectam un obeict din .rooot din CSS, acesta are o importanta globala in afisarea site-ului, ca sa aibe culoarea orange-red, pe scrut schimbam proprietatea obiextului --color-primary

//Atribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); //default properties
// console.log(logo.src);
// console.log(logo.className); //numele clasei din care face parte
// logo.alt = 'Beautiful'; //schimbare de atribut
// console.log(logo);
// console.log(logo.src); //afiseaza locul unde e imaginea. abs value
// console.log(logo.getAttribute('src')); //afiseaza sursa imaginii. relative value

// const link = document.querySelector('.twitter-link'); //linkul de la twitter
// console.log(link.href); //ambele sunt abs
// console.log(link.getAttribute('href')); //ambele sun abs

//data atributes
// console.log(logo.dataset.versionNumber);
// //classes
// logo.classList.add('c', 'j');
// logo.classList.remove('j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//scrolling
btnscrollto.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect()); //ia coordonatele dintre buton si susul susul ferestrei
  console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight, //lungikmea si latimea ferestrei
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); //primul argument este left position si al doilea top position, daca apasam pe buton de duce la section 1, top-ul este distanta partii de sus pana la inceputul sectiunii 1 (current position+current scroll)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' }); //folosita numai pentru browserle moderne(nu mqi trebuie calcule)
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); //obtin linkul 'section--1'
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//
//
//1. Adaug event listener la prarintele comun al elementelor
//2. Determin ce element provine din eveniment
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target); //afiseaza <a class="nav__link" href='#section--1'>Features</a>
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    //selecteaza numai nav__link
    const id = e.target.getAttribute('href'); //obtin linkul 'section--1'(e.target -pe ce se da click)
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//
//
//
let a = document.querySelector('.operations__tab--1');

// document
//   .querySelector('.operations__tab-container')
//   .addEventListener('click', function (e) {
//     if (e.target.classList.contains('btn'))
//       if (a.classList != e.target.classList) {
//         e.target.classList.toggle('operations__tab--active');
//         a.classList.toggle('operations__tab--active');
//         console.log(a.classList);
//         a = e.target;
//       } else a = e.target;
//     console.log(e.target.classList);
//   });
//
//
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  //guard class
  if (!clicked) return; //apare null daca nu apas pe butoane, rezolva chestia
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//
//

//menu fade animation
//
const handeOver = function (e, op) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //selectam celelalte butonane
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img'); //selectam imaginea

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = op; //setam opacitatea
    });
    logo.style.opacity = op;
  }
};
//
nav.addEventListener('mouseover', function (e) {
  //cand suntem cu click-ul n range
  handeOver(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  //cand iesim cu click-ul din range
  handeOver(e, 1);
});
//
//
//Sticky navigation
// const initialcoords = section1.getBoundingClientRect(); //pozitia primei sectiuni
// window.addEventListener('scroll', function () {
//   //cand scollam
//   if (window.scrollY > initialcoords.top)
//     nav.classList.add('sticky'); //adaug sticky, dupa section 1 se va vedea bara
//   else nav.classList.remove('sticky');
// });
//
//
//Sticky navigation v2(cea mai buna)intertection observer API
// const obscCallBack = function (entries, observer) {
//   entries.forEach(entry => console.log(entry)); //target element a intrat in viewport
//   //nav.classList.add('sticky');
// };
// const obsOptions = {
//   root: null, //elementul rădăcină va fi elementul pe care dorim să îl intersecteze elementul țintă
//   threshold: [0, 0.2], //procentajul intersectiei la care the observer callback o sa fie "chemata" obscallback //reprezinta procentaj din fereastra - se fla si sus, si in josul paginii, o data ce nu se mai afla in viewport se pune fals(o data ce nu-l mai vedem pe ecran)
// };
// const observer = new IntersectionObserver(obscCallBack, obsOptions);
// observer.observe(section1); //section 1 e target element
let navheight = nav.getBoundingClientRect(); //iau toate detaliile despre nav
// console.log(navheight);
navheight = navheight.height;
// console.log(navheight);
const stickynav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickynav, {
  root: null, //vrem tot viewportul
  threshold: 0,
  rootMargin: `-${navheight}px`, //se afiseaza nav-ul inainte sa intre in viewport
});
headerObserver.observe(header);
//
//
//afisare animatii sectiuni (reveal section)
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //sa nu mai afiseze in consola, sa nu mai fie observate dupa ce au fost  odata
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
const toate = document.querySelectorAll('.section');
toate.forEach(function (sec) {
  sectionObserver.observe(sec);
  // console.log(sec);
  sec.classList.add('section--hidden');
});
//
//
//Lazy loading images
const revealImage = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  // console.log(entry);
  if (!entry.isIntersecting) return;
  else {
    // console.log(entry.target);
    // console.log(entry.target.dataset);
    // console.log(entry.target.dataset.src);
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      //trebuie sa-si faca LOAD imaginea, sa fie calitativa, inaintesa sa stearga blur-ul
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }
  // observer.unobserve(entry.target); //sa nu mai afiseze in consola, sa nu mai fie observate dupa ce au fost  odata
};
const imageObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,
});
const toateImagini = document.querySelectorAll('img[data-src]'); //alegem imaginile ce au in componenta data-src
toateImagini.forEach(function (sec) {
  imageObserver.observe(sec);
  // console.log(sec);
});
//
//
//
//Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4)';
// slider.style.overflow = 'visible';
slides.forEach(function (slide, index) {
  // console.log(slide);
  slide.style.transform = `translateX(${index * 100}%)`; //mutam toate slide-urile mai in drepata(sa nu fie suprapuse)
});
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
let curSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector('.dots');

// console.log(maxSlide);

const createDots = function () {
  slides.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  //ne folosim de data atribute ca sa punem --active
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

btnRight.addEventListener('click', function () {
  nextSlide();
});

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnLeft.addEventListener('click', function () {
  prevSlide();
});
//
//
//Part 2
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
//
//
//

const alerth1 = function (e) {
  alert('addEventListener: aici e headingul');

  // h1.removeEventListener('mouseenter', alerth1); //sterge event listener-ul, se va afisa pentru o singura data alert-ul si atat, fara remove se afisa de fiecare data cand de apropiam de heading
};
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alerth1); //cand se apropie cursorul de headin apare mesajul

setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000); //nu mai afiseaza mesajul dupa 3 secunde

// h1.onmouseenter = function (e) {
//   alert('addEventListener: aici e headingul'); //cand se apropie cursorul de headin apare mesajul
// }; //nu se poate sterge direct acolo ca se suprapune
//rgb(233,233,233)
//
//
//
//
//
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min); //setam intervalul
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`; //culoarea random

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   //bubble phase
//   // e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); //aceeasi chestie
//   // e.stopPropagation(); //nu se mai produce 'cascada' => o sa se schimbe culoarea numai la nav__link, o sa se intampla schimbarea numai al acest element
// }); //se schimba backgroundul la elementul Features, unde sunt pozitionate elementele si la background-ul mare

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// }); //se schimba culoarea la background-ul mare si la cel unde se pozitioneaza elemtele

// document.querySelector('.nav').addEventListener('click', function (e) {
//   // e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// }); //se schimba culoarea numai la backround-ul mare
//
//
//
//Going downwords: child
// console.log(h1.querySelectorAll('.highlight')); //arata clasele highlight, .querryselector cauta copiii
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'; //face primul highlight alb
// h1.lastElementChild.style.color = 'orangered'; //face ultimul highlight negru
// //
// //Going upwords; parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //folosim un gradinet din root din css(custom property)
// h1.closest('h1').style.background = 'var(--gradient-primary)'; //closest cauta parintii
// //going sideways:siblings:fratii
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
const d = new Array();
