function BoardCard(props) {
  let href = '/boards/'+props.content.id;
  let default_image = "//tanjo.s3.amazonaws.com/assets/logos/tanjo-logo.png";
  let styles = {
    backgroundImage: 'url(' + (props.content.image ? props.content.image : default_image) + ')'
  };

  return (
    <div className="large-4 medium-6 small-12 column">
      <article className="card board-card">
        <CuratedBy content={props.content} board={props.board} removeCard={props.removeCard} />

        <div className="board-card__container" style={styles}>
          <div className="overlay cover"></div>
          <a href={href} className="cover board-card__cover-link"></a>
          <h3 className="title text-treatment board-card__title">
            <a href={href} className="board-card__title-link">{props.content.name}</a>
          </h3>
          <HexLink before="Tanjo"
                   after="Recommends"
                   number={props.content.contents_count}
                   link={href+"/recommended"}
                   className="board-card__hex-link board-card__hex-link-recommended" />
          <HexLink before="Saved"
                   after="Pins"
                   number={props.content.saved_contents_count}
                   link={href+"/saved"}
                   className="board-card__hex-link board-card__hex-link-saved" />
        </div>
        <ul className="actions">
          <li className="action-like">
            <CardLike content={props.content} board={props.board} />
          </li>
          <li className="action-save">
            <CardSave content={props.content} board={props.board} />
          </li>
        </ul>
      </article>
    </div>
  );
}
