import { CardShare } from "./CardShare.js.jsx";
export function PersonaActions(props) {
  return (
      <ul className="actions">
        <li className="action-share">
          <CardShare content={props.content} board={props.board} />
        </li>
      </ul>
  );
}
