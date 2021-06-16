function getNumber(): number {
  return 50;
}

const getNumberArrow = (): number => {
  return 20;
};

const multiplica = (num1: number, num2: number): number => {
  return num1 * num2;
};

const parametroOpcional = (obrigatorio: number, opcional?: string) => {
  /*
   * Boa prática: sempre teste parametros opcionais
   */
  if (opcional) {
  }
};

const calculaIMC = (massa: number, altura?: number): number => {
  const alturaMedia = 1.6;

  if (!altura) {
    return massa / multiplica(alturaMedia, alturaMedia);
  }

  return massa / multiplica(altura, altura);
};

/*
 * Funções sem retorno, tipo void
 */

const valor: number = 5; // tenho um valor
let result: number;

const voidFunc = (x: number): void => {
  // quero multiplicar o valor por X
  result = valor * x;
};

/*
 * Funções assincronas e seus retornos
 */

const chamaAPI = (): Promise<number> => {
  return fetch("/api/numero").then((result) => result.json());
};

/*
 * Funções assincronas não bloqueiam a execução
 */
let numero: number;

//chamando a função
chamaAPI().then((num: number) => (numero = num));

// Numero estará vazio, pois o fluxo assincrono está executando em paralelo
console.log(numero);

const chamaAPIAsync = async (): Promise<number> => {
  const result = await fetch("/api/numero").then((result) => result.json());

  return result;
};

/*
 * Más praticas de async/await
 * 1. Chain de async/await (inception de bloqueio)
 */

const chamaAPIAsyncNumero2 = async (): Promise<number> => {
  const result = await fetch("/api/numero2").then((result) => result.json());

  return result;
};

const multiplicaAsync = async (): Promise<number> => {
  const num1 = await chamaAPIAsync();
  const num2 = await chamaAPIAsyncNumero2();

  return num1 * num2;
};

/*
 * Solução
 * 1. Chain de async/await (inception de bloqueio)
 */

const chamaAPIANumero1 = async (): Promise<number> => {
  return fetch("/api/numero").then((result) => result.json());
};

const chamaAPIANumero2 = async (): Promise<number> => {
  return fetch("/api/numero2").then((result) => result.json());
};

const multiplicaApi = async (): Promise<number> => {
  const num1 = await chamaAPIANumero1();
  const num2 = await chamaAPIANumero2();

  return num1 * num2;
};
