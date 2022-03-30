var numeros = [ 10, 18, 1, 2, 15, 16];
// var maiorQ10 = function(item) { return item > 10; }     
//     // if(item > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//
// }
var novosNumeros = numeros.filter(function(item) {
    return item > 10;
});
console.log(novosNumeros);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
var nomes = ["Bruno", "Zezinho", "Fabricio", "Miguel"];

var convidados = nomes.filter(function(item){
    return item.charAt(0) == "Z";
});

console.log(convidados);

// -- -- -- -- -- -- -- -- -- -- -- -- -- --
var numeros = [ 10, 18, 1, 2, 15, 16, 22, 27, 55, 100];
// var pares = function(item){ return !(item % 2); }
// var impares = function(item){ return item % 2; }
// var numerosPares = numeros.filter(pares);
// var numerosImpares = numeros.filter(impares);
var numerosPares = numeros.filter(function(item){
    return !(item % 2);
});
var numerosImpares = numeros.filter(function(item){
    return item % 2;
});

console.log(numerosPares);
console.log(numerosImpares);

// -- -- -- -- -- -- -- -- -- -- -- -- -- --
var filmes = [
    {tiutlo: 'Titanic', duracao: 195, nota: 7.5},
    {tiutlo: 'The Avengers', duracao: 203, nota: 9.5},
    {tiutlo: 'Mr. Bean', duracao: 90, nota: 6.5}
]
var notaCorte = 8;
var bons = filmes.filter(function(item) {
    return item.nota > notaCorte;
});

var ruins = filmes.filter(function(item) {
    return item.nota < notaCorte;
});

console.log(bons);
console.log(ruins);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
var convidados = [
    {nome: "Fabricio", idade: 34, vip: false},
    {nome: "Miguel", idade: 3, vip: true},
    {nome: "Tatiana", idade: 32, vip: true}
]
// var filtraVip = function(item) {
//     return item.vip == true;
// }
// var vips = convidados.filter(filtraVip);
var vips = convidados.filter(function(item){
    return item.vip == true;
});
console.log(vips);