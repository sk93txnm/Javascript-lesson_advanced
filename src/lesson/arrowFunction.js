// functionキーワードとの違い

// 定義
// const 変数名 = function(引数) {
//   処理の内容
// };

// const 変数名 = (引数) => {
//   処理の内容
// };

// functionキーワードを使用していた部分が、アロー関数では=>に置き換わってますね。
// このようにアロー関数では、functionキーワードの部分を=>で書く形になります。


// ■アロー関数の省略記法
// 関数の引数が1つの時は()を省略できる

// // 引数を1つ受け取っている
// const arrowFn = (arg) => {
//   console.log(arg);
// };

// // 引数が一つなので()を省略して書くことができる
// const arrowFn = arg => {
//   console.log(arg);
// };


// 練習問題
// 問題 1
const testFn = name => `Gizumo ${name}`;

console.log(testFn('Karen'));