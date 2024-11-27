import Image from "next/image";

import ArrowIcon from "../../../assets/icons/arrow-icon";
import CountryIcon from "../../../assets/icons/uk.png";
import { cn } from "../../lib/utils";

const IntlCurrencySelect = ({ className }) => {
  return (
    <div className={`${cn("items-center hidden gap-1 lg:flex", className)}`}>
      <Image src={CountryIcon} width="24" height="24" />
      <select name="" id="" className="text-sm text-light_black bg-background">
        <option defaultValue="EN">
          EN/Currency <ArrowIcon />
        </option>
      </select>
    </div>
  );
};

export default IntlCurrencySelect;
