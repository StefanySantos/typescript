import PromptSync from "prompt-sync";

import { imprimir1a10 } from "./forWhile/ex_for1";
import { soma1a100 } from "./forWhile/ex_while2";
import { imprimirImpar0a50 } from "./forWhile/ex_for3";
import { contagemRegressiva } from "./forWhile/ex_while4";
import { fibonacci } from "./forWhile/ex_for5";
import { diferenteDeZero } from "./forWhile/ex_while6";


const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    console.log(`
    Menu de exercicios:

    1- Imprimir números de 1 a 10
    2- Calcular a soma dos números de 1 a 100
    3- Imprimir os números ímpares de 0 a 50
    4- receba um número do usuário e mostre no console a contagem regressiva até 0.
    5- Imprimir os primeiros 10 números da sequência de Fibonacci
    6- receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

    `);

    exercicio = parseInt(prompt("Digite qual exercicio deseja executar: "));

    switch (exercicio) {
        case 1:
            imprimir1a10();
            break;

        case 2:

            soma1a100();
            break;


        case 3:

            imprimirImpar0a50();
            break;

        case 4:

            contagemRegressiva();
            break;


        case 5:

            fibonacci();
            break;

        case 6:

            diferenteDeZero();
            break;


        default:
            console.log("Digite um numero de 1 a 10");
            break;
    }

    continuar = prompt("\nDeseja continuar ver outros exercicios? Digite s para sim ou n para nao: ").toLocaleLowerCase();

} while (continuar === "s");
