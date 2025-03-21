function countInversions(arr) {
  let inversionCount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversionCount++;
      }
    }
  }

  return inversionCount;
}

const arr = [8, 4, 5, 1];
console.log("Total Inversions:", countInversions(arr));
