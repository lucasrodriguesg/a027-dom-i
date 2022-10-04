const frutas = ["laranja", "limão", "uva"];

let frutas1 = document.getElementById("fruta-1")
frutas1.innerHTML += frutas[0]
let frutas2 = document.getElementById("fruta-2")
frutas2.innerHTML += frutas[1]
let frutas3 = document.getElementById("fruta-3")
frutas3.innerHTML += frutas[2]

function printInput(){
    let printInput = document.getElementById("fruta")
    let frutas4 = document.getElementById("fruta-4")
    frutas4.innerHTML += printInput.value 
    console.log(printInput.value)
}
