const numeroDigitado = document.getElementById('numeroDigitado');
const resultados = document.getElementById('resultados');
const btnEnviar = document.getElementById('enviar');
const btnLimpar = document.getElementById('limpar');
	
let multiplicacao;

btnEnviar.addEventListener('click', tabuada);

function tabuada() {
	let numDigi = numeroDigitado.value;
	let resultMulti = resultados;
	let total;

	for(i = 1; i <= 10; i++) {
		total = numDigi * i;
		multiplicacao = document.createElement('p');
		multiplicacao.textContent = total;
		resultados.appendChild(multiplicacao);
	}
	btnLimpar.disabled = false;
	numeroDigitado.value = "";
}

btnLimpar.addEventListener('click', limparTabuada);

function limparTabuada() {
	let limpeza = document.querySelectorAll('.resultados p')
	for(i = 0; i < limpeza.length; i++) {
		limpeza[i].textContent = "";
	}
}