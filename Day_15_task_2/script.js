var result = document.getElementById('result');
var validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

document.addEventListener('keydown', function(event) {
  var key = event.key;

  if (!validKeys.includes(key)) {
    event.preventDefault();
    alert('Only numbers are allowed!');
  }
});

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    var expression = result.value;
    var resultValue = eval
  if (expression) {
    result.value = eval(expression);
  }
} catch (error) {
  alert('Invalid expression!');
}
}
