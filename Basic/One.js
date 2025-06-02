//Write an function that searches for an element in an array and returns the index, if the element is not present then just return -1

let searchElemet = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
};

let arr = [4, 2, 0, 10, 8, 30];
let res = searchElemet(arr, 10);
console.log(res);
