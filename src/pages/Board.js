//------////////////--------------------------------------o
//import "./index.scss";
import { BoardBanner } from "../panels/board/Banner.js";
import { BoardTabs } from "../panels/board/Tabs.js";
import {Cards} from "../cards/Cards.js";
//------////////////--------------------------------------o
export var BoardPage = () => (
  <div>
    {/*<BoardBanner />*/}
    <BoardTabs />
    <Cards />
  </div>
);