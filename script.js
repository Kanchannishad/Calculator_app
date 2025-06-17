 let display = document.getElementById("display");
let answer = "";

function appendValue(val) {
  if (display.innerText === "0") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteChar() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function sqrt() {
  try {
    let result = Math.sqrt(eval(display.innerText));
    display.innerText = result;
    answer = result;
  } catch {
    display.innerText = "Error";
  }
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
    answer = result;
  } catch {
    display.innerText = "Error";
  }
}

function useAns() {
  display.innerText += answer;
}
