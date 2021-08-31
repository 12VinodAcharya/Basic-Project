// Game variables:
const foodSound = new Audio('../music/food.mp3');
const gameoverSound = new Audio('../music/gameover.mp3');
const bgMusic = new Audio('../music/game-music.mp3');
let score = 0;
function isCollide(sArr) {
    for (let i = 1; i < sArr.length; i++) {
        if (snakeArr[0].x === snakeArr[i].x && snakeArr[0].y === snakeArr[i].y) {
            return true;

        }
        if (snakeArr[0].x >= 19 || snakeArr[0].x <= 0 || snakeArr[0].y >= 19 || snakeArr[0].y <= 0) {
            return true;
        }

    }

}
export default function gameEngine(displaySnakeAndFood) {
    // Over the game when snake either bump on itself or on the wall of game board
    if (isCollide(snakeArr)) {
        gameoverSound.play();
        bgMusic.pause();
        snakeDirection = { x: 0, y: 0 };
        score = 0;
        scoreBox.innerHTML = 'Score:' + score;
        console.log('Game over. Press Enter to continue play the game');
        snakeArr = [{ x: 8, y: 13 }];

    }
    if (snakeArr[0].x === foodArr.x && snakeArr[0].y === foodArr.y) {
        foodSound.play();
        score += 1;
        if (highScoreVal > score) {
            highScoreVal = score;
            localStorage.setItem('highScore', JSON.stringify(highScoreVal));
            highScoreBox.innerHTML = "High Score:" + highScoreVal;
        }

        scoreBox.innerHTML = 'Score:' + score;

        snakeArr.unshift({ x: snakeArr[0].x + snakeDirection.x, y: snakeArr[0].y + snakeDirection.y });
        let a = 2, b = 17;
        foodArr = { x: Math.round(a + (b - a + 1) * Math.random()), y: Math.round(a + (b - a + 1) * Math.random()) };
    }

    // Moving the snake in the direction of food
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += snakeDirection.x;
    snakeArr[0].y += snakeDirection.y;

    displaySnakeAndFood();



}
