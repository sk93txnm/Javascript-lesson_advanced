import 'animate.css';

const title = document.getElementById('title');
const button = document.querySelector('.button');
const eventCard = document.querySelector('.card-type--yellow');

button.addEventListener('click', () => {
  // ① DOM Operation を落下（ぶら下がり）アニメーション
  title.classList.add('animate__hinge');


  // ② アニメーション終了後に Event Type を表示
  title.addEventListener(
    'animationend',
    () => {
      // display: none → block に変更
      eventCard.style.display = 'block';

      // 下からフェードインするアニメーションを付与
      eventCard.classList.add('animate__fadeInUp');
    },
    { once: true } // 1回だけ実行
  );
});










// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
