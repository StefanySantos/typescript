/* 10. Faça um programa que receba um número do usuário e continue
a pedir o número se o numero for diferente de 0. */
import PromptSync from 'prompt-sync';
let prompt = PromptSync();


export function diferenteDeZero() {
    let numero:number;

    do {

        numero = parseInt(prompt("Digite um numero: "));


    } while (numero != 0);
}
