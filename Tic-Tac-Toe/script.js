const gameBoard = (function (){

    const gridHTML = `
        <div class="grid">
            <div class="cell" id="1" data-clicked="false"></div>
            <div class="cell" id="2" data-clicked="false"></div>
            <div class="cell" id="3" data-clicked="false"></div>
            <div class="cell" id="4" data-clicked="false"></div>
            <div class="cell" id="5" data-clicked="false"></div>
            <div class="cell" id="6" data-clicked="false"></div>
            <div class="cell" id="7" data-clicked="false"></div>
            <div class="cell" id="8" data-clicked="false"></div>
            <div class="cell" id="9" data-clicked="false"></div>
        </div>
    `;

    // Setup the basic stuff like game board and game players.
    let theGameBoard = ['','','','','','','','',''];
    const getBoard = function(){ return theGameBoard};
    const resetGameBoard = function() {
        theGameBoard = ['','','','','','','','',''];
    }
    let gameEnd = false;
    
    const getGameEnd = function() {return gameEnd};
    return {getBoard , resetGameBoard , getGameEnd , gridHTML};
    


})();



const displayModule = (function(winner){

    const winnerMessage = document.getElementById('winnerMessage')
    winnerMessage.style.display = 'block';
    const winMessageDetail = document.getElementById('winMessageDetail');
    winMessageDetail.textContent = `Congrats ${winner} you have won the TIC-TAC-TOE Game`

});


function thePlayer(name,score,type,turn,win){
    
    return {name ,score,type,turn,win};

}


function inputPlayerNames(){
    let player1Input = document.getElementById('player1Input').value;
    let player2Input = document.getElementById('player2Input').value;
    if (player1Input === '' && player2Input === ''){
        alert("Please enter something for the player Names");
    }
    else if (player1Input !== '' && player2Input !== ''){
        document.getElementsByClassName('displayPlayerName')[0].innerHTML = 
        `<div><h2>Player 1 Name</h2><h2 id="player1NameDisplay">${player1Input}</h2></div> <div><h2>Player 2 Name</h2><h2 id="player2NameDisplay">${player2Input}</h2></div>`        
        document.getElementById('buttonDiv').innerHTML = ''

    }
    
}



// Start the game
function startGame(playerName1, playerName2){
    // Max turns is 9.
    
    const player1 = thePlayer(playerName1,'','O');
    const player2 = thePlayer(playerName2,'','X');


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
    
    

    // for(let i = 0; i < gameBoard.getBoard().length; i++){
    //     const item = gameBoard.getBoard()[i]
    //     theGame.oneTurnGameActions(item);
    //     if (gameBoard.gameEnd === true){
    //         console.log(`Game has ended because player has won. The winner is ${player1.win && !player2.win ? player1.name : player2.name} `)
    //         break;
    //     }
    // }

    //Convert the code to HTML now.

    const htmlGridCells = document.querySelectorAll("div.cell");
    console.log(htmlGridCells);
    htmlGridCells.forEach( cell => {
        cell.addEventListener('click', e => {
            // Add the logic for each player now
            if (player1.turn === true){
                if (cell.dataset.clicked === 'false'){
                    console.log(`${player1.name} turn`);

                    // Assign player move into gameboard array
                    gameBoard.getBoard()[e.target.id - 1] = player1.type;
                    console.log(gameBoard.getBoard())

                    // Styling of board once player clicks.
                    cell.textContent = player1.type;

                    // Set it so that cells cant be clicked again after being clicked once.
                    cell.dataset.clicked = 'true'

                    // Next Player Turn
                    player1.turn = false;
                    player2.turn = true;
                }
                

            }
            else if (player2.turn === true){
                if (cell.dataset.clicked === 'false'){
                    console.log(`${player2.name} turn`);
                    console.log(e.target.id);

                    // Assign player move into gameboard array
                    gameBoard.getBoard()[e.target.id - 1] = player2.type;
                    console.log(gameBoard.getBoard())

                    // Styling of board once player clicks.
                    cell.textContent = player2.type;

                    // Set it so that cells cant be clicked again after being clicked once.
                    cell.dataset.clicked = 'true'

                    // Next Player Turn
                    player2.turn = false;
                    player1.turn = true;
                }
                
            }
            //  CHeck win con to end the game
            if (checkWinCondition(player1,player2)){
                //console.log(`${player1.win && !player2.win ? player1.name : player2.name}`);
                
                if(player1.win === true){
                    console.log(player2.name, player2.win , 'wins');

                }
                

                // Lock all cells
                htmlGridCells.forEach(cell => cell.dataset.clicked = 'true');
                
                displayModule(player1.win && !player2.win ? player1.name : player2.name)
                return;
            };
            
        })
    })
    
    // Check win condition before proceeding to the next turn
    // Ensure input is validated.
    

     
    
    
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
            console.log(getCurrentPlayer().turn,`${getCurrentPlayer().name}`);
            //console.log(getOtherPlayer().first,'bye');
            player2.turn = true;
            player1.turn = false;
            console.log('111')
        }
        else if (player2.first === true){
            console.log(getCurrentPlayer().turn,`${getCurrentPlayer().name}`);
            //console.log(getOtherPlayer().first,'bye');
            player2.turn = false;
            player1.turn = true;
            console.log('222')
        }
        
       

        
    };

    const getCurrentPlayerMove = function(){
        console.log(`What is your move ${getCurrentPlayer().name}?`);
        
        // Has to be number. Minus of 1 so that the input matches the array indexes.
        //let playerMove = Number(prompt(`What is your move ${getCurrentPlayer().name}. You are ${getCurrentPlayer().type}. Enter from 1 to 9.`) - 1)


        let playerType = getCurrentPlayer().type;
        return {playerMove , playerType};
    }


    const oneTurnGameActions = function(){
        let {playerMove , playerType} = getCurrentPlayerMove();
        gameBoard.getBoard()[playerMove] = playerType;
    
        console.log(gameBoard.getBoard());
    
    
        if(checkWinCondition()){
            console.log(player1.name,player2.name);
            console.log(`${player1.name} , ${player1.win}`);
            console.log(`${player2.name} , ${player2.win}`);
            if (player1.win === true){
                console.log(`${player1.name} won`);
                gameBoard.gameEnd = true;
                
                return;
            }
            else{
                console.log(`player 2 ${player2.name} won`)
                gameBoard.gameEnd = true;
                return;
            }
        }
        // If win condition return true , stop game immediately.
        increaseTurnCount()

    }

    return {getCurrentPlayer , getOtherPlayer , getTurnCount , increaseTurnCount , getCurrentPlayerMove , oneTurnGameActions};
};


