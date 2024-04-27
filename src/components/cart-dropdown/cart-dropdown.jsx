import "./cart-dropdown.styles.scss";
import { Button } from "@mui/joy";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
}
