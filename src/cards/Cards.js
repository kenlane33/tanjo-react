import {ArticleCard} from "./ArticleCard.js";
export var Cards = () => (
  <div>
    <div>Cards</div>
    <div>Cards</div>
    <div>Cards</div>
    <div>Cards</div>
    <div>Cards</div>
    <div>Cards</div>
    <ArticleCard content={{
      title:"Best Title Ever", 
      summary:"Summarizing foo on the boo roo too!",
      board:123,
      }}/>
  </div>
);