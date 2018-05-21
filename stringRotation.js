const isSubstring = (str1, str2) => {
  if ((str1 && !str2) || (!str1 && str2)) {
    return false;
  }
  const doubleString = str1 + str1;
  return doubleString.includes(str2);
};

console.log(isSubstring('waterbottle', 'terbottlewa'));
console.log(isSubstring('rally', 'arlly'));
console.log(isSubstring('fred', ''));