var player, playerChoice, computerChoice;

// DEFINE NOME DO JOGADOR
function definePlayer(player) {
    player = prompt("Qual é o nome do jogador ? ");
    return player;
}

function message(player) {
    document.getElementById('mensagem').innerHTML = "Bem-vindo "
    + player + ", vamos começar? Pedra, Papel ou Tesoura?";
    document.getElementById('jogador-nome').innerHTML = player;
}

// Sorteia numero para jogada do computador.
function drawNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// CALCULA GANHADOR 
function calculateChoice(playerChoice, computerChoice) {
    // 0 = EMPATE
    if (playerChoice == 1 && computerChoice == 1) {
        return 0;
    } else if (playerChoice == 2 && computerChoice == 2) {
        return 0;
    } else if (playerChoice == 3 && computerChoice == 3) {
        return 0;  
        // 1 = JOGADOR
    } else if (playerChoice == 1 && computerChoice == 3) {
        return 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        return 1;
    } else if (playerChoice == 3 && computerChoice == 2) {
        return 1;
        // 2 = COMPUTADOR
    } else if (playerChoice == 3 && computerChoice == 1) {
        return 2;
    } else if (playerChoice == 1 && computerChoice == 2) {
        return 2;
    } else if (playerChoice == 2 && computerChoice == 3) {
        return 2;
    }
}

function play(choice) {
    // Escolha do jogador
    var playerChoice = choice;
    
    // Escolha do computador
    var computerChoice = drawNumber(1, 3);
    
    var winner = calculateChoice(playerChoice, computerChoice);

    return winner
}

var player = definePlayer();
alert("Bem-vindo ao Jokenpo " + player);
message(player);
document.getElementById('jogador-escolha-1').onclick = function () { play(1); }
document.getElementById('jogador-escolha-2').onclick = function () { play(2); }
document.getElementById('jogador-escolha-3').onclick = function () { play(3); }

