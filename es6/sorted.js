const nameRateArr = [
  { rate: 1, name: "hoho" },
  { rate: 4, name: "taesang" },
  { rate: 1, name: "seongmin" },
  { rate: 1, name: "jongwook" },
  { rate: 3, name: "taehoon" }
];


let numArr = [1, 5, 6, 3, 4, 8, 0];

//삽입정렬
const sortedArr = (arr) => {

  for (let i = 1; i < arr.length; i++) {

    let curNum = arr[i];
    let leftIndex = i - 1;

    while (leftIndex >= 0 && arr[leftIndex] > curNum) {
      let temp = arr[leftIndex + 1];
      arr[leftIndex + 1] = arr[leftIndex]
      arr[leftIndex] = temp
      leftIndex--;
    }
  }
  return arr;
};

console.log(sortedArr(numArr));

//숙제 rate로정렬
const sortedArr2 = (arr) => {

  for (let i = 1; i < arr.length; i++) {

    let curNum = arr[i].rate;
    let leftIndex = i - 1;

    while (leftIndex >= 0 && arr[leftIndex].rate > curNum) {
      let temp = arr[leftIndex + 1];
      arr[leftIndex + 1] = arr[leftIndex]
      arr[leftIndex] = temp
      leftIndex--;
    }
  }
  return arr;
};
console.log(sortedArr2(nameRateArr));



//버블정렬
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (1 + i); j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(numArr));


//merge sort
const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
}

//quick sort
const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}