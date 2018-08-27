const solution = function(isBadVersion) {
  return function(latest) {
    let start = 1;
    let end = latest;
    while(start < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  };
};