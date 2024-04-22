import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

export default function Navigation() {
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
          <Link className="nav-link" to="/sign-in">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