// Check for win condition

function checkWinCondition(player1,player2){

    console.log(gameBoard.getBoard());
    // Loop through array for win conditions
    
    let indicesX = [];
    let indicesO = [];
    const winCombos = [
        [1, 2, 3],
        [1, 4, 7],
        [4, 5, 6],
        [7, 8, 9],
        [2, 5, 8],
        [3, 5, 7],
        [3, 6, 9],
        [1, 5, 9]
    ];


    
    // Check for X 

    for (let i = 0; i < gameBoard.getBoard().length; i++){
        if (gameBoard.getBoard()[i] === 'X') indicesX.push(i+1);
    }

    for (let i = 0; i < gameBoard.getBoard().length; i++){
        if (gameBoard.getBoard()[i] === 'O') indicesO.push(i+1);
    }

 
    //console.log(indicesX);
    //console.log(indicesO);

    
    // for (let i = 0; i < winCombos.length; i++){
    //     const winCombo = winCombos[i];
    //     console.log(winCombo);
    //     if (winCombo.every(num => indicesO.includes(num))){
    //         return true;

    //     }
    //     else{
    //         return false;
    //     }
        
    // }


    for (let i = 0; i < winCombos.length; i++){
        const winCombo = winCombos[i];
        if (winCombo.every(num => indicesO.includes(num))){
            player1.win = true;
            player2.win = false;
            console.log('hi');
            return true;
        }

        if (winCombo.every(num1 => indicesX.includes(num1))){
            player1.win = false;
            player2.win = true;
            console.log('hello');
            return true;
        
        }
        //console.log(winCombo);
        //console.log('Hello')
        //console.log(indicesO)
        
    }
    return false;


    
    



}


function determineFirstPlayer(player1,player2) {
    const randomNumber = Math.floor(Math.random() * 2);

    if ( randomNumber === 0 ){
        player1.turn = true;
        player2.turn = false;
        return player1;
    }
    else {
        player2.turn = true;
        player1.turn = false;
        return player2;
    }

}

// Have a game module that has functions for turns , check the win conditions every round.
// Try to play the tic tac toe on console first.



function startGameBtn(){
    let player1Name = document.getElementById('player1NameDisplay').innerText;
    let player2Name = document.getElementById('player2NameDisplay').innerText;
    document.getElementById('gridHide').style.display = 'block';
    startGame(player1Name , player2Name);
}

function restartGameBtn(){
    let player1Name = document.getElementById('player1NameDisplay').innerText;
    let player2Name = document.getElementById('player2NameDisplay').innerText;
    gameBoard.resetGameBoard()
    document.getElementById('gridHide').innerHTML = gameBoard.gridHTML;
    startGame(player1Name , player2Name);
}