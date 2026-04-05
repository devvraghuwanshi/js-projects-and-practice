let icon = document.querySelector("#icon");

icon.addEventListener("click",handelClick);

function handelClick(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/crescent-moon.png";
    }
    else{
        icon.src = "images/sun2.png";
    }
}