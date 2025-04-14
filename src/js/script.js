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

}