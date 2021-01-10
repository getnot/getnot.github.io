import "../../css/PlusMinus.css";
import Player from "./Player";
import ScoreList from "./ScoreList"

function PlusMinus() {
   const sl = [2,2,-4,4];
  return (
    <div className="plus-minus">
      <div className="game-header">
        <h1>Plus-Minus</h1>
      </div>
      <div className="game-bar">
        <h1 className= "game-header-text" >Player In lead : player1</h1>
        <h1 className= "game-header-text" style = {{background : "red"} }>Player from Jhajgarh : player 4</h1>
        <button>
          <b>submit</b>
        </button>
        <button>
          <b>reset</b>
        </button>
      </div>
      <div className="players-box">
        <div className="player-box">
          <Player name="player1" />
          <ScoreList scoreList = {sl} />
        </div>
        <div className="player-box">
          <Player name="player2" />
          <ScoreList scoreList = {sl} />
        </div>
        <div className="player-box">
          <Player name="player3" />
          <ScoreList scoreList = {sl} />
        </div>
        <div className="player-box">
          <Player name="player4" />
          <ScoreList scoreList = {sl} />
        </div>
      </div>
    </div>
  );
}

export default PlusMinus;
