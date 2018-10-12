import { CardShare } from "./CardShare.js.jsx";
import { Component } from "preact";
export class CardLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      liked: props.content.liked
    }
  }
  handleClick(liked) {
    this.setState({liked: liked});
    var verb = (this.state.liked === true ? "POST" : "DELETE");

    //$.ajax({
    //  url: api.url("/rate/"+this.state.content.id),
    //  method: verb,
    //  dataType: "json"
    //});
  }
  render() {
    var output = null;
    if (this.state.liked === true) {
      output = <a className="szl-content" rel="nofollow" onClick={() => this.handleClick(false)}>
        <span>Unlike</span>
        <img className="tanjo-icon" title="Unlike" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-unlike-black.svg" />
      </a>;
    } else {
      output = <a className="szl-content" rel="nofollow" onClick={() => this.handleClick(true)}>
        <span>Like</span>
        <img className="tanjo-icon" title="Like" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-like-black.svg" />
      </a>;
    }

    return output;
  }
}
