const userName = document.querySelector('#userName');
const userPassword = document.querySelector('#userPassword');
const btnCheck = document.querySelector('#btn-check');
const output = document.querySelector('#output'); 

btnCheck.addEventListener('click', passwordCheck)

userPassword.addEventListener("input",  passwordValidateInput)




function passwordValidateInput(){
    if (userPassword.value.toLowerCase() === userName.value.toLowerCase()){
        btnCheck.disabled = true;
        output.innerText = "weak password";
        output.style.color = "red";
    }  
    else {
        btnCheck.disabled = false;
        output.innerText = "success password";
        output.style.color = "green";
    }
}

function passwordCheck(){
    
    
    let passwordValidate = userName.value + 123;
    console.log(passwordValidate)

    if(userPassword.value === passwordValidate){
        output.innerText = "weak password";
        output.style.color = "red";
    } else{
        output.innerText = "success password";
        output.style.color = "green";
    }
}



