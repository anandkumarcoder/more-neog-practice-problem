const inputUser = document.querySelector('#inputUser');
const output = document.querySelector('#output');

inputUser.addEventListener('input' , ()=>{
    output.innerText = inputUser.value;
})