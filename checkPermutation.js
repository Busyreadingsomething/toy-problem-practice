const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const holder1 = {};

  for (const char of str1) {
    holder1[char] = holder1[char] + 1 || 1;
  }

  for (const char of str2) {
    if (!holder1.hasOwnProperty(char)) {
      return false;
    }
    
    holder1[char] -= 1;
    
    if (holder1[char] === -1) {
      return false
    }
  }
  return true;
  // let temp = str2;
  // for (const char of str1) {
  //   const index = temp.indexOf(char);
  //   if (index === -1) {
  //     return false;
  //   } else {
  //     temp = temp.slice(0, index) + temp.slice(index + 1);
  //   }
  // }
  // return true;
};

console.log(checkPermutation('hello', 'hi'));
console.log(checkPermutation('string', 'string'));
console.log(checkPermutation('mac', 'cam'));
console.log(checkPermutation('mac', 'mma'));

