import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../assets/gebeya-logo.png";
import { cn } from "../lib/utils";
const Logo = ({ logoImage = LogoImage, className }) => {
  return (
    <Link href="/" className="">
      <Image
        src={LogoImage}
        className={`${cn(
          "object-cover w-full h-full min-w-8 size-8",
          className
        )}`}
      />
    </Link>
  );
};

export default Logo;
