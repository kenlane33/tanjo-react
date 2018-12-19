import { ArticleCard } from "./ArticleCard.js";
import { BoardCard } from "./BoardCard.js";
import "./Cards.scss";
export var BoardCards = () => (
  <div className="row stream-contents">
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <ArticleCard
      board={{ id: 123 }}
      boardDetails={{
        relevance: 42,
        //saved_by: { name: 'Svetlav Rumplestiltskin', id: 444 }
      }}
      content={{
        title: "Bestest Title Ever",
        summary: "Summarizing foo on the boo roo too!",
        boards: [{ id: 123 }],
        type: "Unicorn",//"Board","Unicorn"
        owner: { id: 42 },
      }}
    />
    <BoardCard
      board={{ id: 123 }}
      boardDetails={{
        relevance: 42,
        saved_by: { name: 'Svetlav Rumplestiltskin', id: 42 }
      }}
      content={{
        title: "Bestest Title Ever",
        summary: "Summarizing foo on the boo roo too!",
        boards: [{ id: 123 }],
        type: "Board",//"Board","Unicorn"
        owner: { id: 42 },
      }}
    />
  </div>
);

//props.board) && isset(props.content.boards
//boardDetails.saved_by.name