//---------////////////////--------------------------------------o
import "./AddCardMenu.scss";
import { Component } from "preact";
//------------/////////////----------------------------------------------o
export class AddCardButton extends Component {
  constructor() {
    super();
    this.state = { open: false, opening: false };
  }
  ////////////////////----------------o
  componentWillMount() { document.addEventListener("click", this.clickedAnywhere, false); }
  componentWillUnmount() { document.removeEventListener("click", this.clickedAnywhere, false); }
  ///////----------------o
  toggle = () => {
    setTimeout(() => {
      this.setState({ open: !this.state.open });
    }, 10);
  };
  ////////////////-------o
  clickedAnywhere = (e) => {
    setTimeout(() => {
      if (this.state.open) this.setState({ open: false });
    }, 1);
  };
  ///////-------o
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
        <AddMenu stl={mnuStl} clicks={this.props.clicks} />
      </div>
    );
  }
}
//---///////--------------------------------------------o
var AddMenu = (p) => (
  <div className="add-menu" style={p.stl}>
    <AddMenuItem ttl="NOTE"   click={p.clicks.MenuAddNote} />
    <AddMenuItem ttl="URL"    click={p.clicks.MenuAddUrl} />
    <AddMenuItem ttl="UPLOAD" click={p.clicks.MenuUpload} />
  </div>
);
//---///////////--------------------------------------------o
var AddMenuItem = (p) => (
  <div className="add-item-wrap" onClick={p.click}>
    <a className="add-menu-item">{"+ " + p.ttl}</a>
  </div>
);
