// IDENTIFICAR ELEMENTOS HTML
const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const verde = document.querySelector('#verde');
const azul = document.querySelector('#azul');
const amarelo = document.querySelector('#amarelo');
const texto = document.querySelector('#texto');
const box = document.querySelector('.box');



// MANIPULAR ESSES ELEMENTOS
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = "red";
  texto.style.color = "white";
})
verde.addEventListener('click', function() {
  box.style.backgroundColor = "green";
  texto.style.color = "white";
})
  azul.addEventListener('click', function() {
  box.style.backgroundColor = "blue";
  texto.style.color = "white";
})
amarelo.addEventListener('click', function() {
  box.style.backgroundColor = "yellow";
  texto.style.color = "white";
})