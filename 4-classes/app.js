/*
Comandos Aprendidos:
- .addClass();
- .removeClass();
- .toggleClass();
- .hasClass();

*/

$('').click(function() {
	$('.modal').addClass('active');
});

$('').click(function() {
	$(this).removeClass('abrir-modal');
});

$('.abrir-modal').click(function() {
	$('.modal').toggleClass('active');
	var condicao = $('.modal').hasClass('active');
	if(condicao) {
		$(this).text('Fechar Modal');
	} else {
		$(this).text('Abrir Modal');
	}
});

