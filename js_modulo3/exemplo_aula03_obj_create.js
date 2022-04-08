var pessoa1 = {
    nome: "Fabricio",
    idade: 34, 

    digaOla: function(){
        console.log("Ola tudo bem? " + this.nome); 
    }
}

var pessoa2 = {
    nome: "Fabricio",
    idade: 34, 
}

var convidado = {
    nome: 'Fabricio',
    idade: 34,
    vip: false
}

var convidados = [];
convidados.push(convidado);
novoConvidado = Object.create(convidado);
convidados.push(novoConvidado);
console.log(convidados);

