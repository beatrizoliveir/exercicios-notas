const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
notas.forEach(function(nota) {
    somaDasNotas = somaDasNotas + nota;
});
console.log(somaDasNotas);

// Essa é uma forma de usar parâmetros um pouco diferente das que estamos acostumados.
// Porque não é nós que estamos definindo o valor desse parâmetro rota, quem está definindo 
// ele é a lógica interna do forEach.