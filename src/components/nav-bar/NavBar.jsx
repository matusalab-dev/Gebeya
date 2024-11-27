"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import ButtonHoverOver, {
  PRIMARY_HOVEROVER_LINKS,
  SECONDARY_HOVEROVER_LINKS,
} from "../ButtonHoverOver";
import Logo from "../Logo";
import SearchInput from "../forms/SearchInput";
import IntlCurrencySelect from "../forms/IntlCurrencySelect";
import Cart from "../Cart";

import UserIcon from "../../../assets/icons/bxs_user.png";
import LogoImage from "../../../assets/gebeya-logo.png";
import MenuIcon from "../../../assets/icons/MenuIcon";
import MobileNavBar from "./MobileNavBar";
import { cn } from "../../lib/utils";

export const NAV_LINKS = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Accessories", href: "/accessories" },
];

export const NavLinks = ({
  pathname,
  navLinks = NAV_LINKS,
  href,
  className,
}) => {
  return navLinks.map(({ href, label }) => {
    const defaultStyle = `hidden lg:block ${
      pathname === href ? "font-semibold" : ""
    } `;

    return (
      <Link key={href} href={href} className={`${cn(defaultStyle, className)}`}>
        {label}
      </Link>
    );
  });
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-1 py-6 text-sm sm:gap-11">
      <div className="flex gap-4 sm:gap-6">
        <button
          onClick={() => setToggle(!toggle)}
          className="flex lg:hidden min-w-6"
        >
          <MenuIcon />
        </button>
        <Logo logoImage={LogoImage} />
      </div>
      <MobileNavBar toggle={toggle} setToggle={setToggle} />
      <div className="items-center hidden gap-6 lg:flex">
        <ButtonHoverOver
          label="Register / Sign In"
          links={PRIMARY_HOVEROVER_LINKS}
          icon={<Image src={UserIcon} className="size-[16px]" />}
          className="w-3/5 mx-auto"
        />
        <Link
          href="/"
          className={`hidden lg:block ${
            pathname === "/" ? "font-semibold" : ""
          }`}
        >
          Home
        </Link>
        <NavLinks pathname={pathname} />
        <ButtonHoverOver label="More" links={SECONDARY_HOVEROVER_LINKS} />
      </div>
      <SearchInput />
      <IntlCurrencySelect />
      <Cart />
    </nav>
  );
};

export default NavBar;
