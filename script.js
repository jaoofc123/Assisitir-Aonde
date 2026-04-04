document.getElementById("competicao").addEventListener("change", function() {

let valor = this.value
let jogos = document.querySelectorAll(".jogo")

jogos.forEach(jogo => {

if(valor === "todos"){
jogo.style.display = "block"
}
else if(jogo.classList.contains(valor)){
jogo.style.display = "block"
}
else{
jogo.style.display = "none"
}

})

})
