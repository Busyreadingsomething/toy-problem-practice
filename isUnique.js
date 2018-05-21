const isUnique = str => {
  const holder = {};
  let unique = true;
  for (const char of str) {
    if (holder[char]) {
      return false;
    }
    holder[char] = true;
  }

  return true;
};
isUnique('hello');
