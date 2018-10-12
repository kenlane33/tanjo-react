//---------//////////////--------------------------------------o
import "./Banner.scss";
//---------//////////////--------------------------------------o
export var BoardBanner = () => (
  <div
    class="row boardHeader"
    style="display:none; background-image: url('https://tanjo.s3.amazonaws.com/uploads/content/image/2995607/gettyimages-814034854.jpg');"
  >
    One Two Three
    
    <div class="cover overlay" />
    <div class="medium-10 small-12 columns name">
      <h2>
        <a href="/boards/935711">Energy Innovation</a>
        <a class="pencil" title="Board Settings" href="/boards/935711/edit">
          <i class="fa fa-cog" />
        </a>
        <a
          class="pencil"
          data-remote="true"
          title="New Note Card"
          href="/boards/935711/whiteboards/new"
        >
          <i class="fa fa-clipboard" />
        </a>
      </h2>
    </div>
    <div class="medium-2 small-12 columns">
      <div class="switch large radius privacy">
        <form
          id="open-form"
          class="edit_board"
          data-remote="true"
          action="/boards/935711"
          accept-charset="UTF-8"
          method="post"
        >
          <input name="utf8" type="hidden" value="&#10003;" />
          <input type="hidden" name="_method" value="patch" />
          <input
            type="hidden"
            name="authenticity_token"
            value="a+ytLSlf+1H38v8E50uzUYd+zB+W2OSmBojbqgvHjuMw/k3nUfiDe1EC+kntbBujFfE+ZOzfZIQGTuUPeMG4Mw=="
          />
          <input name="board[accessible]" type="hidden" value="0" />
          <input
            id="accessible"
            onchange="$('#open-form').submit();"
            type="checkbox"
            value="1"
            checked="checked"
            name="board[accessible]"
          />
          <label for="accessible">
            <span class="switch-on">Public</span>
            <span class="switch-off">Private</span>
          </label>
        </form>
      </div>
    </div>
    <div class="small-12 columns description" />
  </div>
);
