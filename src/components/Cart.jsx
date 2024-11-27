import Link from "next/link";
import CartIcon from "../../assets/icons/cart-icon";
import CartBadge from "./CartBadge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { totalQty } = useContext(CartContext);
  return (
    <Link href="/cart" className="relative flex">
      <CartIcon background="white" />
      <CartBadge qty={totalQty} />
    </Link>
  );
};

export default Cart;
