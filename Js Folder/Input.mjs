const moveSound = new Audio('../music/move.mp3');
let snakeDirection = { x: 0, y: 0 };

// Changing the direction of snake according to the key pressed by the user

 export function userInput() { 


    window.addEventListener('keydown', callback);

    function callback(event) {
        moveSound.play();
        //  console.log(event.key) --> logs the present state of key pressed by the user, to the console
        switch (event.key) {
            case "ArrowUp":
                snakeDirection.x = 0;
                snakeDirection.y = -1;
                break;
            case "ArrowDown":
                snakeDirection.x = 0;
                snakeDirection.y = 1;
                break;
            case "ArrowRight":
                snakeDirection.x = 1;
                snakeDirection.y = 0;
                break;
            case "ArrowLeft":
                snakeDirection.x = -1;
                snakeDirection.y = 0;
                break;

        }


    }
}