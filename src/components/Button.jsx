import { cn } from "../lib/utils";

const Button = ({ className, children = "Explore Now" }) => {
  return (
    <button
      className={`${cn(
        "px-16 py-2 rounded-md inline-block text-2xl font-medium bg-orange text-black-100 ",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default Button;
