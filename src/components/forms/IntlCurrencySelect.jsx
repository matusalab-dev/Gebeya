import Image from "next/image";

import ArrowIcon from "../../../assets/icons/arrow-icon";
import CountryIcon from "../../../assets/icons/uk.png";

const IntlCurrencySelect = () => {
  return (
    <div className="hidden lg:flex items-center gap-1">
      <Image src={CountryIcon} width="24" height="24" />
      <select
        name=""
        id=""
        className="text-[16px] text-light_black bg-background"
      >
        <option defaultValue="EN">
          EN/Currency <ArrowIcon />
        </option>
      </select>
    </div>
  );
};

export default IntlCurrencySelect;
