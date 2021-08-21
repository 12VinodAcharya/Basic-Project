let snakeFood = {x:10,y:15};
let snakeArr = [{x:8, y:13}];

// Displaying the snake and food
 export function snakeAndFood(){
      let gameBoard = document.getElementById('board');
      gameBoard.innerHTML = '';
      snakeArr.forEach((value,index)=>{
          let snakeElem = document.createElement('div');
          snakeElem.style.gridRowStart = value.y;
          snakeElem.style.gridColumnStart = value.x;
          if(index===0){
              snakeElem.classList.add('head');
          }

          else{
              snakeElem.classList.add('snake');
          }
          gameBoard.appendChild(snakeElem);
      })

      let foodElem = document.createElement('div');
      foodElem.style.gridRowStart = snakeFood.y;
      foodElem.style.gridColumnStart = snakeFood.x;
      gameBoard.appendChild(foodElem);
 }