// const array = ['one', 'two', 'three'];
// const [ hoge, fuga, piyo ] = array;

// console.log(hoge); // one
// console.log(fuga); // two
// console.log(piyo); // three


// function testFn() {
//   return ['Hello', 2022];
// }

// const [text, year] = testFn();

// console.log(text); // Hello
// console.log(year); // 2022

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
// };

// // 分割代入
// const { name, established, place } = gizumo;

// console.log(name); // Gizumo
// console.log(established); // 2015年5月15日
// console.log(place); // Shibuya

// 変数名に別名つける

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
// };

// // valueの部分に使用したい変数名を記述
// const { name: companyName } = gizumo;

// console.log(companyName); // Gizumo

// 入れ子のオブジェクトに分割代入を使用する

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
//   course: {
//     frontend: 'Vue',
//     backend: 'Laravel',
//   },
// };

// const { course: { frontend, backend }} = gizumo;

// console.log(frontend); // Vue
// console.log(backend); // Laravel

const array = ['one','two','three'];
const [hoge,fuga,piyo] = array;

console.log(hoge);
console.log(fuga);
console.log(piyo);

// 関数の返り値を分割代入で取得する

function testFn(){
  return ['Hello',2022];
}

const [text,year] = testFn();

console.log(text);
console.log(year);



// 練習問題
// 問題 1

// 関数arrayFnを実行し、返り値の配列から引数argが使用されている値を分割代入で取得し、consoleに出力してください。
// 関数arrayFnに渡す引数に指定はありません。

function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [userjQuery, userVue, userarg] = arrayFn('React');

console.log(userarg); // React

// 問題 2

// 関数objectFnの引数を分割代入でnameのみ受け取り、consoleに出力してください。

function objectFn({name}) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);