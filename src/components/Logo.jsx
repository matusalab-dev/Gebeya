import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../assets/gebeya-logo.png";
const Logo = () => {
  return (
    <Link href="/" className="min-w-8">
      <Image src={LogoImage} className="size-8 " />
    </Link>
  );
};

export default Logo;
