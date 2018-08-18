var sayHash = {};
var countAndSay = function(n) {
  if (n in sayHash) {
    return sayHash[n];
  }

  let string;

  for (let i = 1; i <= n; i += 1) {
    if (i === 1) {
      sayHash[i] = string = '1';
      continue;
    } else if (i in sayHash) {
      string = sayHash[i];
      continue;
    }

    const temp = [];
    let val = null;
    let count = 0;

    for (let j = 0; j < string.length; j += 1) {
      if (val === null) {
        val = string[j];
        count += 1;
      } else if (val !== string[j]) {
        temp.push(count, val);
        val = string[j];
        count = 1;
      }
      else {
        count += 1;
      }
    }
    
    temp.push(count, val);
    sayHash[i] = string = temp.join('')

  }
  return sayHash[n];
};