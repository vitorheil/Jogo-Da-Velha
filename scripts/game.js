let bord = ['', '', '', '', '', '', '', '', '']
let playertime = 0
let symbols = ['o', 'x']
let gamerOver = false
 

function handleMove(postion) {

    if (gamerOver) {
        return
    }

    if (bord[postion] == '') {
        bord[postion] = symbols[playertime]

        gamerOver = isWin()

        if (gamerOver == false) {
           
           playertime = (playertime == 0)?1:0

        }
    }

    return gamerOver
}

function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 2],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 3, 6],
        [3, 4, 5],
    ]

    for (let i = 0; i < winStates.length; i++) {

        let seq = winStates[i];

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (bord[pos1] == bord[pos2] &&
            bord[pos1] == bord[pos3] &&
            bord[pos1] != '') {

            return true
        }

    }

    return false
}


