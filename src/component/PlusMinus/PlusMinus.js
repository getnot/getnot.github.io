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

  const [playerInLead,setPlayerInLead] = useState("");
  const [playerLosing,setPlayerLosing] = useState("");


 const updateList = (list, data) => {
  list.unshift(data);
  return list;
 }
 const popLastEntry = (list) => {
  list.shift();
  return list;
 }
   
const submitHandler = (event) => {

  checkWinner();

  setPlayer1(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore),
    tempScore:0
  }));
  setPlayer2(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore),
    tempScore:0
  }));
  setPlayer3(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore),
    tempScore:0
  }));
  setPlayer4(prev => ({ ...prev, 
    totalScore:prev.totalScore+Number(prev.tempScore),
    scoreList:updateList(prev.scoreList,prev.tempScore),
    tempScore:0
  }));
  console.log("final submit done")

  
}

const  checkWinner = () => {
  if(player1.totalScore + player1.tempScore >= 21){
    alert("player1 wins ");
    resetHandler();
  }else if(player2.totalScore + player2.tempScore >= 21){
    alert("player2 wins ");
    resetHandler();
  }else if(player3.totalScore + player3.tempScore >= 21){
    alert("player3 wins ");
    resetHandler();
  }
  else if(player4.totalScore + player4.tempScore>= 21){
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
        {playerInLead ?  <h1 className= "game-bar-text" >{playerInLead}</h1> : null}
        {playerLosing  ? <h1 className= "game-bar-text" style = {{background : "red"}}>{playerLosing}</h1> : null }
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
