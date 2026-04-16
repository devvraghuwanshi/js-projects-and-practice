let product = document.getElementById("product-img");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click",()=>{
    product.src = "432 product-img/image1.png";
})
btn2.addEventListener("click", () => {
  product.src = "432 product-img/image2.png";
});
btn3.addEventListener("click", () => {
  product.src = "432 product-img/image3.png";
});