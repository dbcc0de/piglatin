"use strict";

// ended up not needing consonants, for letter characters we can use vowels and !vowels
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

// const translate = (word) => {
//   word = word.toLowerCase();
//   if (/[0-9@&$#!]/.test(word)) {
//     return word;
//   } else if (/[aeiou]/.test(word[0])) {
//     return word + "way";
//   } else {
//     const wordArr = word.split("");
//     const index = wordArr.findIndex((char) => /[aeiou]/.test(char));
//     return word.slice(index) + word.slice(0, index) + "ay";
//   }
// };

// searches for numbers (global)
const numbers = /[0-9]/g;
const regex = /[0-9@]/g;
// searches for non letter characters (global)
const symbols = /\W/g;

const translate = (word) => {
  // const checkIfTwo = word.split(" ");
  if (/[0-9@]/.test(word)) {
    return word;
  } else if (vowels.includes(word[0])) {
    return word.toLowerCase() + "way";
  } else if (word.split(" ").length > 1) {
    let splitWord = word.split(" ");
    let preJoinArray = [];
    for (let i = 0; i < splitWord.length; i++) {
      splitWord[i].split("");
      const index = splitWord[i].search(vowels);
      const conson = splitWord[i].slice(index);
      const vowelsPlus = splitWord[i].slice(0, index);
      preJoinArray.push(`${conson}${vowelsPlus}ay`);
    }
    return preJoinArray.join(" ").toLowerCase();
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

const regExTranslate = (dialogue) => {
  const numSymb = /[0-9@]/;
  const vowels = /[aeiou]/i;
  const pigArray = [];
  const wordArr = dialogue.split(" ");
  wordArr.forEach((word) => {
    if (numSymb.test(word)) {
      pigArray.push(word);
    } else if (vowels.test(word[0])) {
      pigArray.push(word + "way");
    } else {
      const index = word.search(vowels);
      pigArray.push(word.slice(index) + word.slice(0, index) + "ay");
    }
  });
  return pigArray.join(" ");
};

module.exports = {
  translate,
  regExTranslate,
};
