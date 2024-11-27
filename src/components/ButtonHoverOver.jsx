import Image from "next/image";
import Link from "next/link";

import UserIcon from "../../assets/icons/bxs_user.png";
import DownCaretIcon from "../../assets/icons/down.png";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

export const PRIMARY_HOVEROVER_LINKS = [
  { label: "Register", href: "register" },
  { label: "Sign In", href: "sign-in" },
];
export const SECONDARY_HOVEROVER_LINKS = [
  { label: "Perfumes", href: "perfumes" },
  { label: "Jewelries", href: "jewelries" },
  { label: "Gym wears", href: "gym-wears" },
  { label: "Vintage wears", href: "vintage-wears" },
  { label: "Pyjamas", href: "pyjamas" },
  { label: "Slippers", href: "slippers" },
];
const ButtonHoverOver = ({ icon, label, links, className, styleButton }) => {
  const pathname = usePathname();

  return (
    <button
      className={`${cn(
        "relative flex items-center gap-1 min-w-max group",
        styleButton
      )}`}
    >
      {icon}
      {label}
      {
        <Image
          src={DownCaretIcon}
          alt="down arrow to see more"
          className="size-[16px] group-hover:rotate-180"
        />
      }
      <div className="absolute z-50 mt-4 text-[16px] text-left font-medium left-0 flex-col hidden w-[194px] bg-background top-full group-focus-within:flex group-hover:flex  border border-grey-100">
        {links.map((links) => {
          return (
            <Link
              key={links.href}
              href={links.href}
              className={`py-2 border-b-[1px] text-center  border-grey-200 last:border-b-0 border-b-grey-200 ${className} ${
                pathname === links.href
              } ? 'font-semibold':'' `}
            >
              {links.label}
            </Link>
          );
        })}
      </div>
    </button>
  );
};

export default ButtonHoverOver;
