//fine second largest number in an array

let secondLargest = (arr) => {
  if (arr.length < 2) {
    return "should have atleast 2 element";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

let arr = [4, 9, 0, 12, 10, 8, 7, 1];

let res = secondLargest(arr);

console.log(res);
