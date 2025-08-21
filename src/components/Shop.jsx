import "../App.css";
import book1physical from "../images/frankie-shop-cover.jpg";
import book1bundle from "../images/frankie-shop-bundle.jpg";
import book1digital from "../images/frankie-standard-cover.jpg";

function Shop() {
  return (
    <div className="page">
      <div className="landing">
        <div className="landing-header">SHOP</div>

        {/* Outer box */}
        <div className="product-box">
          <div className="product-grid">
            {/* Book 1 Paperback */}
            <div className="product">
              <img
                src={book1physical}
                alt="Cover - Frankie Langley Book 1"
                className="product-image"
              />

              <div className="product-details">
                <div className="product-text">
                  <div className="product-header">
                    FRANKIE LANGLEY <i>and the Inter-Galactic Post Office</i>
                  </div>
                  <div className="product-blurb">BOOK 1</div>
                  <div className="product-size">PAPERBACK</div>
                </div>

                <div className="product-purchase">
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
                      $15 PURCHASE
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Book 1 Bundle */}
            <div className="product">
              <img
                src={book1bundle}
                alt="Cover - Frankie Langley Book 1 Bundle"
                className="product-image"
              />

              <div className="product-details">
                <div className="product-text">
                  <div className="product-header">
                    FRANKIE LANGLEY <i>and the Inter-Galactic Post Office</i>
                  </div>
                  <div className="product-blurb">BOOK 1</div>
                  <div className="product-size">SHOP BUNDLE (5 PAPERBACKS)</div>
                </div>

                <div className="product-purchase">
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
                      $50 PURCHASE
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="product">
              <img
                src={book1digital}
                alt="Cover - Frankie Langley Book 1 Bundle"
                className="product-image"
              />

              <div className="product-details">
                <div className="product-text">
                  <div className="product-header">
                    FRANKIE LANGLEY <i>and the Inter-Galactic Post Office</i>
                  </div>
                  <div className="product-blurb">BOOK 1</div>
                  <div className="product-size">DIGITAL</div>
                </div>

                <div className="product-purchase">
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
                      $10 PURCHASE
                    </button>
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
