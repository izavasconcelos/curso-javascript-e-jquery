/*
Comandos Aprendidos:
- .click();
- .on();
- $(this)
- event object
- scroll
- scrollTop();
- resize
- 
*/

$('img').click(function() {
	$('.abrir-modal').text('Clicou');
});

$('a').on('click', function() {
	$('.abrir-modal').text('Clicou');
});

$('a').on('click', function() {
	$(this).text('Clicou');
});

$('a').on('click', function() {
	var variavel = $(this);
	variavel.text('thisss');
});

$('a').on('click', function(e) {
	//console.log(e);
	e.preventDefault();
	$(this).text('event');
});

$('a').on('mouseenter', function(e) {
	//console.log(e);
	e.preventDefault();
	$(this).text('Mouse hover');
});

$('a').on('mouseleave', function(e) {
	//console.log(e);
	e.preventDefault();
	$(this).text('Mouse leave');
});

$(document).on('scroll', function() {
	$('').text('Mouse hover');
});

$(document).on('scroll', function() {
	$('').text($(document).scrollTop());
});

$(window).on('resize', function() {
	$('a').text($('body').width());
});