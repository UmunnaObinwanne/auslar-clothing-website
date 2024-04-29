import "./cart-dropdown.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { Button } from "@mui/joy";
import CartItem from "../../cart-item/cart-item";
import { useNavigate } from "react-router-dom/dist";

export default function CartDropdown() {
  const { cartItems, closedCart } = useContext(CartContext);
  const history = useNavigate(); // Initialize useHistory

  const [isCartEmpty, setIsCartEmpty] = useState(false);

  //hiding checkout details

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  const goToCheckout = () => {
    closedCart();
    history("/checkout"); // Navigate to the checkout page
  };

  //checking if the cart is empty to show relevant button

  function renderButton() {
    if (isCartEmpty) {
      return <Button>Add item to cart</Button>;
    } else {
      return <Button onClick={goToCheckout}>Go to Checkout</Button>;
    }
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      {renderButton()}
    </div>
  );
}
