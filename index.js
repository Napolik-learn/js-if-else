document.getElementById('calc').onclick = function(){
	let flat = document.getElementById('flat').value;
	//внутри flat строка
	flat = parseInt(flat);
	//число
	if (flat>=1 && flat <=20) alert('First');
	else if (flat >= 21 && flat <=48) alert ('Second');
	else if (flat>=49 && flat <=90) alert ('Third');
	else alert('Erorr. Flat does not exists.');
}