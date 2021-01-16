function ScoreList(props) {
  
  var sl = props.scoreList;

  return (
    <div className="scoreList">
      <ul>
        {sl.reverse().map((item,index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default ScoreList;
