var magicString = (string) => {
  const magic = 'aeiou';
  let max = 0;

  const decisionRecurse = (start = 0, magicIndex = 0, currentCount = 0) => {
    for (let i = start; i < string.length; i += 1) {
      if (string[i] === magic[magicIndex]) {
        decisionRecurse(i + 1, magicIndex, currentCount + 1);
      } else if (string[i] === magic[magicIndex + 1]) {
        decisionRecurse(i + 1, magicIndex + 1, currentCount + 1);
      }
    }

    if (magic[magicIndex] === 'u') {
        max = Math.max(max, currentCount);
    }
  }
  decisionRecurse();
  return max;
};

//implemented recursive solution