/**
 * FUNÇOES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 * FUNÇÕES PODEM RETORNAR UM VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
//DECLARAÇÃO DE FUNÇÃO
function dizOla() {
  alert('Olá')
}
function OlaPessoa(nome){
  alert('Olá,' + nome)
}
const nome = 'JUlius'
const sobrenome = 'Silva'
const idade = 19

function dadosPessoa(){
  const dados = nome + sobrenome + idade
  console.log(dados)
}
//INVOCAÇÃO DE FUNÇÃO
dizOla()
OlaPessoa('Lucas')
dadosPessoa()