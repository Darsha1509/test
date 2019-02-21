function frame(arr, symbol){
  let b = 0;
  for(let i = 0; i < arr.length; i++){
    let a = arr[i].length;
    if(a > b){
      b = arr[i].length
    }
  }

  let borderSize = b + 2;
  let resultArr = [];
  resultArr[0] = symbol;

  for(let i = 0; i <= borderSize; i++){
    resultArr[0] += symbol;
  }

  for(let i = 1; i <= arr.length; i++){
    resultArr[i] = symbol + ' ' + arr[i-1];
    let size = arr[i-1].length;
    for (let j = size; j < borderSize - 2; j++){
      resultArr[i] += ' ';
    }
    resultArr[i] += ' ' + symbol;
  }

  resultArr[resultArr.length] = resultArr[0];

  resultArr.forEach(item => {
    console.log(item);
  });
}

frame(['Create', 'new', 'frame'], '+');