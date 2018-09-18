var selection = (input) => {
  let it = 'wait'
  for (let i = 0; i < input.length; i += 1) {
    let swap = i;
    for (let j = i + 1; j < input.length; j += 1) {
      if (input[swap] > input[j]) {
        swap = j;
      }
    }
    const temp = input[i];
    input[i] = input[swap];
    input[swap] = temp;
  }

  return input;
};