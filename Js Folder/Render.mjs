export default function renderScore(){
    let highScore = localStorage.getItem('highScore');
    if(highScore === null){
        highScoreVal =0;
        localStorage.setItem('highScore',JSON.stringify(highScoreVal));
    }

    else{
        highScoreVal = JSON.parse(highScore);
        highScoreBox.innerHTML = 'High Score:' + highScore;
    }
}