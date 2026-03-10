// ここにコードを書きながら確認しましょう！

// 引数を一つ受け取るように定義
// function argFn(arg) {
//   console.log(arg);
// }

// // 引数を渡していない
// argFn();

// // デフォルト引数に'Hello'を指定
// function argFn(arg = 'Hello') {
//   console.log(arg);
// }

// // 引数を渡していない
// argFn();

// function totalPrice(price, tax = 1.10) {
//   return price * tax;
// }

// console.log(totalPrice(1000, 1.10)); // 1100
// console.log(totalPrice(1000)); // 1100

// // デフォルト引数に'Hello'を指定
// function argFn(arg = 'Hello') {
//   console.log(arg);
// }

// // 引数にundefinedを渡す
// argFn(undefined);



// 練習問題
// 問題 1
function discountRateCalc(price, rate = 
  0.95) {
  return Math.floor(price * (1 - rate * 0.01));
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000,20));