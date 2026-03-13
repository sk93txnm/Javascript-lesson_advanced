import 'animate.css';

const title = document.getElementById('title');
const button = document.querySelector('.button');
const eventCard = document.querySelector('.card-type--yellow');
const nodeCard = document.querySelector('.card-type--mocha');


button.addEventListener('click', () => {
  title.classList.add('animate__hinge');
  title.addEventListener(
    'animationend',
    () => {
      eventCard.style.display = 'block';
      nodeCard.classList.add('card-animation');
      eventCard.classList.add('animate__fadeInUp');
    },
    { once: true }
  );
});

// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
