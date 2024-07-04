const nomes = ["Beatriz", "Bia Linda", "Bia Mara"];
nomes.forEach(function(nome){
    console.log(nome)
})
//modo mais utilizado = arrow function (flecha)
nomes.forEach((nome)=>{
    console.log(nome)
})
//duas formas iguais de escrever 
nomes.forEach(function(){})
nomes.forEach(()=>{})
function imprimeNome(nome){
    console.log(nome);
}
nomes.forEach(imprimeNome);