import { Component } from "preact";

function isset(x) { return x != null; }
var user = {id:4};

class CuratedBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      board: props.board,
      boardDetails: this.setBoardDetails(props)
    }
  }

  /*

    setBoardDetails

  */

  setBoardDetails(props) {
    if (isset(props.board) && isset(props.content.boards)) {
      return props.content.boards.find(function(b) { return b.id === props.board.id; })
    } else {
      return {saved_by:null}
    }
  }

  /*

    determineCurator
    Master switch to discover the current state of the card

  */
  determineCurator() {
    if (isset(this.state.content) && (this.state.content.type === "Board")
      && isset(this.state.content.owner.id) && (user.id === this.state.content.owner.id)) {
      return "Board Owner Header"
    }
    else if (isset(this.state.content) && this.state.content.type === "Board") {
      return "Board Header"
    }
    else if (isset(this.state.content) && this.state.content.type === "Persona") {
      return "Persona Header"
    }
    else if (isset(this.state.boardDetails) && isset(this.state.boardDetails.saved_by)
      && (user.id === this.state.boardDetails.saved_by.id)) {
      return "Current User";
    }
    else if (isset(this.state.boardDetails) && isset(this.state.boardDetails.saved_by)) {
      return "Saved By Collaborator";
    }
    else if (isset(this.state.boardDetails) && isset(this.state.boardDetails.relevance)) {
      return "Recommended";
    }
    else {
      return "Discovered";
    }
  }

  /*

    notInterested
    Returns the FZL (remove) button for the card

  */

  notInterested() {
    if (this.props.content.type == "Board") {
      return "";
    } else {
      return(
        <div className="right not-interested">
          <a className="fzl" rel="nofollow" onClick={this.props.removeCard}>
            <img className="tanjo-icon" title="Not Interested" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-not-interested-black.svg" data-tanjo-id={this.state.content.id} />
          </a>
        </div>
      );
    }
  }

  /*

    displayIcon
    Returns the correct icon to display to the left of the header

  */

  displayIcon() {
    switch(this.determineCurator()) {
      case "Recommended":
        return(
          <div className="percent">{this.state.boardDetails.relevance}%</div>
        );
      case "Discovered":
        return(
          <div className="icon">
            <img className="tanjo-icon" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-discovered-by-tanjo-black.svg" />
          </div>
        );
      case "Board Header":
        return(
          <div className="icon">
            <img className="tanjo-icon" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-save-outline-white.svg" />
          </div>
        );
      case "Board Owner Header":
        return(
          <div className="icon">
            <img className="tanjo-icon" src="//tanjo.s3.amazonaws.com/assets/icons/saved-by-you.svg" />
          </div>
        );
      case "Persona Header":
        return(
          <div className="icon">
            <img className="tanjo-icon" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-save-outline-white.svg" />
          </div>
        );
      default:
        return(
          <div className="icon">
            <img className="tanjo-icon" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-saved-by-username-black.svg" />
          </div>
        );
    }
  }

  /*

    curatorDetails
    Returns the correct text as to why the card is there

  */

  curatorDetails() {
    switch(this.determineCurator()) {
      case "Current User":
        return(
          <ul className="curatorDetails">
            <li className="headline">Pinned By</li>
            <li className="curator">YOU</li>
          </ul>
        );
      case "Saved By Collaborator":
        return(
          <ul className="curatorDetails">
            <li className="headline">Pinned By</li>
            <li className="curator">{this.state.boardDetails.saved_by.name}</li>
          </ul>
        );
      case "Recommended":
        return(
          <ul className="curatorDetails">
            <li className="headline">Recommended By</li>
            <li className="curator">TANJO</li>
          </ul>
        );
      case "Board Header":
        return(
          <ul className="curatorDetails">
            <li className="headline">Board By</li>
            <li className="curator">{this.state.content.owner.name}</li>
          </ul>
        );
      case "Board Owner Header":
        return(
          <ul className="curatorDetails">
            <li className="headline">Board By</li>
            <li className="curator">YOU</li>
          </ul>
        );
      case "Persona Header":
        return(
          <ul className="curatorDetails">
            <li className="headline">Tanjo Animated</li>
            <li className="curator">PERSONA</li>
          </ul>
        );
      default:
        return(
          <ul className="curatorDetails">
            <li className="headline">Discovered By</li>
            <li className="curator">TANJO</li>
          </ul>
        );
    }
  }

  /*

    render

  */

  render() {
    var output = null;
    var notInterested  = this.notInterested();
    var displayIcon    = this.displayIcon();
    var curatorDetails = this.curatorDetails();
    var cardType = this.determineCurator();
    var isMine = (cardType=="Board Owner Header") || (cardType=="Board Owner Header");
    var style = (isMine) ? {backgroundColor:'rgb(20,33,52)'} : {};

    output = <div className="curatedBy" style={style}>
      {notInterested}
      {displayIcon}
      {curatorDetails}
      <div className="clear"></div>
    </div>;

    return output;
  }
}
