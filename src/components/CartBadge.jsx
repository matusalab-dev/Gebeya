const CartBadge = ({ qty }) => {
  return (
    <span className="absolute -top-1 -right-4 flex items-center justify-center text-sm rounded-[100%] size-6 bg-red text-background">
      {qty}
    </span>
  );
};

export default CartBadge;
