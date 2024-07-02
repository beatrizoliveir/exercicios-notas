const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
notas.forEach(function(nota){
    somaDasNotas += nota;
});
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);

//Podemos perceber que o forEach tem uma lógica 
// parecida com o for of, ele fornece diretamente o valor 
//do elemento do array, que nesse caso nomeamos de nota,
//e ele também sempre vai do início ao fim do array.