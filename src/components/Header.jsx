import { cn } from "../lib/utils";

const Header = ({ className, children }) => {
  return <header className={`${cn("", className)}`}>{children}</header>;
};

export default Header;
