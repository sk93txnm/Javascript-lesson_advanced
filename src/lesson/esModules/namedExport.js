// named export

// モジュールごとに複数の変数や関数をエクスポート
// モジュール＝一つのファイル

// 変数hogeをnamed exportによってエクスポートしている
// const hoge = 'hoge';
// export { hoge };

// const hoge = 'hoge';

// // 宣言とエクスポートを同時に行うことも可能

// export function testFn(text){
//   return `Hello ${text}`;
// }

// export { hoge };











// 練習問題
// 問題 1
const nameFn = () => {
  return 'Gizumo taro';
};

const calcFn = (num) => {
  return num * 10;
};

export { nameFn , calcFn };