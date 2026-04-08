let selectField = document.getElementsByClassName("selectField")[0];
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrow-icon");
selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (let option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
