var convidado = {
    nome: String, 
    idade: Number,
    vip: Boolean,
    
    checkin: function (data) {
        console.log("Registro de entrada: " + data);
    },

    checkout: function (data) {
        console.log("Registro de saída: " + data);
    },

    pagarEvento: function (valor) {
        console.log("Valor pago: " + valor);
    }
}

convidado.nome = "Fabricio";
convidado.idade = 34;
convidado.vip = false;
convidado.checkin("04/04/2022");
convidado.checkout("05/04/2022");
convidado.pagarEvento(120.50);
