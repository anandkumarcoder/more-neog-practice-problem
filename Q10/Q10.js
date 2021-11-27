const paraInput = document.querySelector('#paraInput');
const countBtn = document.querySelector('#countBtn');
const output = document.querySelector('#output');


function wordCount (){
let text = paraInput.value;
text = text.trim();
console.log(text)
let word = text.split(" ").filter(word => word!== "")
console.log(word)
output.innerText =`word count is : ${word.length}`
console.log(word.length)

}

countBtn.addEventListener('click' , wordCount )





