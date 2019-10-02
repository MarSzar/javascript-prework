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


if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Tym razem przegrywasz!');
} else if (computerMove == playerMove){
  printMessage('Remis!');
} else {
  printMessage('Wykonaj swój ruch');
}
