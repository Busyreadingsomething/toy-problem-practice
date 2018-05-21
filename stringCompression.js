const stringCompression = (string) => {
  const holder = [];

  if (string === '') {
    return string;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (i === 0) {
      holder.push([string[i], 1]);
    } else if (string[i] === string[i -1]) {
      holder[holder.length - 1][1] += 1;
    } else {
      index += 1;
      holder.push([string[i], 1]);
    }
  }

  return holder.map(tuple => tuple.join('')).join('');
};
console.log(stringCompression(''));
console.log(stringCompression('aaabbcccccddefff'));