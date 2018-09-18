var merge = (array, helper, low, mid, high) => {
  for (let i = low; i <= high; i += 1) {
    helper[i] = array[i];
  }

  let left = low;
  let right = mid + 1;
  let current = low;

  while(left <= mid && right <= high) {
    if (helper[left] <= helper[right]) {
      array[current] = helper[left]
      left += 1;
    } else {
      array[current] = helper[right];
      right += 1;
    }
    current += 1;
  }

  const remaining = mid - left;
  
  for (let i = 0; i <= remaining; i += 1) {
    array[current + i] = helper[left + i];
  }
};

var mergeHelper = (array, helper, low, high) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeHelper(array, helper, low, mid);
    mergeHelper(array, helper, mid + 1, high);
    merge(array, helper, low, mid, high);
  }
};

var mergeSort = (array) => {
  let helper = [];
  mergeHelper(array, helper, 0, array.length - 1);
  return array;
};