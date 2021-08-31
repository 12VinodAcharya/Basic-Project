// Game Varibles and Constants
let snakeArr = [{ x: 9, y: 14 }]
let snakeFood = { x: 15, y: 9 }
let snakeDir = { x: 0, y: 0 };

let previousTimeStamp = 0;
let score = 0;
let snakeSpeed = 7;
let highScoreVal;

function Main(currentTime) {
    window.requestAnimationFrame(Main);
    // console.log(currentTime);
    if ((currentTime - previousTimeStamp) / 1000 < 1 / snakeSpeed)
        return;

    // console.log(currentTime);
    previousTimeStamp = currentTime;
    gameEngine();
}

function isCollide(snakeArr) {
    // What to to when snake bump within itself or with the walls of the board.
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            console.log('Game over');
            return true;


        }
    }

    if (snakeArr[0].x >= 21 || snakeArr[0].x <= 0 || snakeArr[0].y >= 21 || snakeArr[0].y <= 0) {
        return true;

    }
    return false;

}

function gameEngine() {


    if (isCollide(snakeArr)) {
        snakeDir = { x: 0, y: 0 };
        alert("Game Over!Press any key to continue the game");
        snakeArr = [{ x: 9, y: 14 }];
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
    }



    // When the snake has eaten the food, regenerate the food and increment the snake body in the direction of food
    if (snakeArr[0].x === snakeFood.x && snakeArr[0].y === snakeFood.y) {
        score += 1;

        if (score > highScore) {
            highScoreVal = score;
            localStorage.setItem('highScore', highScoreVal);
            highScoreBox.innerHTML = "High Score: " + highScoreVal;
        }
        scoreBox.innerHTML = "Score:" + score
        snakeArr.unshift({ x: snakeArr[0].x + snakeDir.x, y: snakeArr[0].y + snakeDir.y });
        let a = 1;
        let b = 19;

        // Generating the snake food in random direction within the  2nd and 18th grid columns
        snakeFood = { x: Math.round(a + (b - a + 1) * Math.random()), y: Math.round(a + (b - a + 1) * Math.random()) };


    }







    // Generate the snake on the game board
    gameBoard.innerHTML = "";
    snakeArr.forEach((element, index) => {
        let snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = element.y;
        snakeElem.style.gridColumnStart = element.x;

        if (index === 0) {
            snakeElem.classList.add('head');
        } else {
            snakeElem.classList.add('snake');
        }
        gameBoard.appendChild(snakeElem);
    });



    // Moving the snake body within the game board

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i] };

    }

    snakeArr[0].x += snakeDir.x;
    snakeArr[0].y += snakeDir.y;



    // Generate the food on the game board
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = snakeFood.y;
    foodElement.style.gridColumnStart = snakeFood.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);




}

// Rendering the high score
let highScore = localStorage.getItem("highScore");
if (highScore === null) {
    highScoreVal = 0;
    localStorage.setItem('highScore', highScoreVal);
} else {
    highScoreVal = parseInt(highScore);
    highScoreBox.innerHTML = "High Score: " + highScore;
}


window.requestAnimationFrame(Main);

// Main Logics starts here
window.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
        case "ArrowRight":
            snakeDir.x = 1;
            snakeDir.y = 0;

            break;

        case "ArrowLeft":
            snakeDir.x = -1;
            snakeDir.y = 0;

            break;

        case "ArrowUp":
            snakeDir.x = 0;
            snakeDir.y = -1;
            break;

        case "ArrowDown":
            snakeDir.x = 0;
            snakeDir.y = 1;
            break;

        default:
            break;
    }

})