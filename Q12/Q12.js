const inputUser = document.querySelector('#inputUser');
const output = document.querySelector('#output');
const redBtn = document.querySelector('#redBtn');

inputUser.addEventListener('input' , ()=>{
    output.innerText = inputUser.value;
})

redBtn.addEventListener("click" , () => {
    output.style.color = "red"
})
