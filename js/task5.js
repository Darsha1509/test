function getLowestIndex(arr, num){
  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
  });

  return arr.indexOf(num);
}

console.log(getLowestIndex([1, 2, 3, 4], 2.5));