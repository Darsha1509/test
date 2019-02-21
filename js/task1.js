const input = document.getElementById('numberInput');
const button = document.getElementById('submitBtn');
const content = document.getElementById('content');

function generateContent(){
  const num = +input.value;
  let text = '';
  for(let i = 1; i <= num; i++){
    text += i + " sheep...";
  }
  content.innerText =  text;
  return false;
}

button.onclick = generateContent;

