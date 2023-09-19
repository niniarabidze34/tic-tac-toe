const restartBtn = document.getElementById('restartBtn')
const boxes = Array.from(document.getElementsByClassName('box')) 
const O_MARK = "O"
const X_MARK = "X"

let gameName = document.getElementById('gameName')
let currentplayer = X_MARK
let spaces = Array(9).fill(null)

function startGame() {
    boxes.forEach(box => box.addEventListener('click', boxClickHandler))
}

function boxClickHandler(e){
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentplayer
        e.target.innerText = currentplayer

        if(playerWon() !== false){
            gameName.innerText = `${currentplayer} is the winner`
            let winning_boxes = playerWon()

            winning_boxes.map( box => boxes[box].style.backgroundColor = '#fb00ff')
            
        }

        currentplayer = currentplayer == X_MARK ? O_MARK : X_MARK
    }
}

const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWon(){
    for (const combo of winCombo) {
        let [a , b, c] = combo;

        if(spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])){
            return [a,b,c]
        }
    }
    return false
}


restartBtn.addEventListener('click', restart)

function restart(){
    spaces.fill(null);
    boxes.forEach((box) => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    gameName.innerText = 'Tic Tac Toe'

    currentplayer = X_MARK
}


startGame()