//---------//////////////--------------------------------------o
import "./LblInpBtn.scss";
import { Component } from "preact";
//-----------//////////---------------------------------------------o
export class LblInpBtn extends Component {
  constructor(p) {
    super(p);
    this.state = {
      showMsg: false,
      inputTxt: p.inputTxt
    };
  }
  ////////---------------------o
  changed = (ev) => {
    this.setState({ inputTxt: ev.target.value });
  }
  ////////---------------------o
  showMsgForABit = () => {
    this.setState({ showMsg: true });
    setTimeout(() => { this.setState({ showMsg: false });},4000);
  }
  ///////------------------o
  render() {
    let msgStl = { fontSize: "11px", display: this.state.showMsg?"":"none" };
    return (
      <div className={"share " + (this.props.cls || "")}>
        <div
          className="results right text-treatment"
          id="copied"
          style={msgStl}
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
            onClick={()=>{
              this.showMsgForABit();
              this.props.click();
              }}
          >
            {this.props.btn}
          </div>
        </div>
      </div>
    );
  }
}