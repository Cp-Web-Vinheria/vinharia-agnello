// Nome 
var nome = prompt("digite seu nome:");
// Caso do nome vazio 
if (nome == ""){
    alert("Falha, digite algo para continuar");
    var nome = prompt("digite seu nome:");
}
// idade 
var anoNascimento = prompt("digite seu ano de nascimento: ")
const idade = 2025 - anoNascimento
// Caso da idade vazio 
if(anoNascimento = ""){
    alert("Falha, digite algo para continuar");
    var anoNascimento = prompt("digite seu ano de nascimento: ")
}
// Caso menor de idade 
else if (idade < 18){
    alert(`Você é menor de idade volte em ${18 - idade} anos`)
}

else{
    alert("Cadastro realizado! Veja os detalhes no console.")
    console.log(` seu nome é ${nome} e voce tem ${idade} anos `)
}
// detalhes dos vinhos 
    var nomeVinho = prompt("Qual o nome do seu vinho? ")
console.log(nomeVinho)
alert("O nome de seu vinho está salvo no console")
alert("Qual tipo de vinho ? ")
tipoVinho = prompt(` Vinho tinto \n Vinho Rose  \n Vinho Branco `)
if (tipoVinho == " "){
    alert("Digite o nome corretamente! ");
    var tipoVinho = prompt(` Vinho tinto \n Vinho Rose  \n Vinho Branco `)  
    
}
