const nome = prompt("Digite seu nome")
let  idade = prompt("Qual a sua idade")
let altura = prompt("Digite sua altura")
let  cidade = prompt("Digite sua Cidade")
let nota1 = Number(prompt("Digite a  nota "))
let nota2 = Number(prompt("Digite a  nota "))
alert("Cadastro Finalizado")
let media = (nota1 + nota2) / 2
const situacao = (media >= 7? "Aprovado":"Reprovado")

console.log(`${nome} 
${idade} anos de idade ,
morador da ${cidade}, 
${altura}m de altura`)

console.log(`Primeira:${nota1}
Segunda:${nota2}, 
A situação do aluno e de ${situacao},
média e de ${media}`)