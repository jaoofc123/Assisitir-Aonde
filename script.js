document.addEventListener("DOMContentLoaded", function(){

// FILTRO DE COMPETIÇÃO
let filtro = document.getElementById("competicao")

if(filtro){
filtro.addEventListener("change", function(){

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
}

// ATUALIZAR DATAS DOS JOGOS
let hoje = new Date()

let ano = hoje.getFullYear()
let mes = String(hoje.getMonth()+1).padStart(2,'0')
let dia = String(hoje.getDate()).padStart(2,'0')

let hojeFormatado = ano+"-"+mes+"-"+dia

let datas = document.querySelectorAll(".data-jogo")

datas.forEach(data => {

let dataJogo = data.getAttribute("data-date")

if(dataJogo === hojeFormatado){
data.innerText = "Hoje"
}
else{

let partes = dataJogo.split("-")
data.innerText = partes[2]+"/"+partes[1]+"/"+partes[0]

}

})

let titulo = document.getElementById("titulo-hoje")

if(titulo){

let hoje = new Date()

let dia = String(hoje.getDate()).padStart(2,'0')
let mes = String(hoje.getMonth()+1).padStart(2,'0')
let ano = hoje.getFullYear()

titulo.innerText = "Jogos de Hoje ("+dia+"/"+mes+"/"+ano+")"

}


})
