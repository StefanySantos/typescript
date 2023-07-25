/* 5. Imprimir os primeiros 10 números da sequência de Fibonacci. */
import PromptSync from 'prompt-sync';
let prompt = PromptSync();

export function fibonacci() {
   let num1:number = 0;
   let num2:number = 1;
   let soma:number;

   for (var i = 0; i < 10; i++) {
      soma = num1;
      num1 = num2;
      num2 = num1 + soma;

      console.log(num2);


   }
}

