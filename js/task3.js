const input = document.getElementById('numberInput');
const button = document.getElementById('submitBtn');
const content = document.getElementById('content');

function generateContent(){
  const strValue = input.value;
  const arr = strValue.split(' ');
  arr.sort(function(a, b){
    return a.length - b.length;
  });
  content.innerText = 'The shortest length of the word: ' + arr[0].length;
  return false;
}

button.onclick = generateContent;