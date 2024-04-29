import "./checkout-item.styles.scss";
import { useContext, Fragment } from "react";
import { CartContext } from "../contexts/dropdown.context";

export default function CheckoutItem({ cartItem }) {
  const { increaseItemQuantity, decreaseItemQuantity, removeItem, cartItems } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity, id } = cartItem;

  // Calculate total price for the item
  const totalItemPrice = price * quantity;

  return (
    <Fragment>
      <div className="center-wrapper">
        <div className="content">
          <div className="bag"></div>
          <div className="bag-product">
            <div className="image">
              <img src={imageUrl} className="product-image" alt={`${name}`} />
            </div>
            <div className="description">
              <h1>{name}</h1>
              <h2>{price}</h2>
              <div className="quantity-wrapper">
                <div>
                  <label htmlFor="quantity" style={{ marginRight: "0.5rem" }}>
                    Quantity:
                  </label>
                  {quantity}
                  <div style={{ marginBottom: "1rem" }}>
                    <button
                      className="btn"
                      onClick={() => decreaseItemQuantity(id)}>
                      -
                    </button>
                    <button
                      className="btn"
                      onClick={() => increaseItemQuantity(id)}>
                      +
                    </button>
                  </div>
                </div>
                <button className="btn-remove" onClick={() => removeItem(id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </Fragment>
  );
}
