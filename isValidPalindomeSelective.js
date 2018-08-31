var isPalindrome = function(s) {
  const parsed = s.replace(/([^a-zA-Z0-9])/g, '').toLowerCase();
  let start = 0;
  let end = parsed.length - 1;
  
  while (start < end) {
    if (parsed[start] !== parsed[end]) {
      return false
    }
    start += 1;
    end -= 1;
  }
  
  return true;
};

// In the REGEX expression we are doing this
/**
 * / ... /g => the group of being selected
 * [a-zA-Z0-9] any alphanumeric numbers
 * ^ => not one of the following
 * [^a-zA-Z0-9]
 */