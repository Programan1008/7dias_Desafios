// Primero Definimos las variables
let numeroUn = 1;   //NUMERO
let stringUn = '1'; //STRING

let numeroTreinta = 30;   //NUMERO
let stringTreinta = '30'; //STRING

let numeroDiez = 10;    //NUMERO
let stringDiez = '10'; //STRING     

// Comparación con == asi podemos verificar VALOR 
if (numeroUn == stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
}

// Comparación con === asi podemos verificar tanto VALOR como TIPO
if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

// Comparación con == asi podemos verificar VALOR
if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
}
