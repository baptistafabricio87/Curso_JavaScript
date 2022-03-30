var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var multiplicar = function(item){
//     return item * 2;
// }
var dobrados = numeros.map(function(item){
    return item * 2;
});
console.log(dobrados);

// -------------------------------------------- //
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];
// var converter = function(item){
//     return Math.round((item - 32)*(5/9));
// }
// var celcius = fahrenheit.map(converter);
var celcius = fahrenheit.map(function(item){
    return Math.round((item - 32)*(5/9));
});
console.log(celcius);

// ------------------------------------------- //
var convidados = [
    {nome: "fabrIcio", idade: 34, vip: false},
    {nome: "miguel", idade: 3, vip: true},
    {nome: "tatiana", idade: 32, vip: true}
];
// var nomesOK = function(item){
//     return Object.assign(item, 
//         {nome: item.nome.toLocaleUpperCase()});
// };
// var convidadoNormalizado = convidados.map(nomesOK);
var convidadoNormalizado = convidados.map(function(item){
    return Object.assign(item, 
        {nome: item.nome.toLocaleUpperCase()});
});
console.log(convidadoNormalizado);
