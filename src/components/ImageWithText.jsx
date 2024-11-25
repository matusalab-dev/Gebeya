import Image from "next/image";

import Button from "./Button";

import SummarAdvert from "/assets/img/summer_advert.png";
import Bubbles from "/assets/icons/bubbles-mobile.svg";
import BubblesMobile from "/assets/icons/bubbles-mobile.svg";

const ImageWithText = () => {
  return (
    <section className="relative flex justify-between py-10 pl-10 border bg-grey-400 border-light_black rounded-2xl">
      <div className="flex flex-col items-start gap-14 text-purple basis-full">
        <div className="flex flex-col gap-4">
          <h3 className="max-w-[25ch]  text-2xl sm:text-5xl font-semibold">
            Our Curated Summer Collection
          </h3>
          <p className="max-w-xl text-base font-normal sm:text-2xl">
            Explore our curated summer collection featuring trending styles,
            vibrant colors and lightweight fabrics perfect for long days and
            nights.
          </p>
        </div>
        <Button className="text-background" />
      </div>

      <Image
        src={Bubbles}
        width={216}
        height={149}
        alt="decoration"
        className="absolute hidden md:block"
      />
      <Image
        src={BubblesMobile}
        width={506}
        height={441}
        className="absolute right-0 top-[12%] z-10 md:hidden"
      />

      <Image
        src={SummarAdvert}
        width="400"
        height="502"
        className="absolute top-0 bottom-0 right-0 z-10 flex-1 hidden object-cover w-full h-full md:block rounded-tr-2xl rounded-br-2xl"
      />
    </section>
  );
};

export default ImageWithText;
