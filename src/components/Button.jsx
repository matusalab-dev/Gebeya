import { cn } from "../lib/utils";

const Button = ({ className }) => {
  return (
    <button
      className={`${cn(
        "w-[382px] sm:w-[366px] h-16 rounded-md inline-block text-2xl font-medium bg-orange text-black-100 ",
        className
      )}`}
    >
      Explore Now
    </button>
  );
};

export default Button;
