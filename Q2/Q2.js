const passwordInput = document.querySelector('#passwordInput');
const btnSubmit = document.querySelector('#btn-submit');
const output = document.querySelector('#output');

function passwordCheck(){
    let password = passwordInput.value
    if(password.length % 2 === 0){
        output.innerText = "success"
        output.style.color = "green"
    } else {
        output.innerText = "failure"
        output.style.color = "red"
    }
}

btnSubmit.addEventListener('click', passwordCheck)