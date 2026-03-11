// forEach

// forEachメソッドはfor文と同じように繰り返し処理ができるメソッド
// 繰り返し処理したい配列.forEach(コールバック関数);

// const array = [1, 2, 3, 4, 5];

// array.forEach(val => console.log(val));

// コールバック関数の引数を第2引数、第3引数を受け取る事も可能
// const array = [1, 2, 3, 4, 5];

// array.forEach((val, index, array) => {
//   console.log(val, index, array);
// });

// ■map
// 配列の要素をコールバック関数へ渡し、コールバック関数が返した値から新しい配列を作成するメソッド

// const array = [2, 4, 6, 8, 10];

// const newArray = array.map(val => val * 2);

// console.log(newArray);



// 練習問題
// 問題 1
const array = [
  { tag: 'p', className: 'hoge',},
  { tag: 'div',className: 'fuga',},
  { tag: 'h1',className: 'piyo',},
];

const newArray = array.map(item => ({
  tag: item.tag,
  className: `c-${item.className}`,
}));

console.log(newArray);