//1. select all squares here

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')

//score will change in game 
const score = document.querySelector('#score')

//start game 
let result = 0
let hitPosition
let currentTime = 60
let timerId = null

//1. first function - randomly selecting a square on grid - *Remove any class from divs 
//use arrow function to remove mole from all squares of the grid 

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    //define a random position on grid by using math.random and multiply by number of squares in grid 
    //use math.floor to round down to the nearest integers * random number is always under or equivalent to 9
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    //once defined, add the class of mole 
    randomSquare.classList.add('mole')

    //assign the id of the random positionPosition to hitPosition for us to use later
    hitPosition = randomSquare.id


}

//use arrow function for each and an event listener to write if statement 
//when hit mouseup - hit mouse on element, when id equals hitPosition we win and add 1 point to result, and use textContent to visually display in browswer 

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


//function that will move the mole 

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

// invoke function to check if mole is moving in random squares:
moveMole()
//add to top let currentTime = timeLeft.textContent

//count down function if 0 = gameover

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)