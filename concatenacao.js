/*
// Seção de Declarações das variáveis
    nome: caractere
    idade: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome:")
   leia(nome)
   escreval("Digite a idade:")
   leia(idade)
   
    escreval(nome, ": ", idade * 2)
*/
var nome, idade

nome = prompt("Digiteo o nome: ")
idade = prompt("Digite a idade: ")

document.getElementById("paragrafo").innerText = nome + ": " + idade