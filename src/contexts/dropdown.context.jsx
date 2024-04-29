import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if Found, increment quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    //else just return the product to add
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext({
  cartItems: [], //this is where we get the products that show in the dropdown checkout

  addItemToCart: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  //increasing the product quantity

  const increaseItemQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //decreasing item quantity

  const decreaseItemQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //removing a product

  const removeItem = (productId) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id !== productId);
    });
  };

  //adding an item to cart

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closedCart = () => {
    setIsCartOpen(false);
  };

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    cartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    closedCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
