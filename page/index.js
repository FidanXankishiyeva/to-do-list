// let btn = document.querySelector(".btn");
// let input = document.querySelector("input");

// // button style
// input.addEventListener("keyup", changeBtn);

// function changeBtn() {
//   if (input.value) {
//     btn.disabled=false
//     btn.style.backgroundColor='gray'
//   }
//   else{
//     btn.disabled=true
//     btn.style.backgroundColor= '#9953f1'
//   }
// }

let btn = document.querySelector ('button')
let input = document.querySelector ('input')
let form = document.querySelector ('form')
let div = document.querySelector ('.container')
// enable btn 

input.addEventListener('keyup', ()=>{
  btn.disabled= false
})

// add list 
btn.addEventListener ('click', addList)
function addList(e){
e.preventDefault()
let p= document.createElement ('p')
p.innerText = input.value
div.append(p)
form.reset()
btn.disabled= true
}