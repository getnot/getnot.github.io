import React, {useState} from 'react';

function Player(props) {

  // const [playerTempScore, setPlayerTempScore] = useState(0);

  // need to set this in class in case of class component

  // const handleChange = (event) => {
  //     // this.setState({scr: event.target.value});
  //     console.log(event.target.value);
  //     // setPlayerTempScore(Number(event.target.value));
  //     props.player.tempScore=Number(event.target.value);

  // }

  const submitHandler = (event) => {
    // props.scoreList.push=playerTempScore;
    // console.log(props.scoreList)
    event.preventDefault();
}

  return (
    <div className="player">
      <div>Player Name : {props.name}</div>
      <div>total score : {props.totalScore}</div>
      {/* <form onSubmit={submitHandler}>  */}
          Enter score : <input 
          type="Number" 
          value={props.tempScore === 0 ? "" : props.tempScore} 
          placeholder="please enter points" 
          required
          max={11}
          onChange={props.changeHandler}/>
      {/* </form> */}
    </div>
  );
}

export default Player;
