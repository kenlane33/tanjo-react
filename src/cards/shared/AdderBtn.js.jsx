function AdderBtn(p) {
  return (
    <span className="adderBtn" onClick={p.onClick} style={p.style}>
      <span className="plus">{p.plus||p.children}</span>
      <span className="new">{p.newTxt}</span>
      <span className="hidden">{' '+p.hidden}</span>
    </span> 
  );
}
