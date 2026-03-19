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

// 割引後の値段を計算する関数discountRateCalcを実行し、4500円の5%引きと、6000円の20%引きの値をconsoleに出力してください。
// ただし、割引率のデフォルト値に5%を設定すること。


function discountRateCalc(price, rate = 
  5) {
  return Math.floor(price * (1 - rate * 0.01));
}

console.log(discountRateCalc(4500,undefined));
console.log(discountRateCalc(6000,20));