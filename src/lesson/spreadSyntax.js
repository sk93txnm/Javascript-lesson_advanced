// 配列の展開

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(...numbers); // 1 2 3 4 5

// 配列の複製

// const numbers = [1, 2, 3, 4, 5];

// const copyNumbers = [...numbers];

// console.log(copyNumbers); // [1, 2, 3, 4, 5]

// 値を追加して新しい配列を作成

// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// 配列のマージ

// const animal = ['cat', 'dog'];
// const fruit = ['apple', 'orange'];

// const mergeArray = [...animal, ...fruit];

// console.log(mergeArray); // ['cat', 'dog', 'apple', 'orange']

// オブジェクトの展開

// const company = {
//   name: 'Gizumo',
//   place: 'Shibuya',
// };

// const copy = { ...company };

// console.log(copy);

// companyをスプレッド構文で展開すると{ name: 'Gizumo', place: 'Shibuya' }→name: 'Gizumo', place: 'Shibuya'になります。

// オブジェクトのスプレッド構文はオブジェクトリテラルの中でしか使用することができません。

// オブジェクトでのユースケース

// const company = {
//   name: 'Gizumo',
//   place: 'Shibuya',
// };

// const newCompanyInfo = { ...company, established: '2015年5月15日' };

// console.log(newCompanyInfo); // { name: 'Gizumo', place: 'Shibuya', established: '2015年5月15日' }

// 同名プロパティを更新した新しいオブジェクトを作成

// const company = {
//   name: 'Gizumo',
//   place: 'Shibuya',
//   established: '2015年5月15日',
// };

// const updateProperty = {
//   name: 'Front End',
// };

// const updatedCompanyInfo = { ...company, ...updateProperty };
// // { name: 'Front End', place: 'Shibuya', established: '2015年5月15日' }

// console.log(updatedCompanyInfo);

// スプレッド構文（...）は「配列の中」か「関数呼び出しの引数」でしか使えない


// 練習問題
// 問題 1
// onsoleにpackageManagerとframeworkがマージされた配列が出力されるように、関数arrayFnの返り値をスプレッド構文を使用して定義してください。

const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  return[...array,...framework];
}

// 配列を展開[]

console.log(arrayFn(packageManager));

// 問題 2
// 下記条件を満たしたオブジェクトをスプレッド構文を使用して作成し、consoleに出力してください。

// objectAのversionプロパティをobjectBのversionプロパティで更新
// 新しいプロパティroutingLibrary: 'Vue Router'を追加


const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const newObject = {
  ...objectA,
  ...objectB,
  routingLibrary: 'Vue Router',
};

// オブジェクトの中身順で展開される

console.log(newObject);