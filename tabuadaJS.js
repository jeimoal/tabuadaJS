const numeroDigitado = document.getElementById('numeroDigitado');
const btnEnviar = document.getElementById('enviar');
const btnLimpar = document.getElementById('limpar');

const resultSoma = document.getElementById('resultSoma');
const resultSub = document.getElementById('resultSub');
const resultMult = document.getElementById('resulMult');
const resultDiv = document.getElementById('resulDiv');

	
let tabelaResult;

btnEnviar.addEventListener('click', tabuada);

function tabuada() {
	let numDigi = numeroDigitado.value;
	let total;

	//cálculo da soma
	let paraSoma = resultSoma;
	for(contSum = 1; contSum <= 10; contSum++) {
		total = Number(numDigi) + contSum;
		tabelaResult = document.createElement('p');
		tabelaResult.textContent = `${numDigi} + ${contSum} = ${total}`;
		paraSoma.appendChild(tabelaResult);
		}

	//cálculo subtração
	let paraSub = resultSub;
	for(contSub = 1; contSub <= 10; contSub++) {
		total = Number(numDigi) - contSub;
		tabelaResult = document.createElement('p');
		tabelaResult.textContent = `${numDigi} - ${contSub} = ${total}`;
		paraSub.appendChild(tabelaResult);
		}

	//cálculo multiplicação
	let paraMult = resultMult;
	for(contMult = 1; contMult <= 10; contMult++) {
		total = Number(numDigi) * contMult;
		tabelaResult = document.createElement('p');
		tabelaResult.textContent = `${numDigi} * ${contMult} = ${total}`;
		paraMult.appendChild(tabelaResult);
		}

	//cálculo divisão
	let paraDiv = resulDiv;
	for(contDiv = 1; contDiv <= 10; contDiv++) {
		total = Number(numDigi) / contDiv;
		total = total.toFixed(2);
		tabelaResult = document.createElement('p');
		tabelaResult.textContent = `${numDigi} / ${contDiv} = ${total}`;
		paraDiv.appendChild(tabelaResult);
		}

	numeroDigitado.value = "";
	btnLimpar.disabled = false;
}

btnLimpar.addEventListener('click', limparTabuada);

function limparTabuada() {
	let limpeza = document.querySelectorAll('#tabuada p')
	for(i = 0; i < limpeza.length; i++) {
		limpeza[i].textContent = "";
	}
}
