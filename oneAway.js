const oneAway = (original, edit) => {
  const hash = {};

  for (char of edit) {
    hash[char] = hash[char] + 1 || 1;
  }

  for (char of original) {
    if (char in hash) {
      hash[char] = hash[char] - 1;
    } else {
      hash[char] = -1;
    }
  }

  const final = Object.keys(hash).reduce((acc, char) => {
    acc += hash[char];
    return acc;
  }, 0);

  return (final === 1 || final === 0 || final === -1);
};

console.log(oneAway('string', 'strin'));
console.log(oneAway('string', 'sstring'));
debugger;
console.log(oneAway('string', 'skrinn'));