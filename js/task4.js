function getDimensionalArray(arr, num){
  let resultArray = [];
  while(arr.length > 0){
    let curArr = arr.splice(0, num);
    resultArray.push(curArr);
  }

  return resultArray;
}

console.log(getDimensionalArray([0, 1, 2, 3, 4, 5], 2));
