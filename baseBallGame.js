var calPoints = function(ops) {
  let total = 0;
  let prev = [];
  
  for (const round of ops) {
    const parse = parseInt(round, 10);
    if (!isNaN(parse)) {
      total += parse;
      prev.push(parse);
    } else if (round === '+') {
      const score = prev[prev.length - 1] + prev[prev.length - 2]
      total += score;
      prev.push(score);
    } else if (round === 'D') {
      const score = 2 * prev[prev.length - 1] 
      total += score;
      prev.push(score);
    } else if (round === 'C') {
      total -= prev.pop();
    }
  }
  
  return total;
};
