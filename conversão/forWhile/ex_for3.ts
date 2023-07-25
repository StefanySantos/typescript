/* 3. Faça um programa que imprima os números ímpares de 0 a 50; */
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export function imprimirImpar0a50() {
    let numero: number;

    for (let i = 1; i <= 50; i += 2) {

        const numero = i;
        console.log("O número é: " + numero);

    }
}
