var playerName, playerChoice, computerChoice;
var playerScore = 0, computerScore = 0;
// DEFINE NOME DO JOGADOR E BOAS VINDAS
function definePlayer(playerName) {
    playerName = prompt("Qual é o nome do jogador ? ");
    document.getElementById('mensagem').innerHTML = "Bem-vindo "
        + playerName + ", vamos começar? Pedra, Papel ou Tesoura?";
    document.getElementById('jogador-nome').innerHTML = playerName;
    return playerName;
}

// EXIBE GANHADOR
function displayWinner(winner) {
    document.getElementById('mensagem').innerHTML = winner;
    document.getElementById('jogador-pontos').innerHTML = playerScore;
    document.getElementById('computador-pontos').innerHTML = computerScore;
}

// ESCOLHA DO COMPUTADOR
function drawNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectPlayer(witchPlayer, choice) {
    document.getElementById(witchPlayer + '-escolha-' + choice).classList.add('selecionado');
}

function deselectPlayer(witchPlayer, choice) {
    document.getElementById(witchPlayer + '-escolha-' + choice).classList.remove('selecionado');
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

// FUNCAO PRINCIPAL
function play(choice) {
    // ESCOLHA DO JOGADOR
    var playerChoice = choice;
    selectPlayer('jogador', playerChoice);
    // ESCOLHA DO COMPUTADOR
    var computerChoice = drawNumber(1, 3);
    selectPlayer('computador', computerChoice);
    // DEFINE VENCEDOR
    var winner = calculateChoice(playerChoice, computerChoice);
    if (winner == 0) {
        displayWinner('Empate');
    } else if (winner == 1) {
        playerScore++;
        displayWinner('Ponto para o ' + playerName);
    } else if (winner == 2) {
        computerScore++;
        displayWinner('Ponto para o Computador');
    }
    setTimeout(function () {
        deselectPlayer('jogador', playerChoice);
        deselectPlayer('computador', computerChoice);
        displayWinner('Boa ' + playerName + '. Escolha outra opção acima...')
    }, 1500);
}

var playerName = definePlayer();
alert("Bem-vindo ao Jokenpo " + playerName);
document.getElementById('jogador-escolha-1').onclick = function () { play(1); }
document.getElementById('jogador-escolha-2').onclick = function () { play(2); }
document.getElementById('jogador-escolha-3').onclick = function () { play(3); }
