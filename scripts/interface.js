document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {


    let square = event.target
    let postion = square.id
       
   

   if(handleMove(postion)){
    

    setTimeout(()=>{
        alert("O Jogo Acabou o vencedor foi - " + playertime)
    }, 10)
    
   }
   updateSquares()
}

function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let postion = square.id
        let symbol = bord[postion]

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function restart(){
     

    bord = ['', '', '', '', '', '', '', '', '']
    playertime = 0
    gamerOver = false
    document.querySelectorAll(".square").forEach(square => square.innerHTML = "");

  }