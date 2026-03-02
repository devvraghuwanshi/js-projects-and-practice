let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

let currentInput = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    if (value === "AC") {
      currentInput = "";
      display.textContent = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
