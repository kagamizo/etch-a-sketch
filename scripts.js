
const changeBtn= document.createElement("button");
changeBtn.textContent="Change grid size" 
document.body.appendChild(changeBtn)

changeBtn.addEventListener("click", myFunction);

function myFunction() {
    let size= Number(prompt("Please enter how many squares you want the grid to be"));

if (size <= 100 && size > 0){
    container.textContent="";

createGrid(size);}
else{
  alert("Input a valid number");
}
  

}

const container = document.querySelector(".container");
container.before(changeBtn);
createGrid(16);

function createGrid(size){
   

  for(let i=0; i<size*size; i++){
let square= document.createElement("div")
  square.style.width=(100/size)+"%"
  square.style.height= (100/size)+"%"
square.className = "square"
square.classList.add("square")
container.append(square)

square.onmouseover = function(event) {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  let target = event.target;

  if(!target.style.background){

  target.style.background = "black";

target.style.opacity = 0;
              target.style.background = randomColor;

  }

  let currentOpacity= Number(target.style.opacity);

  if (currentOpacity<1){

target.style.opacity = currentOpacity + 0.1;
  }
}
}
}

