var recursive = function(s) {
  s = s.replace(/\s/g, ''); // O(n)
  
  const parse = (neg, string) => {
    let calc = 0;
    let temp = '';
    
    // for loop O(n)
    for (let i = 0; i < string.length; i += 1) {
      if (string[i].search(/[0-9]/) > -1) {
        temp += string[i];
      } else if (string[i] === '+') {
        if (temp !== '') {
          calc += parseInt(temp, 10);
        }

        temp = '';
      } else if (string[i] === '-') {
        if (temp !== '') {
          calc += parseInt(temp, 10);
        }

        temp = string[i];
      } else if (string[i] === '(') {
        let start = false;

        if (temp === '-') {
          start = true;
          temp = '';
        } else if (temp !== '') {
          calc += parseInt(temp, 10);
          temp = '';
        }

        let open = 0;
        let end = 0;
        let cut;

        // for loop O(k) time complexity
        for (let j = i; j < string.length; j += 1) {
          if (string[j] === '(') {
            open += 1;
          } else if (string[j] === ')') {
            end += 1;
          }
          if (open === end) {
            cut = j;
            break;
          }
        }
        
        // O(m) time complexity - O(n) space complexity
        calc += parse(start, string.slice(i + 1, cut));
        i = cut;
      }
    }
    if (temp !== '') {
      calc += parseInt(temp, 10);
    }

    if (neg) {
      return -1 * calc;
    } else {
      return calc;
    }

  }

  return parse(false, s); 
};
// ^ BAD
// Complexity is very bad
// O(n + n(k + m))


// v BEST
// The time is O(n) even though there is another loop within the outer loop. The reason being is that
// the inner loop set the outer to the part where the inner left off.
// O(n) space, namely due to the number of values that are being discovered.
var calculate = function(s) {
  const len = s.length;
  const stack = [];

  let sign = 1;
  let result = 0;

  // O(n)
  for (let i = 0; i < len; i += 1) {
    if (s[i] >= '0' && s[i] <= '9') {
      let num = parseInt(s[i], 10);
      // O(n) however it moves the outer loop i to the end of the while loop
      while (i + 1 < len && s[i + 1] >= '0' && s[i + 1] <= '9') {
        num = num * 10 + parseInt(s[i+1], 10);
        i += 1;
      }
      result += num * sign;
    } else if (s[i] === '+' || s[i] === '-') {
      sign = s[i] === '+' ? 1 : -1;
    } else if (s[i] === '(') {
      stack.push(result, sign);
      result = 0;
      sign = 1;
    } else if (s[i] === ')') {
      result = result * stack.pop() + stack.pop();
    }
  }
  return result;
};