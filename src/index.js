import "./style";
import "./filters/filters.jsx"
import { Component, render } from "preact";
const React = { Component };

class Tj {
  static log(x) { console.log(x); }
  static MenuAddNote()    {Tj.log("Tj.MenuAddNote");}
  static MenuAddUrl()     {Tj.log("Tj.MenuAddUrl");}
  static MenuUpload()     {Tj.log("Tj.MenuUpload");}
  static ShareLinkedIn()  {Tj.log("Tj.ShareLinkedIn");}
  static ShareFacebook()  {Tj.log("Tj.ShareFacebook");}
  static ShareTwitter()   {Tj.log("Tj.ShareTwitter");}
  static ShareSlack()     {Tj.log("Tj.ShareSlack");}
  static filtCardNo()     {Tj.log("Tj.filtCardNo");}
  static filtCardPins()   {Tj.log("Tj.filtCardPins");}
  static filtCardBots()   {Tj.log("Tj.filtCardBots");}
  static filtCardCollab() {Tj.log("Tj.filtCardCollab");}
  static filtActSummary() {Tj.log("Tj.filtActSummary");}
  static filtActBots()    {Tj.log("Tj.filtActBots");}
  static filtActHumans()  {Tj.log("Tj.filtActHumans");}
  static filtActChat()    {Tj.log("Tj.filtActChat");}
  static filtActMe()      {Tj.log("Tj.filtActMe");}
}
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

class Filters extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      actIdx: p.initIdx || 0
    };
  }
  setActiveIdx = (i) => {
    this.setState({ actIdx: i });
  }
  render() {
    return (
      <div className="filters">
        {this.props.filts.map((x, i) => {
          return (
            <Filter
              {...x}
              active={this.state.actIdx == i}
              short={this.props.short}
              idx={i}
              parentSetActiveIdx={this.setActiveIdx}
            />
          );
        })}
      </div>
    );
  }
}
//--///////////--------------------------------------------o
var FilterText = (p) => {
  let cls = "tiny" + (p.txt && p.txt.length > 12 ? " way-tiny" : ""); // shrink overlong
  return <div className={cls}>{p.txt}</div>;
};
//--///////------------------------------------------------o
var Filter = (p) => {
  let cls = "filter";
  if (p.active) cls += " active-filter";
  if (p.short) cls += " smaller";
  let msg = (
    <span className="msg">
      <FilterText txt={p.ttl} />
      <FilterText txt={p.ttl2} />
    </span>
  );
  if (p.short) {
    msg = <span className="msg">{p.ttl}</span>;
  }
  return (
    <a
      className={cls}
      onClick={() => {
        p.parentSetActiveIdx(p.idx);
        p.click();
      }}
    >
      {msg}
      <span className="count">{p.cnt}</span>
    </a>
  );
};


