import "./index.scss";
import {Tabs, SocialIcons, Badge} from "./hextabs/Tabs.js"
import {Filters} from "./Filters/Filters.js";
import {Clk} from "./test_clicks/test_clicks.js";
import { CardFilters, ActFilters, SharePage} from "./BoardTabs/BoardTabs.js";

import { Component, render } from "preact";
const React = { Component };

//----/////-------------------------------------------o
class Main extends React.Component {
  render() {
    let icons = <SocialIcons icons="ftls" />;
    let badge = <Badge num="4" />; //<div className="button-badge">4</div>;
    let tabs = [
      { lbl: "Share", lbl2: icons, page: <SharePage /> },
      { lbl: "Cards", lbl2: null, page: <CardFilters /> },
      { lbl: "Activity", lbl2: badge, page: <ActFilters /> },
      { lbl: "Chat", lbl2: null, page: <ActFilters /> }
    ];
    return (
      <div style={{ float: "clear" }}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Tabs tabs={tabs} initIdx="2" />
        <AddCardButton />
      </div>
    );
  }
}
//-----/////////////----------------------------------------------o
class AddCardButton extends React.Component {
  constructor() {
    super();
    this.state = { open: false, opening: false };
  }
  ///////----------------o
  componentWillMount()   {    document.addEventListener("click", this.clickedAnywhere, false);}
  componentWillUnmount() { document.removeEventListener("click", this.clickedAnywhere, false); }
  ///////----------------o
  toggle=()=>{
    setTimeout(() => {
      this.setState({ open: !this.state.open });
    }, 10);
  };
  clickedAnywhere=(e)=>{
    setTimeout(() => {
      if (this.state.open) this.setState({ open: false });
    }, 1);
  };
  //-------o
  render() {
    let mnuStl = this.state.open ? {} : { display: "none" };
    return (
      <div>
        <div className="add-button-box" onClick={this.toggle}>
          <div className="add-button">
            <a>
              <div className="inner">+</div>
              <div className="add-card">ADD</div>
              <div className="add-card add-card-bot">CARD</div>
            </a>
          </div>
        </div>
        <div className="add-menu" style={mnuStl}>
          <AddMenuItem
            ttl="NOTE"
            click={() => {
              //this.toggle();
              Clk.MenuAddNote();
            }}
          />
          <AddMenuItem
            ttl="URL"
            click={() => {
              //this.toggle();
              Clk.MenuAddUrl();
            }}
          />
          <AddMenuItem
            ttl="UPLOAD"
            click={() => {
              //this.toggle();
              Clk.MenuUpload();
            }}
          />
        </div>
      </div>
    );
  }
}
//---///////////--------------------------------------------o
var AddMenuItem=(p)=>(
  <div className="add-item-wrap" onClick={p.click}>
    <a className="add-menu-item">{"+ " + p.ttl}</a>
  </div>
);

if (typeof window !== "undefined") {
  render(<Main />, document.getElementById("root"));
}
