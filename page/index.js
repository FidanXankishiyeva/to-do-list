let btn = document.querySelector(".btn");
let input = document.querySelector("input");

// button style
input.addEventListener("keyup", changeBtn);

function changeBtn() {
  if (input.value) {
    btn.disabled=false
    btn.style.backgroundColor='gray'
  }
  else{
    btn.disabled=true
    btn.style.backgroundColor= '#9953f1'
  }
}