//--////////-------------------------------------------o
var TabPage=(props)=>{
  let cls = "page" + (props.active ? " active" : "");
  return (
    <div className={cls}>
      {props.txt}
      {props.children}
    </div>
  );
};
//--////////////--------------------------------------o
var CardFilters=(p)=>(
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        { ttl: "No", ttl2: "Filter", cnt: 200, click: Tj.filtCardNo },
        { ttl: "Pinned", ttl2: "By You", cnt: 48, click: Tj.filtCardPins },
        {
          ttl: "Tanjo Bot",
          ttl2: "Recommends",
          cnt: 152,
          click: Tj.filtCardBots
        },
        {
          ttl: "Pinned By",
          ttl2: "Collaborators",
          cnt: 0,
          click: Tj.filtCardCollab
        }
      ]}
      initIdx="1"
    />
  </div>
);
//--///////////--------------------------------------o
var ActFilters=(p)=>(
  <div>
    <div className="filter-by">Filter by:</div>
    <Filters
      filts={[
        { ttl: "Summary", cnt: 200, click: Tj.filtActSummary },
        { ttl: "Bots", cnt: 48, click: Tj.filtActBots },
        { ttl: "Humans", cnt: 152, click: Tj.filtActHumans },
        { ttl: "Chat", cnt: 0, click: Tj.filtActChat },
        { ttl: "Me", cnt: 0, click: Tj.filtActMe }
      ]}
      initIdx="1"
      short
    />
  </div>
);
//--//////--------------------------------------o
var Badge=(p)=><div className="button-badge">{p.num}</div>;
//--////////////--------------------------------------o
var SocialIcons=(p)=>{
  let cls = p.cls || "share-icons";
  let cls_i = p.cls_i || "";
  let cls_s = p.cls_s || "";
  let icons = p.icons
    .replace("f", " facebook")
    .replace("s", " slack")
    .replace("l", " linkedin")
    .replace("t", " twitter")
    .trim();
  return (
    <div className={cls}>
      {icons.split(" ").map((x, i) => {
        let func = p.clicks && i < p.clicks.length ? p.clicks[i] : null;
        return (
          <span className={cls_s} onClick={func}>
            <i className={"fa fa-" + x + " " + cls_i} />
          </span>
        );
      })}
    </div>
  );
};
//----/////-------------------------------------------o
class Tabs extends React.Component {
  ////////////-------------------o
  constructor(p) {
    super(p);
    this.state = { actIdx: p.initIdx || 0 };
  }
  //////////////////-------------------o
  setActiveIdx=(i)=>{
    this.setState({ actIdx: i });
  }
  ///////-------------------------------------------o
  render() {
    return (
      <div>
        <div className="hex-tabs">
          <div className="spacer" />
          {this.props.tabs.map((x, i) => {
            return [
              <Tab
                lbl={x.lbl}
                lbl2={x.lbl2}
                active={this.state.actIdx == i}
                idx={i}
                parentSetActiveIdx={this.setActiveIdx}
              />,
              <div className="spacer" />
            ];
          })}
        </div>
        {this.props.tabs.map((x, i) => {
          return <TabPage active={this.state.actIdx == i}>{x.page}</TabPage>;
        })}
      </div>
    );
  }
}
//----////--------------------------------------------o
class Tab extends React.Component {
  render() {
    let actClass = this.props.active ? " active" : "";
    return (
      <div
        className={"hex-tab" + actClass}
        onClick={() => {
          this.props.parentSetActiveIdx(this.props.idx);
        }}
      >
        <div className="up">
          <svg height="41" width="24">
            <line x1="24" y2="41" stroke="#fff" />
            No SVG.
          </svg>
        </div>
        <div className="up2" />
        <div className="text">
          {this.props.lbl}
          {this.props.lbl2}
        </div>
        <div className="down">
          <svg height="41" width="24">
            <line x2="24" y2="41" stroke="#fff" />
            No SVG.
          </svg>
        </div>
        <div className="down2" />
      </div>
    );
  }
}
//----////////--------------------------------------------o
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
              Tj.MenuAddNote();
            }}
          />
          <AddMenuItem
            ttl="URL"
            click={() => {
              //this.toggle();
              Tj.MenuAddUrl();
            }}
          />
          <AddMenuItem
            ttl="UPLOAD"
            click={() => {
              //this.toggle();
              Tj.MenuUpload();
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
//----//////////---------------------------------------------o
class LblInpBut extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      showMsg: false,
      inputTxt: p.inputTxt
    };
    this.changed = this.changed.bind(this);
  }
  changed(ev) {
    this.setState({ inputTxt: ev.target.value });
  }
  render() {
    return (
      <div className={"share " + (this.props.cls || "")}>
        <div
          className="results right text-treatment"
          id="copied"
          style={{ fontSize: "11px", display: "none" }}
        >
          {this.props.msg}
        </div>
        <label>{this.props.lbl}</label>
        <div className="inp-btn">
          <input
            type="text"
            name="url"
            id="share-url"
            value={this.state.inputTxt}
            placeholder={this.props.placeholder}
            onChange={this.changed}
          />
          <div
            className="pale-btn lbl-inp-btn__btn buttony"
            data-results="#copied"
            data-target="#share-url"
          >
            {this.props.btn}
          </div>
        </div>
      </div>
    );
  }
}
//---/////////---------------------------------------------o
var SharePage=()=>(
  <div className="share-page">
    <LblInpBut
      lbl="Shareable board link"
      msg="Copied To Clipboard"
      btn="COPY LINK"
      placeholder=" "
      inputTxt="http://localhost:3000/boards/dD"
      cls=""
    />
    <LblInpBut
      lbl="Invite collaborators"
      msg="Sending invitations..."
      btn="SEND"
      placeholder="Email addresses separated by commas"
      inputTxt=""
      cls=""
    />
    <SocialIcons
      cls="big-icons"
      icons="lfts"
      cls_i="buttony"
      cls_s="cornered"
      clicks={[
        Tj.ShareLinkedIn,
        Tj.ShareFacebook,
        Tj.ShareTwitter,
        Tj.ShareSlack
      ]}
    />
  </div>
);

if (typeof window !== "undefined") {
  render(<Main />, document.getElementById("root"));
}
