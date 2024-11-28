import Image from "next/image";
import ButtonHoverOver, {
  PRIMARY_HOVEROVER_LINKS,
  SECONDARY_HOVEROVER_LINKS,
} from "../ButtonHoverOver";
import Logo from "../Logo";
import UserIcon from "../../../assets/icons/bxs_user.png";

import { NAV_LINKS, NavLinks } from "./NavBar";
import CloseIcon from "../../../assets/icons/close-icon";
import IntlCurrencySelect from "../forms/IntlCurrencySelect";

const MobileNavBar = ({ setToggle, toggle }) => {
  return (
    <nav
      className={`${
        toggle ? "flex" : "hidden lg:hidden"
      } text-light_black divide-grey-200 bg-background flex-col gap-6 absolute top-0 left-0 z-50 p-10 text-lg`}
    >
      <div className="flex gap-12">
        <button onClick={() => setToggle(!toggle)}>
          <CloseIcon />
        </button>
        <Logo />
      </div>
      <div className="flex flex-col gap-6">
        <ButtonHoverOver
          label="Register / Sign In"
          links={PRIMARY_HOVEROVER_LINKS}
          className="w-3/5 mx-auto "
          styleButton="border-b-2 border-t-2 border-grey-200 py-4"
        />
        <p className="-mb-1 capitalize">our categories</p>
        <NavLinks navLinks={NAV_LINKS} className="block" />
        <ButtonHoverOver label="More" links={SECONDARY_HOVEROVER_LINKS} />
      </div>
      <IntlCurrencySelect className="flex py-4 border-t-2 border-grey-200" />
    </nav>
  );
};

export default MobileNavBar;
