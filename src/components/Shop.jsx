import "../App.css";
import book1cover from "../images/frankie-shop-cover.jpg";
import bundleimage from "../images/frankie-shop-bundle.jpg";

function Shop() {
  return (
    <div className="page">
      <div className="landing">
        <div className="landing-header">SHOP</div>

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
                  FRANKIE LANGLEY and the Inter-Galactic Post Office -- BOOK 1
                </div>
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
                  <button type="submit" className="paypal-button">
                    Buy Now
                  </button>
                </form>
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
                  FRANKIE LANGLEY and the Inter-Galactic Post Office -- BOOK 1
                  SHOP BUNDLE (5 BOOKS)
                </div>
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
                  <input type="hidden" name="currency_code" value="USD" />
                  <button type="submit" className="paypal-button">
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
