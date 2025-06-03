//write a function that returns the largest number in an array
let findLargest = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
let arr = [5, 0, 10, 8, 17, 1];
let res = findLargest(arr);
console.log(res);
