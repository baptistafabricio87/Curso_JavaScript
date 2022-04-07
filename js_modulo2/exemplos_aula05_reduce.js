var valores = [1.5, 2, 4, 10];

var calc = function(total, item, indice) {
    console.log(`T: ${total} Ind: ${indice} Item: ${item}`);
    return total = total + item;
}

var somatoria = valores.reduce(calc);
console.log(somatoria);

// -------------------------
var valores = [1.5, 2, 4, 10];
// var calc = function(total, item, indice) {
//     console.log(`T: ${total} Ind: ${indice} Item: ${item}`);
//     return total = total + item;
// }
var somatoria = valores.reduce(function(total, item, indice) {
    console.log(`T: ${total} Ind: ${indice} Item: ${item}`);
    return total + item;
}, 0);
console.log(somatoria);

// -------------------------

