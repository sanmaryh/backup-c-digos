//LOCALIZAR ELEMENTO DO HTML
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');

// CRIAR VARIAVEIS
const novoNome = "May"
const novoSobrenome = "Jones"
const novoEmail = "may.jomay@gmail.com"
const novoTelefone = "41 96432-9190"
const novaIdade = "19"
const novoSexo = "Feminino"

// ATRIBUIR VALORES AO HTML COM OS VALORES
// DAS NOSSAS VARIAVEIS (innerText/innerHTML)
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo