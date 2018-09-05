var judgeCircle = function(moves) {
  let x = 0;
  let y = 0
  
  for (const char of moves) {
    switch(char) {
      case 'U':
        y += 1;
        continue;
      case 'D':
        y -= 1;
        continue;
      case 'R':
        x += 1;
        continue;
      case 'L':
        x -= 1;
      default:
        continue;
    }
  }
  
  return !(x || y);
};