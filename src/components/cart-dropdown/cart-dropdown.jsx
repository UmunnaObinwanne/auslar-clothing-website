import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { Button } from "@mui/joy";
import CartItem from "../../cart-item/cart-item";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          /*then we use the product we get from the context, map over it and append it to the CartItem component*/ cartItems.map(
            (item) => (
              /*This is the cart item component that we used for the mapping*/ <CartItem
                key={item.id}
                cartItem={item}
              />
            )
          )
        }
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
}
