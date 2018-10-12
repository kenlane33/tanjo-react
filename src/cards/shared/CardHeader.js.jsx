// Trim String By Word
function truncateOnWord(str, limit) {
  var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
  var reg = new RegExp('(?=[' + trimmable + '])');
  var words = str.split(reg);
  var count = 0;
  var text = words.filter(function (word) {
    count += word.length;
    return count <= limit;
  }).join('');

  if (text.length < str.length) {
    text += "...";
  }

  return text;
}
export function CardHeader(props) {
  var default_image = "//tanjo.s3.amazonaws.com/assets/logos/tanjo-logo.png";

  var styles = {
    backgroundImage: 'url(' + (props.content.image ? props.content.image : default_image) + ')'
  }

  if (props.content.type == "Video") {
    return (
      <div className='cardHeader'>
        <div className='image pointer play-video' style={styles} onClick={() => props.onClick()}>
          <div className="video-card__play-button">
            <i className="fa fa-play video-card__play-button-icon"/>
          </div>
        </div>
        <h3 className='title pointer' onClick={() => props.onClick()}>
          {truncateOnWord(props.content.title, 75)}
        </h3>
      </div>
    );
  } else {
    return (
      <div className='cardHeader'>
        <div className='image pointer' style={styles} onClick={() => props.onClick()}></div>
        <h3 className='title pointer' onClick={() => props.onClick()}>
          {truncateOnWord(props.content.title, 75)}
        </h3>
      </div>
    );
  }
}
