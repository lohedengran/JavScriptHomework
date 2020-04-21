// // Odds and evens
showOddOrEven(15);
function showOddOrEven(givenNumber) {
  for (let i = 0; i <= givenNumber; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}

// Trolls

function removeVowels(inputString) {
  return inputString.replace(/[a, e, i, o, u]/g, "");
}

console.log(removeVowels("Remove these vowels"));

// Repeat the give string
repeatString("Hello", 5);

function repeatString(inputString) {
  return inputString.repeat(5);
}

console.log(repeatString("Hello"));
