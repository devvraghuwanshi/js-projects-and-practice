let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");
let message = document.querySelector("#msg");

btn.addEventListener("click", () => {
  let currentInput = pass.value;
  // console.log(currentInput);

  let hasEight = false;
  if (currentInput.length >= 8) {
    hasEight = true;
  }
  let char = currentInput.split("");
  let hasUpper = false;
  let hasLower = false;
  let hasSpecial = false;
  let hasNumber = false;
  for (let val of char) {
    if (val >= "A" && val <= "Z") {
      hasUpper = true;
    } else if (val >= "a" && val <= "z") {
      hasLower = true;
    } else if (val >= "0" && val <= "9") {
      hasNumber = true;
    } else {
      hasSpecial = true;
    }
  }

  if (hasEight && hasLower && hasNumber && hasSpecial && hasUpper) {
    message.textContent = "Strong Password ✅";
    message.style.color = "Green";
  } else {
    message.textContent = "Weak Password ❌";
    message.style.color = "red";
  }
});
