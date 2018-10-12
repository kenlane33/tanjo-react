export function CardShare(props) {
  var url = "/share/Content/"+props.content.id;

  return (
    <a data-remote="true" href={url}>
      <span>Share</span>
      <img className="tanjo-icon" title="Share" src="//tanjo.s3.amazonaws.com/assets/tanjo-icons/icon-share-black.svg" alt="Icon share black" />
    </a>
  );
}
