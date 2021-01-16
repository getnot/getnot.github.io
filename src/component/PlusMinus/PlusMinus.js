import "../../css/PlusMinus.css";
import Player from "./Player";
import ScoreList from "./ScoreList"
import sum from "../helper/SumHelper"
import React, {useState} from 'react';

function PlusMinus() {

  const [player1, setPlayer1] = useState({
    name:"player1",
    tempScore:0,
    totalScore:0,
    scoreList:[]
  });
  const [player2, setPlayer2] = useState({
    name:"player2",
    tempScore:0,
    totalScore:0,
    scoreList:[]
  });
  const [player3, setPlayer3] = useState({
    name:"player3",
    tempScore:0,
    totalScore:0,
    scoreList:[]
  });
  const [player4, setPlayer4] = useState({
    name:"player4",
    tempScore:0,
    totalScore:0,
    scoreList:[]
  });


 const updateList = (list, data) => {
  list.push(data);
  return list;
 }
 const popLastEntry = (list, data) => {
  list.pop(data);
  return list;
 }
   
const submitHandler = (event) => {

  setPlayer1(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore)
  }));
  setPlayer2(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore)
  }));
  setPlayer3(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore)
  }));
  setPlayer4(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore)
  }));
  console.log("final submit done")
  checkWinner()
}

const  checkWinner = () => {
  if(player1.totalScore >= 21){
    alert("player1 wins ");
    resetHandler();
  }
  if(player2.totalScore >= 21){
    alert("player2 wins ");
    resetHandler();
  }
  if(player3.totalScore >= 21){
    alert("player3 wins ");
    resetHandler();
  }
  if(player4.totalScore >= 21){
    alert("player4 wins ");
    resetHandler();
  }  
  
}

const reverseLastEntry = (event) => {

  setPlayer1(prev => ({ ...prev,
    totalScore:prev.totalScore - prev.scoreList[prev.scoreList.length-1], 
    scoreList:popLastEntry(prev.scoreList,prev.tempScore)
  }));
  setPlayer2(prev => ({ ...prev, 
    totalScore:prev.totalScore-prev.scoreList[prev.scoreList.length-1], 
    scoreList:popLastEntry(prev.scoreList,prev.tempScore)
  }));
  setPlayer3(prev => ({ ...prev, 
    totalScore:prev.totalScore-prev.scoreList[prev.scoreList.length-1], 
    scoreList:popLastEntry(prev.scoreList,prev.tempScore)
  }));
  setPlayer4(prev => ({ ...prev, 
    totalScore:prev.totalScore-prev.scoreList[prev.scoreList.length-1], 
    scoreList:popLastEntry(prev.scoreList,prev.tempScore)
  }));
  console.log("final submit done")
}

const handleTempScoreChangePlayer1 = (event) => {
  console.log(event.target.value);
  setPlayer1(prev => ({ ...prev, 
    tempScore:Number(event.target.value)
  }));
}

const handleTempScoreChangePlayer2 = (event) => {
  console.log(event.target.value);
  setPlayer2(prev => ({ ...prev, 
    tempScore:Number(event.target.value)
  }));
}

const handleTempScoreChangePlayer3 = (event) => {
  console.log(event.target.value);
  setPlayer3(prev => ({ ...prev, 
    tempScore:Number(event.target.value)
  }));
}

const handleTempScoreChangePlayer4 = (event) => {
  console.log(event.target.value);
  setPlayer4(prev => ({ ...prev, 
    tempScore:Number(event.target.value)
  }));
}



const resetHandler = (e) => {
  setPlayer1(prev => ({ ...prev, 
    totalScore:0,
    tempScore:0,
    scoreList:[]
  }));
  setPlayer2(prev => ({ ...prev, 
    totalScore:0,
    tempScore:0,
    scoreList:[]
  }));
  setPlayer3(prev => ({ ...prev, 
    totalScore:0,
    tempScore:0,
    scoreList:[]
  }));
  setPlayer4(prev => ({ ...prev, 
    totalScore:0,
    tempScore:0,
    scoreList:[]
  }));
   
  console.log("reset done")
}



  return (
    <div className="plus-minus">
      <div className="game-header">
        <h1>Plus-Minus</h1>
      </div>
      <div className="game-bar">
        <h1 className= "game-bar-text" >player 1</h1>
        <h1 className= "game-bar-text" style = {{background : "red"}}>player 4</h1>
        <button onClick={submitHandler}>
          <b>submit</b>
        </button>
        <button onClick={reverseLastEntry}>
          <b>remove last entry</b>
        </button>
        <button onClick={resetHandler}>
          <b>reset</b>
        </button>
      </div>
      <div className="players-box">
        <div className="player-box">
          <Player 
            name={player1.name} 
            totalScore={player1.totalScore} 
            tempScore={player1.tempScore}
            changeHandler={handleTempScoreChangePlayer1}/>
          <ScoreList scoreList = {player1.scoreList} />
        </div>
        <div className="player-box">
          <Player 
                     name={player2.name} 
                     totalScore={player2.totalScore} 
                     tempScore={player2.tempScore}
                     changeHandler={handleTempScoreChangePlayer2}/>
                    
          <ScoreList scoreList = {player2.scoreList} />
        </div>
        <div className="player-box">
          <Player            name={player3.name} 
            totalScore={player3.totalScore} 
            tempScore={player3.tempScore}
            changeHandler={handleTempScoreChangePlayer3}/>
          <ScoreList scoreList = {player3.scoreList} />
        </div>
        <div className="player-box">
          <Player            name={player4.name} 
            totalScore={player4.totalScore} 
            tempScore={player4.tempScore}
            changeHandler={handleTempScoreChangePlayer4}/>
          <ScoreList scoreList = {player4.scoreList} />
        </div>
      </div>
    </div>
  );
}

export default PlusMinus;
