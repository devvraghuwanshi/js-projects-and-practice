let input = document.getElementById("enterTask");
let btn = document.getElementsByClassName("btn")[0];
let list = document.getElementById("taskList");

btn.addEventListener("click", addTask());

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
   let del = document.createElement("button");
   del.textContent = "X";
   del.className = "delete";

   del.addEventListener("click", function (event) {
     event.stopPropagation();
     li.remove();
   });

   li.appendChild(del);

  taskList.appendChild(li);

  input.value = "";
}
