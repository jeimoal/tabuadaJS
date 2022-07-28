const tbl = {

numT : null,
sndBtn : null,
clrBtn : null,
rsltT : null,

rSum : null,
rSubt : null,
rMult : null,
rDiv : null,

tblCnvs: null,

init : () => {
	numT = document.getElementById('numT');
	sndBtn = document.getElementById('sndBtn');
	clrBtn = document.getElementById('clrBtn');

	rSum = document.getElementById('rSum');
	rSubt = document.getElementById('rSubt');
	rMult = document.getElementById('rMult');
	rDiv = document.getElementById('rDiv');

	tblCnvs = document.getElementsByClassName('resultados');

	numT.focus();
	clrBtn.hidden = true;
	sndBtn.addEventListener('click', tbl.vld);
	clrBtn.addEventListener('click', tbl.rSubt);
},

vld : () => {
	if (numT.value !== "") {
		tbl.calc();
		sndBtn.disabled = true;
		numT.disabled = true;
		clrBtn.hidden = false;
	} else {
		window.alert("Type a number");
		numT.focus();
	}
},

rSubt: () => {
	let tabCanv = tblCnvs;
	for(i = 0; i < tabCanv.length; i++) {
		tblCnvs[i].textContent = "";
	}
	clrBtn.hidden = true;
	numT.disabled = false;
	sndBtn.disabled = false;
	numT.value = "";
},

calc : () => {
	let rslt;

	//sum calculation
	para = rSum;
	for(ct = 1; ct <= 10; ct++) {
		rslt = Number(numT.value) + ct;
		rsltT = document.createElement('p');
		rsltT.textContent = `${numT.value} + ${ct} = ${rslt}`;
		para.appendChild(rsltT);
	}

	//sub calculation
	para = rSubt;
	for(ct = 1; ct <= 10; ct++) {
		rslt = Number(numT.value) - ct;
		rsltT = document.createElement('p');
		rsltT.textContent = `${numT.value} - ${ct} = ${rslt}`;
		para.appendChild(rsltT);
	}

	//mult calculation
	para = rMult;
	for(ct = 1; ct <= 10; ct++) {
		rslt = Number(numT.value) * ct;
		rsltT = document.createElement('p');
		rsltT.textContent = `${numT.value} * ${ct} = ${rslt}`;
		para.appendChild(rsltT);
	}

	//divi calculation
	para = rDiv;
	for(ct = 1; ct <= 10; ct++) {
		rsltC = Number(numT.value) / ct;
		rslt = rsltC.toFixed(2);
		rsltT = document.createElement('p');
		rsltT.textContent = `${numT.value} / ${ct} = ${rslt}`;
		para.appendChild(rsltT);
	}

},

}

window.addEventListener('load', tbl.init);
