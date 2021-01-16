function ScoreList(props) {
  return (
    <div className="scoreList">
      <ul>
        {props.scoreList.reverse().map((item) => (<li>{item}</li>))}
      </ul>
    </div>
  );
}

export default ScoreList;
