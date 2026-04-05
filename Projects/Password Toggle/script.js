let password = document.querySelector("#password");
let icons = document.querySelector("#eye-icon");

icons.addEventListener("click" , handleIcons);


function handleIcons(){
    if(password.type == "password"){
        password.type = "text";
        icons.src =
          "eye-icons/eye-open.png";
    }else{
        password.type = "password";
        icons.src = "eye-icons/eye-close.png";
    }
}