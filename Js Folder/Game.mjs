import { userInput } from "./Input";
import gameEngine from "./Main";
import renderScore from "./Render";
import { snakeAndFood as snake} from "./Snake";

let previousTimeStamp = 0;
const speed = 6;

// Main function to animate the snake move
function myGame(cTimeStamp) {
    window.requestAnimationFrame(myGame);
    if ((cTimeStamp - previousTimeStamp) / 1000 < 1/ speed) {
        return;
    }
    previousTimeStamp = cTimeStamp;
    snakeFood = {x:10,y:15};
    gameEngine(snake);
    

}

renderScore();
 

// Main game logics of the game 
window.requestAnimationFrame(myGame);
  userInput();

    