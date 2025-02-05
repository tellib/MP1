function addition() {
  let first = parseFloat(document.getElementById("first").value);
  let second = parseFloat(document.getElementById("second").value);
  let result = first + second;
  document.getElementById("result").value = result;
}

function subtraction() {
  let first = parseFloat(document.getElementById("first").value);
  let second = parseFloat(document.getElementById("second").value);
  let result = first - second;
  document.getElementById("result").value = result;
}

function multiplication() {
  let first = parseFloat(document.getElementById("first").value);
  let second = parseFloat(document.getElementById("second").value);
  let result = first * second;
  document.getElementById("result").value = result;
}

function division() {
  let first = parseFloat(document.getElementById("first").value);
  let second = parseFloat(document.getElementById("second").value);
  if (second === 0) {
    document.getElementById("result").value = `Cannot divide by zero`;
  } else {
    let result = first / second;
    document.getElementById("result").value = result;
  }
}

function power() {
  let first = parseFloat(document.getElementById("first").value);
  let second = parseFloat(document.getElementById("second").value);
  let result = Math.pow(first, second);
  document.getElementById("result").value = result;
}

function clearInputs() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("result").value = "";
}
