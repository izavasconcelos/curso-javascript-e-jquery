/*
Comandos Aprendidos:
- .after();
- .insertAfter();
- .before();
- .insertBefore();
- .wrap();
- .unwrap();

*/

$('p').after('<span> # </span>');

$('<span> # </span>').insertAfter('p');

$('p').before('<span> ¢ </span>');

$('<span> ¢ </span>').insertBefore('p');

$('p').wrap('<span class="teste"> $ </span>');

$('ul li a').unwrap();
