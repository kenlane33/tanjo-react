function CardDetails(props) {
  return (
    <div className='details'>
      <div className='summary'>
        <div className='column-1'>{props.content.summary}</div>
        <div className='column-2'>{props.content.summary}</div>
      </div>
    </div>
  );
}
