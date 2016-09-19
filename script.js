// pokušaj straničenja

var polje = [ 'monalisa', 'cope', 'leoniza' , 'branko', 'jole', 'dubra', 'joler', 'ljuba' ];
var str = 0;
var komada = 3;
var poc = [];

for (var i = 0; i < polje.length; i++) {
	if (i % komada === 0) {
		str++;
		poc.push(i);
		document.getElementById('btns').innerHTML += 
			'<button id="btn'+ str +'" onclick="(imgGnt(this, poc))">'+ str +'</button>';
	}
}

function imgGnt (btn, poc) {
	document.getElementById('page').innerHTML = 'Page: ' + btn.innerHTML;
	var j = poc[Number(btn.innerHTML - 1)];
	var dokud = j + komada;
	console.log(j, dokud);
	for ( j; j < dokud; j++ ) {
		console.log(j);
		if ( polje[j] === undefined ) {
			console.log('--->valja ispravit<---')
		} else {
		document.getElementById('output').innerHTML += 
			'<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=' + 
			polje[j] + '&w=350&h=150" alt="" />';
		}
	}
}