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

console.log(tipoVinho)
// Tipo de  safra
alert("o tipo do vinho está no console!")
    var safraVinho = prompt(`Qual ano da safra do vinho ? `)
    if (safraVinho >= 2020){
        alert("Safra de vinho jovem!")}
    else if (safraVinho >= 2015){
        alert(" Safra de vinho amadurecido!")}
    else{
        alert("Safra de vinho antigo")
        
    }
    alert("A safra de seu vinho está salva no console")
// Estoque de vinhos
var estoqueVinho = prompt("Qual a quantidade de vinhos no estoque? ")
console.log(estoqueVinho)

if (estoqueVinho < 5){
    console.log("ESTOQUE BAIXO")
    

}

