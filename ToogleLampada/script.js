//IDENTIFICAR OS ELENTOS DOM (ARVORE HTML)
const btnTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://914dbd38-b1a9-4c91-b0e1-736547c06ffd-00-5fnfwjclqux1.janeway.replit.dev/"

btnTrocar.addEventListener('click', function() {
  // alert(lampada.src == baseURL + "lampada0.png") 
  if (lampada.src == baseURL + "lampada0.png") {
    lampada.src = "lampada2.png"
  } else {
    lampada.src = "lampada0.png"
  }
})
