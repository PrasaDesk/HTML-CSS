/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundscore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
    
        dice = Math.floor(Math.random() * 6) + 1;
     
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice +'.png';

        if(dice != 1){
            roundscore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundscore;
        }
        else {
                   nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    score[activePlayer] += roundscore;
    
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    
    if(score[activePlayer] > 25){
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('Winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gamePlaying = false;
    }
    
    nextPlayer();
    
    
});

function nextPlayer(){
    activePlayer !== 1 ? activePlayer = 1 :activePlayer = 0;
        roundscore = 0;
        
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score = [0,0];
    roundscore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('Winner');
    document.querySelector('.player-1-panel').classList.remove('Winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}