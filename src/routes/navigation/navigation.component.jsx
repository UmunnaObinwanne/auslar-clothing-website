import { Outlet, Link } from "react-router-dom";

import { Fragment, useContext } from "react";

import CartComponent from "../../components/cart-icon/cart-icon";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { UserContext } from "../../contexts/user.context";

import { CartContext } from "../../contexts/dropdown.context";

import "./navigation.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign-Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-In
            </Link>
          )}
          <CartComponent toggleCart={toggleCart} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
