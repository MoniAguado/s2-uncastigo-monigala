'use strict';

var area = document.querySelector('.text');
var bucle = '';
var phrase = 'He aprendido bien como funcionan los bucles';
for (var i = 0; i < 100; i++) {
	bucle += '<li>' + phrase + '</li>';
	}

area.innerHTML = bucle;
