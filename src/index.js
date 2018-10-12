//------////////////--------------------------------------o
import "./index.scss";
import {BoardPage} from "./pages/Board.js";
import { render } from "preact";
//----/////-------------------------------------------o
var Main = () => (
  <BoardPage />
);
//---///////////////////////////////////------------------------------o
//     RENDER React TO BROWSER PAGE   //
if (typeof window !== "undefined") {
  render(<Main />, document.getElementById("root"));
}
//---///////////////////////////////////------------------------------o
