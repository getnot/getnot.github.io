function ScoreList(props) {
  return (
    <div className="scoreList">
      <ul>
        {props.scoreList.map((item) => (<li>{item}</li>))}
      </ul>
    </div>
  );
}

export default ScoreList;
