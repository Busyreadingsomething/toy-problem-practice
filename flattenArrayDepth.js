const flattenDFS = (arr) => {
  const result = [];
  let list = [arr];
  while (list.length) {
    const item = list.pop();

    if (Array.isArray(item)) {
      let len = item.length;
      for (let i = 0; i < len; i += 1) {
        list.push(item.pop());
      }
    } else {
      result.push(item);
    }
  }
  return result;
};