const nome = "Valter Lindo"; //variável string e não array
let nomemaiusculas = ""; // inicialização

for (let i = 0; i <nome.length; i++) {
    nomemaiusculas = nomemaiusculas + nome[i].toUpperCase()
}
  console.log(nomemaiusculas) // Valter