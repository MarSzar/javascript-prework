function printMessage(msg){
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  } 
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' ){ 
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Tym razem przegrywasz :(');
  } else if ( argComputerMove == argPlayerMove ){
      printMessage('Remis!');
  } else {
      printMessage('Wykonaj swój ruch');
  }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let randomNumber = Math.floor(Math.random() * 3 + 1);
  
console.log('Wylosowana liczba to: ' + randomNumber);

let playerMove = getMoveName(playerInput);
  
let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);
  
console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);