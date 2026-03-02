let input = document.querySelector("#inputBox");
let btn = document.querySelector(".btn");
let tasks = document.querySelector("#list");

btn.addEventListener("click", () => {
  let value = input.value.trim();

  if (value === "") {
    alert("Please enter task!");
    return;
  }

  let li = document.createElement("li");

 
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";


  let span = document.createElement("span");
  span.textContent = value;

  
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

 
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  tasks.appendChild(li);

  input.value = "";
});
