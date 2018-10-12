//---------/////////------------------------------------------o
import "./TabBtns.scss";
import { Component } from "preact";
//-----------/////-------------------------------------------o
export class TabBtns extends Component {
  constructor(p) {
    super(p);
    this.state = { actIdx: p.initIdx || 0 };
  }
  /////////////-------------------o
  setActiveIdx = i => {
    this.setState({ actIdx: i });
  };
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
class Tab extends Component {
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
//--////////-------------------------------------------o
var TabPage = props => {
  let cls = "page" + (props.active ? " active" : "");
  return (
    <div className={cls}>
      {props.txt}
      {props.children}
    </div>
  );
};

//--//////--------------------------------------o
export var Badge = p => <div className="button-badge">{p.num}</div>;
//--////////////--------------------------------------o
export var SocialIcons = p => {
  let cls = p.cls || "share-icons";
  let cls_i = p.cls_i || "";
  let cls_s = p.cls_s || "";
  let icons = p.icons
    .replace("f", " facebook")
    .replace("l", " linkedin")
    .replace("s", " slack")
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
