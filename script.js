//recupero degli elementi
const button = document.querySelector("#button");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const output = document.querySelector("#output");

//definizione delle funzioni
function somma(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let somma  = num1 + num2; 
    output.innerText = somma;

}

//gestioni degli eventi
button.addEventListener("click", somma);

