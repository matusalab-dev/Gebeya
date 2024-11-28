import Image from "next/image";

import Button from "./Button";

import SummarAdvert from "/assets/img/summer_advert.png";
import Bubbles from "/assets/icons/bubbles.svg";
import BubblesMobile from "/assets/icons/bubbles-mobile.svg";

const ImageWithText = () => {
  return (
    <section className="relative flex justify-between px-4 py-10 border sm:pl-10 bg-grey-400 border-light_black rounded-2xl">
      <div className="flex flex-col items-start gap-14 text-purple basis-full">
        <div className="flex flex-col gap-4">
          <h3 className="max-w-[25ch]  text-3xl sm:text-5xl font-semibold">
            Our Curated Summer Collection
          </h3>
          <p className="max-w-xl text-lg font-normal sm:text-2xl">
            Explore our curated summer collection featuring trending styles,
            vibrant colors and lightweight fabrics perfect for long days and
            nights.
          </p>
        </div>
        <Button className="z-50 w-full sm:w-auto text-background" />
      </div>

      <Image
        src={Bubbles}
        width={316}
        height={149}
        alt="decoration"
        className="absolute top-[8vh] right-[40vmin] lg:right-[60vmin] hidden md:block"
      />
      <Image
        src={BubblesMobile}
        width={306}
        height={341}
        alt="decoration"
        className="absolute right-[1vmin] xs:top-[16.5vmin] top-[20.5vmin] block md:hidden"
      />

      <Image
        src={SummarAdvert}
        width="400"
        height="502"
        className="absolute top-0 bottom-0 flex-1 hidden object-cover w-full h-full left-[0%] md:block rounded-tr-2xl rounded-br-2xl"
      />
    </section>
  );
};

export default ImageWithText;
