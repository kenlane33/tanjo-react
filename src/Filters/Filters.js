//------///////////////--------------------------------------o
import "./Filters.scss"
import { Component } from "preact";
//-----------////////--------------------------------------o
export class Filters extends Component {
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
  if (p.short)  cls += " smaller";
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
