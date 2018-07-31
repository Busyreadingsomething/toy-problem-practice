const flattenBFS = (arr) => {
  const result = [];
  const list = [...arr];
  for (let i = 0; i < list.length; i += 1) {
    if (Array.isArray(list[i])) {
      list.push(...list[i]);
    } else {
      result.push(list[i]);
    }
  }

  return result;
};