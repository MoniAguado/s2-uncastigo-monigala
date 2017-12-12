'use strict'


function bucle (list){
	var phrase = 'He aprendido bien como funcionan los bucles';
for (var i = 0; i < 100; i++) {
	phrase += '<li>' + list[i] + '</li>';
	}
	var area = document.querySelector('.text');
	area.innerHTML = phrase;
}
