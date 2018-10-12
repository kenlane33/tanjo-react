import { CardShare } from "./CardShare.js.jsx";
import { CardLike } from "./CardLike.js.jsx";
import { CardSave } from "./CardSave.js.jsx";

function CardActions(props) {
  return (
      <ul className="actions">
        <li className="action-share">
          <CardShare content={props.content} board={props.board} />
        </li>
        <li className="action-like">
          <CardLike content={props.content} board={props.board} />
        </li>
        <li className="action-save">
          <CardSave content={props.content} board={props.board} />
        </li>
      </ul>
  );
}
