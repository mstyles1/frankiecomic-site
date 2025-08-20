import "../App.css";
import book1cover from "../images/frankie-shop-cover.jpg";
import bundleimage from "../images/frankie-shop-bundle.jpg";

function Shop() {
  return (
    <div className="page">
      <div className="landing">
        <h1>SHOP</h1>

        {/* Outer box */}
        <div className="product-box">
          {/* Grid container */}
          <div className="product-grid">
            {/* Book 1 Single Issue */}
            <div className="product">
              <img
                src={book1cover}
                alt="Cover - Frankie Langley Book 1"
                className="product-image"
              />
              <div className="product-details">
                <div className="product-header">
                  FRANKIE LANGLEY and the Inter-Galactic Post Office -- BOOK
                  1
                </div>
                <div className="product-purchase">
                  <span className="price">$15</span>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="R9GWRPMEH5FZQ"
                    />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif"
                      name="submit"
                      alt="Buy Now"
                    />
                  </form>
                </div>
              </div>
            </div>

            {/* Book 1 Bundle */}
            <div className="product">
              <img
                src={bundleimage}
                alt="Cover - Frankie Langley Book 1 Bundle"
                className="product-image"
              />
              <div className="product-details">
                <div className="product-header">
                  FRANKIE LANGLEY and the Inter-Galactic Post Office -- BOOK
                  1 SHOP BUNDLE (5 BOOKS)
                </div>
                <div className="product-purchase">
                  <span className="price">$50</span>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_blank"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="NYE566JVFCNNL"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
                      name="submit"
                      alt="Buy Now with PayPal"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
