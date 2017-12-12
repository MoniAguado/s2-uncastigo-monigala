'use strict';

var area = document.querySelector('.text');
var cadena = '';
var phrase = 'He aprendido bien como funcionan los bucles';
var colours = [
	'pink',
	'white',
	'red',
	'green',
	'yellow',
	'blue'
]

// se puede añadir más cadenas en otra línea con ;  y meter un bucle cuando lo nombras en la cadena

for (var i = 0; i < 100; i++) {
	cadena += '<li>' + phrase + '</li>';
	cadena += '<select>';
	for (var j = 0; j < colours.length; j++){
		cadena += '<option>' + colours[j] + '</option>';
	}
	cadena += '</select>';
}

area.innerHTML = cadena;
