//------////////////--------------------------------------o
import "./index.scss";
import { Tabs, SocialIcons, Badge } from "./Tabs/Tabs.js"
import {Clks} from "./TestClicks/TestClicks.js";
import { SharePage, CardPage, ActPage } from "./BoardPages/BoardPages.js";
import { AddCardButton } from "./AddCardMenu/AddCardMenu.js";
import {Component, render} from "preact";
//----/////-------------------------------------------o
class Main extends Component {
  render() {
    let icons = <SocialIcons icons="ftls" />;
    let badge = <Badge num="4" />;
    let tabs = [
      { lbl: "Share",    lbl2: icons, page: <SharePage clicks={Clks}/> },
      { lbl: "Cards",    lbl2: null,  page: <CardPage  clicks={Clks}/> },
      { lbl: "Activity", lbl2: badge, page: <ActPage   clicks={Clks}/> },
      { lbl: "Chat",     lbl2: null,  page: <ActPage   clicks={Clks}/> }
    ];
    return (
      <div>
        <FontAwesomeLink/>
        <Tabs tabs={tabs} initIdx="0"/>
        <AddCardButton clicks={Clks} />
      </div>
    );
  }
}
//--///////////////---------------------------o
var FontAwesomeLink=()=>{return(
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
)};
//---////////////////////////---------------------------------------o
//     RENDER React TO PAGE
if (typeof window !== "undefined") {
  render(<Main />, document.getElementById("root"));
}
//---////////////////////////---------------------------------------o
