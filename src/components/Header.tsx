import { useState } from "react";

import Cart from "./Cart.tsx";
import { useCartSelector } from "../../store/hooks.tsx";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { items } = useCartSelector((state) => state.cart);
  const cartQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img
            src="logo.png"
            alt="Elegant model"
          />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {cartQuantity}</button>
        </p>
      </header>
    </>
  );
}
