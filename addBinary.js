var addBinary = function(a, b) {
  debugger;
  let carry = 0;
  a = a.split('').reverse();
  b = b.split('').reverse();
  const len = a.length > b.length ? a.length : b.length;
  const result = [];

  for (let i = 0; i < len; i += 1) {
    const valA = a[i] ? parseInt(a[i]) : 0;
    const valB = b[i] ? parseInt(b[i]) : 0;
    const value = valA + valB + carry;
    
    switch (value) {
      case 3:
        carry = 1;
        result.push('1');
        continue;
      case 2:
        carry = 1;
        result.push('0');
        continue;
      case 1:
        carry = 0;
        result.push('1');
        continue;
      default:
        carry = 0;
        result.push('0');
        continue;
    }
  }

  if (carry === 1) {
    result.push('1');
  }
  
  return result.reverse().join('');
};