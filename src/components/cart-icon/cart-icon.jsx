import "./cart-icon.styles.scss";
import Icon from "../../assets/shopping-bag.svg";

export default function CartComponent(props) {
  return (
    <div className="cart-icon-container" onClick={props.toggleCart}>
      <img src={Icon} className="shopping-icon" />
      <span className="item-count">20</span>
    </div>
  );
}
