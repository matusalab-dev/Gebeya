import Link from "next/link";
import CartIcon from "../../assets/icons/cart-icon";
import CartBadge from "./CartBadge";

const Cart = () => {
  return (
    <Link href="/cart" className="relative flex">
      <CartIcon />
      <CartBadge />
    </Link>
  );
};

export default Cart;
