/*
Comandos Aprendidos:
- .append();
- .appendTo();
- .html();
- .text();
- .prepend();
- .prependTo();



*/

$('p').append(' Testendo append');

$('p').append($('.introducao h1'));

$('h2').appendTo($('.introducao h1'));

var conteudoH2 = $('h2').html(); /* GET - Pega o primeiro h2 do site*/
console.log(conteudoH2); /**/

$('p').html('Teste'); /* Troca todos p por teste*/
$('p').html('<span>Teste</span>'); 
$('p').text('<span>Teste</span>'); 

console.log($('h2').text()); /* Get text Pega todos h2*/

$('h1').prepend('Prepend Teste');