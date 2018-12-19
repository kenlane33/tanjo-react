function HexLink(props) {
  var class_names = 'count hex-link ' + props.className;

  return (
    <a className={class_names} href={props.link}>
      {props.before}
      <div className='hex-link__number'>{props.number}</div>
      {props.after}
    </a>
  );
}
