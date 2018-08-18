var wordPattern = function(pattern, str) {
  const patHash = {}, strHash = {};
  const strArr = str.split(' ');

  if (pattern.length !== strArr.length) return false;

  for (let i = 0; i < pattern.length; i += 1) {
    const pat = pattern[i];
    const word = strArr[i];
    if (patHash[pat] && patHash[pat] !== word) return false;
    if (strHash[word] && strHash[word] !== pat) return false;
    patHash[pat] = word;
    strHash[word] = pat;
  }
  
  return true;
};

var pattern1 = 'abba';
var words1 = 'dog cat cat dog';
var pattern2 = 'abc';
var words2 = 'b c a';
