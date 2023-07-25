/* 4. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */
import PromptSync from 'prompt-sync';
let prompt = PromptSync();

export function contagemRegressiva() {

    let numero:number;
    numero = parseInt(prompt("Digite um número: "));

    while (numero >= 0) {

        console.log(numero);
        numero--;

    }
}

