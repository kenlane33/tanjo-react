function AddNewBoard() {
  let styles = {
    border: "none"
  };

  return (
    <div className="large-4 medium-6 small-12 column add-new-board">
      <article className="new-board card board" style={styles}>
        <a data-remote="" href="/boards/new">
          <i className="fa fa-plus"></i>
          <h3>Create A New Tanjo Board</h3>
        </a>
      </article>
    </div>
  );
}
