"use strict";

const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const vowels = ["a", "e", "i", "o", "u"];

// const splitToPush = () => {

// }

// const translateeee = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//       return `${word}way`;
//     } else if (consonants.includes(word[i]) && vowels.includes(word[i + 1])) {
//       let slicedWord = word.slice(1);
//       let cons1 = word.slice(0, 1);
//       return `${slicedWord}${cons1}ay`;
//     } else if (
//       consonants.includes(word[i]) &&
//       consonants.includes(word[i + 1])
//     ) {
//       let slicedWord = word.slice(2);
//       let cons2 = word.slice(0, 2);
//       return `${slicedWord}${cons2}ay`;
//     }
//   }
// };

// array method
//   let wordArray = word.split("");
//   let firstCons = wordArray.shift();
//   wordArray.push(firstCons);
//   let finalWord = wordArray.join("");
//   return `${finalWord}ay`;

// const translate = (word) => {
//   if (vowels.includes(word[0])) {
//     return word + "way";
//   } else {
//     let index = 0;
//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i])) {
//         index = i;
//         break;
//       }
//     }
//     const firstPart = word.slice(0, index);
//     const secondPart = word.slice(index);
//     return secondPart + firstPart + "ay";
//   }
// };

const translate = (word) => {
  if (vowels.includes(word[0])) {
    return word.toLowerCase() + "way";
  } else {
    const wordArray = word.split("");
    const index = wordArray.findIndex((char) => vowels.includes(char));
    return (
      word.slice(index).toLowerCase() +
      word.slice(0, index).toLowerCase() +
      "ay"
    );
  }
};

module.exports = {
  translate,
};
