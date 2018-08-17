// var canJump = function(nums) {
//   const last = nums.length - 1;
//   let jump = false;

//   const DFS = (leap = 0) => {
//     if (leap >= last) {
//       jump = true;
//       return;
//     }
//     for (let i = 1; i <= nums[leap]; i += 1) {
//       DFS(leap + i);
//     }
//   }
//   DFS();
//   return jump; // if there is no way
// };

// works but doesn't pass long values

var canJump = function(nums) {
  const len = nums.length - 1;
  let maxIndex = 0;
  
  
  for (let i = 0; i <= len; i += 1) {
    maxIndex = Math.max(maxIndex, nums[i] + i);
    if (maxIndex === i) break;
  }
  
  return maxIndex >= len;
};

/**
 * Here what we know is that from the current index we can tell how far we can jump from that spot.
 * Now how you got to that index doesn't matter. What matters is how far you can go from that
 * index. Thus each spot will tell you how far it can go.
 * 
 * How does this take into account that we start from 0th index and might not reach other indexes?
 *
 * What you can do here is simple, starting from the 0th index, keep track of the largest index you
 * can get to. Now if, after checking your max index, your max index is the same value as the
 * current index, then you know that you can't go farther than that. Breaking from the loop at that
 * point will prevent you from changing your maxIndex.
 *
 * In the end, all you need to do is compare your maxIndex to the length - 1.
 *
 * The result is a function with O(n) and S(1)
 */