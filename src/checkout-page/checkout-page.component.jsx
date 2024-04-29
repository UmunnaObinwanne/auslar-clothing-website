import { useContext } from "react";
import { CartContext } from "../contexts/dropdown.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout-page.styles.scss";

export default function CheckoutPage() {
  const { cartItems } = useContext(CartContext);

  //calculating total price of all items

  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  //calculating the quantity of items in the cart.

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <h1 className="logo">Auslar Store</h1>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-bag"></i>
          <div className="items-info">
            <span>
              <p>
                <b>Number of products in cart: {cartItems.length} products</b>
              </p>
            </span>
            <span>
              <p>
                <b>Quantity of items in cart: {totalQuantity} items</b>
              </p>
            </span>
          </div>
        </div>
      </nav>
      <div className="top-bar">
        <i className="fas fa-arrow-left"></i>
        <span className="nav-end">Continue shopping</span>
      </div>
      <h1 className="checkout">Checkout</h1>
      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div>
        <h3>Total Price is {`$${totalPrice}`}</h3>
      </div>
    </div>
  );
}
