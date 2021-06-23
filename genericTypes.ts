/**
 * O tipo genérico, é um tipo especial
 * capaz de assumir o papel de qualquer tipo
 */

// Recriando o map do JavaScript

const arr: number[] = [1, 2, 3, 4, 5];

arr.map((x) => x * x);
// [1, 4, 9, 16, 25]

function nossoMap<T>(arr: T[], callback: (t: T) => T): T[] {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = callback(arr[i]);
    newArr.push(elem);
  }
  return newArr;
}

const numeros: number[] = [1, 2, 3, 4, 5];

const numerosAoQuadrado = nossoMap<number>(numeros, (numero) => {
  return numero * numero;
});

console.log("numerosAoQuadrado", numerosAoQuadrado);

const nomes: string[] = [
  "Dali",
  "Lenny",
  "Andre",
  "Yasmin",
  "Camila",
  "Mateus",
];

const nomesEmMaiusculo = nossoMap<string>(nomes, (nome) => {
  return nome.toUpperCase();
});

console.log("nomesEmMaiusculo", nomesEmMaiusculo);

function convertTypes<T, U>(t: T, callback: (t: T) => U): U {
  return callback(t);
}

const convertNumberToString = convertTypes<number, string>(5, (x) => {
  return `${x}`;
});

console.log("convertNumberToString", convertNumberToString);
