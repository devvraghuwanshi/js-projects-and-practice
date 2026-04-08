let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = `Phone no. is required`;
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = `Phone no. should be 10 Digits`;
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = `Only Digits`;
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;

  if (message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  if (left > 0) {
    messageError.innerHTML = left + " more characters required(min 30)";
    return false;
  }

  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMessage() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit"; 
        setTimeout(function(){
            submitError.style.display = "none";
        },3000);
        return false;
    }
}
