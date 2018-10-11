import { Component, render } from "preact";
const React = { Component };

//----//////////---------------------------------------------o
export class LblInpBut extends React.Component {
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