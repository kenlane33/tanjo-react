function VideoCard(props) {
  return (
    <div className="column large-4 medium-6 small-12 card-1-column">
      <article className="card article">
        <div className="container content">
          <CuratedBy content={props.content} board={props.board} removeCard={props.removeCard} />
          <CardHeader content={props.content} board={props.board} onClick={() => props.showContents()} />
          <CardDetails content={props.content} board={props.board} />
          <CardActions content={props.content} board={props.board} />
        </div>
      </article>
    </div>
  );
}
