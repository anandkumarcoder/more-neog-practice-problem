const like = document.querySelector('#likeCount');
const button = document.querySelector('#btn');
const minusBtn = document.querySelector('#minus');


/*
My method--
let counter = 0;

function addCount (){
    newCounter = 1 + counter++
     like.innerText = `${newCounter}`
     console.log(newCounter)

}

button.addEventListener("click" , addCount)

minusBtn.addEventListener("click" , ()=> {
   
    if(newCounter >= 1)
    newCounter = counter-- -1
    
     like.innerText = `${newCounter}`
     console.log(newCounter)

     if(newCounter < 1){
         minusBtn.disabled = true;
     }
})
*/

function increase(numValue){
    minusBtn.disabled = false;
    like.innerText = numValue + 1
}

button.addEventListener("click" , () =>{
    increase(Number(like.innerText))
    
}
)

function decrease (numValue){
    if (numValue >= 1){
        
        minusBtn.disabled = false;
        like.innerText = numValue -1;

    } else if( numValue === 0)  {
        minusBtn.disabled = true;
    }
    
}

minusBtn.addEventListener("click" , ()=> {
    decrease(Number(like.innerText))
})
