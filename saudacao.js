//Se ninguém informar o segundo valor, ele assume p parâmetro

function saudacao(nome = "Senac"){
    return console.log(`Olá, ${nome}!`)
}

saudacao();
saudacao("Ana");