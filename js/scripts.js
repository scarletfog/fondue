var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';
var animal = animal.toUpperCase();

var text = text.replace('Papugi', animal);

var x = text.length;
var y = text.substr(-x/2, x/2);
console.log(y);