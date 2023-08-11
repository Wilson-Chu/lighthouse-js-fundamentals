const range = function (start, end, step) {
  const arr = [];
  let val = start;

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }

  while (val <= end) {
    arr.push(val);
    val += step;
  }

  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));