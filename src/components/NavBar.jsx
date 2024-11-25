"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ButtonHoverOver, {
  PRIMARY_HOVEROVER_LINKS,
  SECONDARY_HOVEROVER_LINKS,
} from "./ButtonHoverOver";

import UserIcon from "../../assets/icons/bxs_user.png";
import Logo from "./Logo";
import SearchInput from "./forms/SearchInput";
import IntlCurrencySelect from "./forms/IntlCurrencySelect";
import Cart from "./Cart";
import MenuIcon from "../../assets/icons/MenuIcon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Accessories", href: "/accessories" },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return NAV_LINKS.map((navLink) => {
    return (
      <Link
        key={navLink.href}
        href={navLink.href}
        className={`hidden lg:block ${
          pathname === navLink.href ? "font-semibold" : ""
        } `}
      >
        {navLink.label}
      </Link>
    );
  });
};

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-[16px] gap-6 sm:gap-11 py-6">
      <div className="flex gap-6">
        <button className="flex lg:hidden min-w-6">
          <MenuIcon />
        </button>
        <Logo />
      </div>
      <div className="items-center hidden gap-6 lg:flex">
        <ButtonHoverOver
          label="Register / Sign In"
          links={PRIMARY_HOVEROVER_LINKS}
          icon={<Image src={UserIcon} className="size-[16px]" />}
          className="w-3/5 mx-auto"
        />
        <NavLinks />
        <ButtonHoverOver label="More" links={SECONDARY_HOVEROVER_LINKS} />
      </div>
      <SearchInput />
      <IntlCurrencySelect />
      <Cart />
    </nav>
  );
};

export default NavBar;
