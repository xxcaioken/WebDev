let idade3 = 21;
let paisPresentes3 = false;
let comprouBlihete = true;
const podeViajar3 = idade3 >= 18 || (paisPresentes3 && comprouBlihete);
console.log("pode viajar : " + podeViajar3);

if (comprouBlihete == true) {
  console.log("sim comprou bilhete");
  if ((idade3) => 18) {
    console.log("pode viajar");
  } else {
    ("precisa dos pais");
    if (paisPresentes3 == true) {
      console.log("boa viajem");
    } else {
      console.log("infelizmente não pode viajar");
    }
  }
} else {
  console.log("não comprou o bilhete");
}
//if(!comprouBlihete == true){
//  console.log("não comprou bilhete")
//}else{
//  console.log("sim comprou o bilhete")};

////

let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log("media :" + media);

if (n1 === 0 || n2 === 0) {
  console.log("reprovado");
} else if (media < 7) {
  console.log("voce esta reprovado com: " + media);
} else {
  console.log("voce esta aprovado com: " + media);
}
console.log("saiu do if");


//operador ternario

//let maiorDeIdade = "";
//if(idade>=18){
  //  msgMaiorDeIdade = ("maior de idade");
//}else{
  //  msgMaiorDeIdade =("menor de idade");
//};
let idade = 19
let msgMaiorDeIdade = (idade>= 18) ? "maior de idade" : ("menor de idade");
console.log(msgMaiorDeIdade);