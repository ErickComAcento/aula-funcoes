/* EXERCÍCIO 1 DE INTERPRETAÇÃO
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

RESPOSTA = a) vai aparecer 10.
b) se retirar os dois console.log
não vai aparecer nada no console. */



/* EXERCÍCIO 2 DE INTERPRETAÇAO
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

RESPOSTA = a) a função serve para colocar a frase em 
minúsculo e também para determinar se a palavra "cenoura"
pode ser encontrada na frase ou não.
b) para a primeira frase vai dar true pois tem "cenoura"
na frase, e na segunda também pois a palavra "CENOURA"
vai ser passada para minúsculo, e a terceira vai dar
false por estar no plural */





/* EXERCÍCIO 1 A) DE ESCRITA DE CÓDIGO
function impressora(){
	const nome = prompt("Nome")
	const idade = prompt("Idade")
	const cidade = prompt("Cidade")
	const profissao = prompt("Profissao")
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
impressora () */

/* EXERCÍCIO 1 B) DE ESCRITA DE CÓDIGO
const impressora2 = (nome2, idade2, cidade2, profissao2) => {
	console.log(`Sou ${nome2}, tenho ${idade2}, moro em ${cidade2} e sou ${profissao2}.`)
}
impressora2(nome2 = ("Érick"), idade2 = ("18"), cidade2 = ("SL"), profissao2 = ("Ferramenteiro")) */



/* EXERCÍCIO 2 A) B) E C) DE ESCRITA DE CÓDIGO
const somadora = (num1, num2) => {
	const somaa = Number(num1) + Number(num2)
	const maiorouigual = Number(num1) >= Number(num2)
	const parouimpar = Number(num1) % 2 == 0
	const parouimpar2 = Number(num2) % 2 == 0
	console.log(`A soma dos números é ${somaa}.`)
	console.log(`O primeiro número é maior ou igual ao segundo? ${maiorouigual}`)
	console.log(`O primeiro número é par? ${parouimpar}`)
	console.log(`O segundo número é par? ${parouimpar2}`)
}
somadora(Number(10),Number(10)) */

/* EXERCÍCIO 2 D) DE ESCRITA DE CÓDIGO
const frase = (mensagem) => {
	
	console.log(mensagem)
	console.log(mensagem.toUpperCase())
	console.log(`${mensagem.length} Letras`)
}
frase("Abacate é muito bom!") */



/* EXERCÍCIO 3 DE ESCRITA DE CÓDIGO
const opnum = (numero1, numero2) => {
	console.log(`Os números escolhidos foram ${numero1} e ${numero2}`)
}

const opsom = (numero1, numero2) => {
	const somar = Number(numero1) + Number(numero2)
	console.log(`A soma desses números é ${somar}`)
}

const opsub = (numero1, numero2) => {
	const subtrair = Number(numero1) - Number(numero2)
	console.log(`A subtração desses números é ${subtrair}`)
}

const opmul = (numero1, numero2) => {
	const multiplicar = Number(numero1) * Number(numero2)
	console.log(`A multiplicação desses números é ${multiplicar}`)
}

const opdiv = (numero1, numero2) => {
	const dividir = Number(numero1) / Number(numero2)
	console.log(`A divisão desses números é ${dividir}`)
}

opnum (10, 5)
opsom (10, 5)
opsub (10, 5)
opmul (10, 5)
opdiv (10, 5) */



/* DESAFIO 1
const funcao1 = (numerao) => {	
	console.log(numerao)
}

const funcao2 = (valor1, valor2) => {
	const numeroso = Number(valor1) + Number(valor2)
	funcao1(numeroso)
}

funcao2 (10, 20) */



const teorema = (a, b) => {
	op1 = Number(a) * Number(a)
	op2 = Number(b) * Number(b)
	op3 = Number(op1) + Number(op2)
	 ** 0.5 (RAIZ QUADRADA)
	return op
}

const resultado = substracao(10, 5)
console.log(resultado)