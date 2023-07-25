/* 1. Imprime de 1 a 10 */
import PromptSync from 'prompt-sync';

let prompt = PromptSync();

export function imprimir1a10() {
    let numero : number ;

    console.log("Imprimir números de 1 a 10");

    for (let i = 1; i <= 10; i++) {

        const numero = i;
        console.log("O número é: " + numero);

    }
}
