let expression = '';
let result = document.getElementById('result');

function numberClick(num) {
  expression += num;
  result.value = expression;
}

function operatorClick(op) {
  if (expression === '') {
    return;
  }
  let lastChar = expression.charAt(expression.length - 1);
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }
  result.value = expression;
}

function decimalClick() {
  let lastNum = expression.split(/[+\-\/*()]/).pop();
  if (!lastNum.includes('.')) {
    expression += '.';
    result.value = expression;
  }
}

function clearClick() {
  expression = '';
  result.value = '';
}

function equalClick() {
  if (expression === '') {
    return;
  }
  let lastChar = expression.charAt(expression.length - 1);
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    expression = expression.slice(0, -1);
  }
  let answer = eval(expression);
  result.value = answer;
  expression = '';
}

function toggleSign() {
    if (expression === '') {
      return;
    }
    let num = parseFloat(expression);
    if (num < 0) {
      num = Math.abs(num);
    } else {
      num = -num;
    }
    expression = num.toString();
    result.value = expression;
  }
  
  
  