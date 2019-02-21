const input = document.getElementById('numberInput');
const button = document.getElementById('submitBtn');
const content = document.getElementById('content');
let container = document.getElementById('container');

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}

input.onkeypress = function handleChange(event) {
  if(input.value.length === 0){
    let firstNum = getChar(event);
    if(firstNum < 0 || firstNum > 9){
      return false;
    } else if (firstNum === '-'){
      return false;
    } else {
      return true;
    }
  }

  if(input.value.length === 1){
    let secondtNum = +getChar(event);
    if(+input.value.charAt(0) === 0){
      return false;
    }
    if(+input.value.charAt(0) === 3 && secondtNum !== 0){
      return false;
    }
    return true;
  }
  if(input.value.length > 1) {
    return false;
  }
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateContent(){
  content.removeChild(container);
  container = document.createElement('div')
  const num = +input.value;
  if(num === 0){
    return false;
  }
  for(let i = 0; i < num; i++){
    let containerItem = document.createElement('div');
    for (let j = 0; j < num; j++){
      let newDiv = document.createElement('div');
      newDiv.className = 'mini-block';
      newDiv.style.backgroundColor = getRandomColor();
      containerItem.appendChild(newDiv);
    }
    container.appendChild(containerItem);
    container.className = 'container';
  }
  content.appendChild(container);
  return false;
}

button.onclick = generateContent;