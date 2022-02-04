// +  -  *  / % **(potencia)
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 * n2);
console.log(n1 - n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n2 ** 4);

// operadores de atribuição

let n3 = 20;
//n3 = n3 + 15;
n3 += 15;

let n4 = 20;
//n4 = n3 * 15;
n4 *= 15;
console.log(n3,n4);

//Incremento e Decremento
let i = 0;
console.log(i);
i++;
console.log(i);
i--;
console.log(i);

// COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<,>,<=,>=
valores diferentes !=
valores e tipos diferentes !==
*/
let numero1 = 10;
let numero2 = "10";
console.log(numero1 === numero2, numero1 == 10);
let numero3 = 20;
let numero4 = 15;
console.log(numero3 < numero4 );
console.log(numero3 != numero4);


// Operadores lógicos 
/*
 para alguem viajar para o exterior precisa ser maior de 18 anos
 OU 
 estar acompanhada pelos pais
*/
let idade = 18;
let paisPresentes = true;
const podeViajar = idade >= 18 || paisPresentes;
console.log("pode viajar 1 "+podeViajar);

let idade1 = 17;
let paisPresentes1 = false;
const podeViajar1 = idade1 >= 18 || paisPresentes1 ;
console.log("pode viajar 2 "+podeViajar1);

let idade2 = 21;
let paisPresentes2 = false;
const podeViajar2 = idade2 >= 18 || paisPresentes2;
console.log("pode viajar 3 "+podeViajar2);

let idade3 = 21;
let paisPresentes3 = false;
let comprouBlihete = true;
const podeViajar3 =( idade3 >= 18 || paisPresentes3 && comprouBlihete);
console.log("pode viajar 4 "+podeViajar3);
