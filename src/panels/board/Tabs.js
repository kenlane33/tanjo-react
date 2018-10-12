//---------//////////////--------------------------------------o
//import "./LblInpBtn.scss";
import { TabBtns, SocialIcons, Badge } from "../../buttons/TabBtns.js";
import { AddCardButton } from "../../buttons/AddCardMenu.js";
import { Clks } from "../../tests/clicks_on/BoardTabClks.js";
import { ShareTabPanel, CardTabPanel, ActTabPanel }
  from "./TabSubPanels.js";
import { FontAwesomeLink } from "../../html_bits/FontAwesomeLink.js";
import { Component } from "preact";
//-----------//////////---------------------------------------------o
export class BoardTabs extends Component {
  render() {
    let icons = <SocialIcons icons="ftls" />;
    let badge = <Badge num="4" />;
    let tabs = [
      { lbl: "Share",    lbl2: icons, page:<ShareTabPanel clicks={Clks} /> },
      { lbl: "Cards",    lbl2: null, page: <CardTabPanel  clicks={Clks} /> },
      { lbl: "Activity", lbl2: badge, page:<ActTabPanel   clicks={Clks} /> },
      { lbl: "Chat",     lbl2: null, page: <ActTabPanel   clicks={Clks} /> }
    ];
    return (
      <div>
        <FontAwesomeLink />
        <TabBtns tabs={tabs} initIdx="1" />
        <AddCardButton clicks={Clks} />
      </div>
    );
  }
}