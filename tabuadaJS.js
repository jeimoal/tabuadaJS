const tbl = {

numT : null,
sndBtn : null,
clrBtn : null,
rsltT : null,

rSum : null,
rSubt : null,
rMult : null,
rDiv : null,

init : () => {
	numT = document.getElementById('numT');
	sndBtn = document.getElementById('sndBtn');
	clrBtn = document.getElementById('clrBtn');

	rSum = document.getElementById('rSum');
	rSubt = document.getElementById('rSubt');
	rMult = document.getElementById('rMult');
	rDiv = document.getElementById('rDiv');

	numT.focus();
	clrBtn.hidden = true;
	sndBtn.addEventListener('click', tbl.vld);
	clrBtn.addEventListener('click', rSubt);
},

vld : () => {
	if (numT.value !== "") {
		cta = tbl.calc();
	} else {
		window.alert("Type a number");
		numT.focus();
	}
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
