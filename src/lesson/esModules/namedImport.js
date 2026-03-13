// named importはexport文によってエクスポートされた変数や関数を別のモジュール（ファイル）からインポートできる

// import { hoge, testFn } from './namedExport.js';

// console.log(hoge);
// console.log(testFn('Gizumo'));



// 練習問題
// 問題 1

// src/lesson/esModules/namedExport.jsとsrc/lesson/esModules/namedImport.jsを使用します。

// 下記条件を満たした状態で、関数nameFnとcalcFnを実行し、返り値をconsoleに出力してください。

// src/lesson/esModules/namedExport.jsに定義されている関数nameFnとcalcFnをnamed exportでエクスポート
// src/lesson/esModules/namedImport.jsで関数nameFnとcalcFnをnamed importでインポート


import { nameFn , calcFn  } from './namedExport.js';

console.log(nameFn());
console.log(calcFn(5));