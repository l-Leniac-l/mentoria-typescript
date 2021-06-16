let str: string = "Chessus";

let num: number = 10;

let bool: boolean = true;

let und: undefined = undefined;

let nil: null = null;

let an: any = "string";

let unk: unknown = "unknown";

/*
 * Operações com o tipo unknown só serão permitidas
 *  caso um type check seja efetuado
 */

if (typeof unk === "string") {
  console.log(unk + num);
}
