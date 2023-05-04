const checkIfHasAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfItsEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

export default checkIfItsEven;
