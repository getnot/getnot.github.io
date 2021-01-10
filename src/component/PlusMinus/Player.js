function Player(props) {
  return (
    <div className="player">
      <div style={{margin: "10px"}}>PlayerName : {props.name}</div>
      <div style={{margin: "10px"}}>current score : {!props.score ? 0 : props.score}</div>
      <form style={{margin: "10px"}}> 
          Enter score : <input type="Number" placeHolder="please enter points" required/>
      </form>
    </div>
  );
}

export default Player;
