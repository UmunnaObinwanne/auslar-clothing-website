import "./cart-icon.styles.scss";
import Icon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";

export default function CartComponent(props) {
  const { cartItems } = useContext(CartContext);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-icon-container" onClick={props.toggleCart}>
      <img src={Icon} className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
}
