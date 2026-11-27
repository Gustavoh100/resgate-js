import  { aparelhos } from './banco.mjs';

const android = aparelhos.filter(item => item.so === 'Android');
console.log(android);

const nomesModelos = android.map(item => item.modelo);
// console.log(nomesModelos);

const Infravermelho = aparelhos.find(item => item.sensores.includes('infravermelho'));
// console.log(Infravermelho);

const Baratos = aparelhos.filter(item => item.preco < 2000);
//  console.log(Baratos);













