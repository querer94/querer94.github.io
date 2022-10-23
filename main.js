const modal = document.querySelector(".modal");
const img = document.querySelector(".img");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const modal_img = document.querySelector(".modal_content");


img.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img.src;
});
img2.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img2.src;
});
img3.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img3.src;
});
img4.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img4.src;
});
img5.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img5.src;
});
img6.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img6.src;
});
img7.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img7.src;
});
modal.addEventListener('click', ()=>{
  modalDisplay("none");
});
function modalDisplay(text){
  modal.style.display = text;
}