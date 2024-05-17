const gameBoard = (function (){


    // Setup the basic stuff like game board and game players.
    let theGameBoard = ['','','','','','','','',''];
    const getBoard = function(){ return theGameBoard};
    const resetGameBoard = function() {
        theGameBoard = ['','','','','','','','',''];
    }

    
    return {getBoard , resetGameBoard};
    


})();



const displayModule = (function(){



})();


function thePlayer(name,score,type,first){
    return {name ,score,type,first};

}

// Start the game
function startGame(){
    // Max turns is 9.
    
    const player1 = thePlayer('Aerion','','O');
    const player2 = thePlayer('Nova','','X');


    const theFirstPlayer = determineFirstPlayer(player1,player2);
    const theSecondPlayer = theFirstPlayer === player1 ? player2 : player1
    console.log(`This is the first ${theFirstPlayer.name} player`);

    gameBoard.resetGameBoard();

    const theGame = Game(theFirstPlayer, theSecondPlayer);
    //console.log(theGame.getCurrentPlayer());
    //console.log(theGame.getOtherPlayer());
    //let {playerMove , playerType} = theGame.getCurrentPlayerMove();
    //gameBoard.getBoard()[playerMove] = playerType;
    
    //console.log(gameBoard.getBoard());
    
    // Get the board to be filled with current player move each turn
    
    gameBoard.getBoard().forEach(
        theGame.oneTurnGameActions
        
    )

    
    // Check win condition before proceeding to the next turn
    // Ensure input is validated.
    

    
    // Who starts first? Write a function for who starts first.
    // Write a function that allows the player to interact with the game
    //theGame.getCurrentPlayerMove();
    
}



// This function will be the logic for the game.


function Game(player1,player2){
    
    
    
    let turnCount = 1;
    const getCurrentPlayer = function(){
        if (player1.first === true){
            return player1;
        }
        else{
            return player2;
        }
        
    }



    const getOtherPlayer = function(){
        if (player2.first === true){
            return player2;
        }
        else {
            return player1;
        }
    }

    
    

    const getTurnCount = () => turnCount;

    const increaseTurnCount = () => {
        turnCount++;
        // Also need to change the flag for each player that determines whether the player is the curret player of this turn.
        
        //getCurrentPlayer().first  = false;
        if (player1.first === true){
            // Player1 turn
            console.log(getCurrentPlayer().first,`${getCurrentPlayer().name}`);
            console.log(getOtherPlayer().first,'bye');
            player2.first = true;
            player1.first = false;
            console.log('111')
        }
        else if (player2.first === true){
            console.log(getCurrentPlayer().first,`${getCurrentPlayer().name}`);
            console.log(getOtherPlayer().first,'bye');
            player2.first = false;
            player1.first = true;
            console.log('222')
        }
        
       

        
    };

    const getCurrentPlayerMove = function(){
        console.log(`What is your move ${getCurrentPlayer().name}?`);
        
        // Has to be number. Minus of 1 so that the input matches the array indexes.
        let playerMove = Number(prompt(`What is your move ${getCurrentPlayer().name}. You are ${getCurrentPlayer().type}. Enter from 1 to 9.`) - 1)


        let playerType = getCurrentPlayer().type;
        return {playerMove , playerType};
    }


    const oneTurnGameActions = function(){
        let {playerMove , playerType} = getCurrentPlayerMove();
        gameBoard.getBoard()[playerMove] = playerType;
    
        console.log(gameBoard.getBoard());
    
    
        console.log(checkWinCondition())
        // If win condition return true , stop game immediately.
        increaseTurnCount()

    }

    return {getCurrentPlayer , getOtherPlayer , getTurnCount , increaseTurnCount , getCurrentPlayerMove , oneTurnGameActions};
};


// Check for win condition

function checkWinCondition(){

    console.log(gameBoard.getBoard());
    // Loop through array for win conditions
    
    let indicesX = [];
    let indicesO = [];
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];
    // Check for X 

    for (let i = 0; i < gameBoard.getBoard().length; i++){
        if (gameBoard.getBoard()[i] === 'X') indicesX.push(i+1);
    }

    for (let i = 0; i < gameBoard.getBoard().length; i++){
        if (gameBoard.getBoard()[i] === 'O') indicesO.push(i+1);
    }

 
    console.log(indicesX);
    console.log(indicesO);

    
    for (let i = 0; i < winCombos.length; i++){
        const winCombo = winCombos[i];
        if (winCombo.every(num => indicesO.includes(num))){
            return true;

        }
        return false;
    }


    
    



}


function determineFirstPlayer(player1,player2) {
    const randomNumber = Math.floor(Math.random() * 2);

    if ( randomNumber === 0 ){
        player1.first = true;
        player2.first = false;
        return player1;
    }
    else {
        player2.first = true;
        player1.first = false;
        return player2;
    }

}

// Have a game module that has functions for turns , check the win conditions every round.
// Try to play the tic tac toe on console first.



startGame();