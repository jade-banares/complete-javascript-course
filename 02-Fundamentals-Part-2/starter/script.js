// function cutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, mango) {
//   const applePieces = cutPieces(apples);
//   const mangoPieces = cutPieces(mango);

//   const output = `Total apples you have ${applePieces}, and mango ${mangoPieces}`;
//   return output;
// }

// console.log(fruitProcessor(2, 4));
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(1, 2, 3));
const objectsItem = ['Jade', 23, 2000, true];
const title = document.querySelector('h1');

for (let i = 0; i < objectsItem.length; i++) {
  const list = document.querySelector('#unorderedList');
  const listItem = document.createElement('li');

  listItem.textContent = objectsItem[i];

  list.appendChild(listItem);
  //   console.log(objectsItem[i]);
}

//Looping Backwards
// for (let i = objectsItem.length - 1; i >= 0; i--) {
//   const list = document.querySelector("#unorderedList");
//   const listItem = document.createElement("li");

//   listItem.textContent = objectsItem[i];

//   list.appendChild(listItem);
// }

// Looping using While Loop

// const objectsItem1 = ["Jade", 23, 2000, true];
// let i = 0;
// while (i < objectsItem1.length) {
//   console.log(`This is your personal information ${i} ${objectsItem[i]}`);
//   i++;
// }
let dice = Math.floor(Math.random() * 6 + 1);

const getHeading = document.querySelector('h1');

while (dice == 6) {
  const text = `You get ${dice} dices, congrats!`;
  getHeading.textContent = text;
  dice++;
}
