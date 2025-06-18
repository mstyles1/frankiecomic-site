import "../App.css";
import book1cover from "../images/book1cover.png";

function Shop() {
  return (
    <div className="page">
      <div className="landing">
        <h1>SHOP</h1>

        <div className="product">
          <img
            src={book1cover}
            alt="Cover - Frankie Langley Book 1"
            className="product-image"
          />
          <div className="product-header">
            BOOK 1: FRANKIE LANGLEY and the Inter-Galactic Post-Office – $15
          </div>

          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="YOUR_BUTTON_ID_HERE"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
              name="submit"
              alt="Buy Now with PayPal"
            />
            <img
              alt=""
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shop;
