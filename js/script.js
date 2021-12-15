/*
Criado Por Ihury Ferreira
*/
const criador = document.querySelector('#criador');

var desenvolvedor = "<h1 style='color:yellow;'>Desenvolvido por IHURY FERREIRA</h1>"

criador.innerHTML = desenvolvedor;

import Countdown from '../js/countdown.js';

//Selecionando a classe Natal e Ano Novo

const natal = document.querySelector('.natal');

const novo = document.querySelector('.novo');

//Tempo para o dia do natal e anoNovo
const tempoParaONatal = new Countdown('25 December 2021 23:59:59 GMT-0300');

const tempoParaOAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300');

//Intervalo do tempo do dias com horas e minutos e segundos
setInterval(() => { 
	natal.innerHTML = 
		'<div class="dias">'+ tempoParaONatal.total.days +' Dias</div>'+
		'<div class="horas">'+ tempoParaONatal.total.hours+ ' Horas</div>'+
		'<div class="minutos">'+ tempoParaONatal.total.minutes +' Minutos</div>'+
		'<div class="segundos">'+ tempoParaONatal.total.seconds +' Segundos</div>';
}, 1000)

setInterval(() => { 
    novo.innerHTML = 
			'<div class="dias">'+ tempoParaOAnoNovo.total.days +' Dias</div>'+
            '<div class="horas">'+ tempoParaOAnoNovo.total.hours +' Horas</div>'+
            '<div class="minutos">'+ tempoParaOAnoNovo.total.minutes +' Minutos</div>'+
            '<div class="segundos">'+ tempoParaOAnoNovo.total.seconds +' Segundos</div>';
}, 1000);