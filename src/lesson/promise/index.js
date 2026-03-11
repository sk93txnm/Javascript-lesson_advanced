// // 同期処理
// // 処理が順番に実行されていくことを指し、前位の処理が完了するまで次の処理は実行されない

// // 非同期処理
// // 処理の完了を待たずに次の処理を実行する処理

// // console.log('1番目の処理'); // ① 同期処理なので処理が完了したら②の処理が実行される

// // setTimeout(() => { // ② 非同期処理のため、処理の完了を待たずに③が実行される
// //   console.log('2番目の処理');
// // }, 0);

// // console.log('3番目の処理'); // ③ 同期処理

// // 非同期処理の完了を待機する

// // console.log('1番目の処理');

// // setTimeout(() => {
// //   console.log('2番目の処理');
// // }, 2000);

// // setTimeout(() => {
// //   console.log('3番目の処理');
// // }, 1000);

// // 「3番目の処理」を確実に一番最後に実行されるようにするにはどうしたら良いでしょうか？
// // これはコールバック関数に次の非同期処理を書くことで「3番目の処理」を最後に実行することが可能になります。

// // console.log('1番目の処理');

// console.log('1番目の処理');

// // ※setTimeoutは、第二引数に指定したミリ秒後に第一引数のコールバック関数を実行する

// setTimeout(() => {
//   console.log('2番目の処理');
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// }, 2000);

// 1番目の処理
// 2番目の処理
// 3番目の処理

// const promise = new Promise((resolve, reject) => {
//   // 引数に処理の結果として文字列を渡している
//   resolve('非同期が成功しました');
// });

// // resolve関数が実行されるとthenメソッドが実行される
// // resolve関数の引数に渡した「非同期が成功しました」がコールバック関数の引数であるvalに入ってくる
// promise.then(val => {
//   console.log(val);
// });

// console.log(promise);

// console.log('1番目の処理');

// new Promise(resolve => {
//   setTimeout(() => {
//     console.log('2番目の処理');
//     resolve();
//   }, 2000);
// }).then(() => {
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// });

// console.log('1番目の処理');

// setTimeout(() => {
//   console.log('2番目の処理');
//   setTimeout(() => {
//     console.log('3番目の処理');
//     setTimeout(() => {
//       console.log('4番目の処理');
//       setTimeout(() => {
//         console.log('5番目の処理');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 2000);

// const setTimeoutFn = (time) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };


// promiseオブジェクトのpromisestateで管理されているため、consoleで確認できる
// 3つの状態

// Fulfilled
// 非同期処理が成功した状態

// Rejected
// 非同期処理が失敗した状態

// Pending
// 非同期処理が成功も失敗もしていない状態（待機状態）













// 練習問題
// 問題 1

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise()
  .catch((error) => {
    console.log(error);
  });



