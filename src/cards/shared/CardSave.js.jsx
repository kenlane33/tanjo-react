export function CardSave(props) {
  var url = "/save/new/"+props.content.id;
  if (props.board) {
    url += "?board_id="+props.board.id
  }

  return (
    <a data-remote="true" href={url}>
      <span>Pin</span>
      <img className="saveIcon tanjo-icon" title="Pin it" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-save-blue.svg" alt="Icon save blue" />
    </a>
  );
}
