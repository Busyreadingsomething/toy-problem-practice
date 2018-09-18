var swapQS = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

var partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) left += 1;
    while (arr[right] > pivot) right -= 1;

    if (left <= right) {
      swapQS(arr, left, right);
      left += 1;
      right -= 1;
    }
  }
  return left;
};

var quickSort = (arr, left, right) => {
  const index = partition(arr, left, right);
  
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  
  if (index < right) {
    quickSort(arr, index, right);
  }
  
  return arr;
};