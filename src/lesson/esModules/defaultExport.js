// default export

// named exportがモジュールごとに複数の変数や関数をエクスポートできるのに対し、default exportはモジュールごとに1つしかエクスポートすることができません。

// const fuga = 'fuga';

// // 変数fugaをdefault exportによってエクスポートしている
// export default fuga;

// 関数宣言とエクスポートを同時に行なっている
// export default function testFn(text) {
//   return `Hello ${text}`;
// }

// export default const fuga = 'fuga';

// const fuga = 'fuga';
// const piyo = 'piyo';

// // モジュールごとに1つしかデフォルトエクスポートできないので、エラーになる
// export default fuga;
// export default piyo;






// 練習問題
// 問題 2
function defaultFn() {
  return 'default export';
}

export default defaultFn;