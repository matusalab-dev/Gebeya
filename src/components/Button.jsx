import { cn } from "../lib/utils";

const Button = ({ className }) => {
  return (
    <button
      className={`${cn(
        "px-16 py-2 rounded-md inline-block text-2xl font-medium bg-orange text-black-100 ",
        className
      )}`}
    >
      Explore Now
    </button>
  );
};

export default Button;
