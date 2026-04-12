let toastBox = document.getElementById("toastBox");
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please Fix Errors`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again`;

function showToast(msg, type) {
  let toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setTimeout(()=>{
    toast.remove();
  },6000);
}
