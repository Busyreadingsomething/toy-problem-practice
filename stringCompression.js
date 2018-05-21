const stringCompression = (string) => {
  const holder = [];
  let index = 0;

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
  for (const [ index ] of string) {
    console.log(index);
  }
  return holder.map(tuple => tuple.join('')).join('');
};

console.log(stringCompression('aaabbcccccddefff'));