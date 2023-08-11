// Given two sorted arrays containing numbers, return a sorted array of the numbers from both lists
// Brute force trivial solution, not intending to use any specific algorithms for this
const merge = function (arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < (arr1.length + arr2.length)) {
    if (arr1[j] === undefined) {
      newArr.push(arr2[k]);
      k++;
    }
    else if (arr2[k] === undefined) {
      newArr.push(arr1[j]);
      j++;
    }
    else if (arr1[j] <= arr2[k]) {
      newArr.push(arr1[j]);
      j++;
    }
    else {
      newArr.push(arr2[k]);
      k++;
    }

    i++;
  }

  return newArr;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);