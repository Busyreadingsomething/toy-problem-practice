var flipAndInvertImage = function(A) {
  return A.map((list) => {
    const map = [];
    
    for (let i = list.length - 1; i > -1; i -= 1) {
      map.push(list[i] ^ 1);
    }
    
    return map;
  });
};
