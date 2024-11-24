import { cn } from "../lib/utils";

const Bubbles = ({ className }) => {
  return (
    <div
      className={`${cn("rounded-full size-14 bg-purple absolute ", className)}`}
    ></div>
  );
};

export default Bubbles;
