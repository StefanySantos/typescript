/* 2. Calcular a soma dos números de 1 a 100 utilizando a estrutura
while. */

import PromptSync from 'prompt-sync';
let prompt = PromptSync();



export function soma1a100() {
    let resultado:number = 0;
    let contador:number = 1;

    while (contador <= 100) {
        resultado = resultado + contador;

        contador++
        console.log(resultado);
    }
}
