function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
  printMessage('Mój ruch to: ' + computerMove);
} else if (randomNumber == 2){
  computerMove = 'papier';
  printMessage('Mój ruch to: ' + computerMove);
} else if (randomNumber == 3){
  computerMove = 'nożyce';
  printMessage('Mój ruch to: ' + computerMove);
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '2') {
  playerMove = 'papier';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '3') {
  playerMove = 'nożyce';
  printMessage('Twój ruch to: ' + playerMove);
}


if (computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
} else if (playerMove == 'nieznany ruch'){
  printMessage('Wykonaj swój ruch');
}