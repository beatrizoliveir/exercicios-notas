const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma);

//um pouco mais legível
lista.forEach(numero => {
    soma = soma + numero
});
console.log(soma)