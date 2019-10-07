function playGame(playerInput) {
  clearMessages ()
  
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
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let argComputerMove = getMoveName(randomNumber);
  let argPlayerMove = getMoveName(playerInput);

  printMessage('Mój ruch to: ' + argComputerMove);
  printMessage('Twój ruch to: ' + argPlayerMove);
  displayResult(argComputerMove, argPlayerMove);
}

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
    
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
