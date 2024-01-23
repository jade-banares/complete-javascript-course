"use strict";

function foodProcessor(apple, mango) {
  const data = document.querySelector("#data");
  const addFruit = apple + mango;
  const result =
    (data.textContent = `You have ${apple} apple and ${mango} mango. With a total of ${addFruit} fruits`);
  //   const juice = `You have ${apple} apple and ${mango} mango. With a total of ${addFruit} fruits`;
  return result;
}

console.log(foodProcessor(1, 2));

//Arrow Func

const myAge = (age) => {
  return age;
};

const data = myAge(23);
console.log(data);
