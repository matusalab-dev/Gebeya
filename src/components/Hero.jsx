import Image from "next/image";

import HeroImage from "../../assets/img/person.jpg";
import HeroImage2 from "../../assets/img/shoee.jpeg";
import HeroImage3 from "../../assets/img/shirt.jpeg";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="w-full grid grid-cols-[1fr_120px_1fr] grid-rows-5 gap-x-4 lg:gap-x-5 lg:grid-cols-[repeat(6,minmax(min,1fr)),minmax(min,435px)] h-[573px] lg:h-[calc(100vh_-_0.2rem)] justify-between inverse full-bleed text-background md:pt-20 md:pb-16 py-6">
      <h1 className="col-start-1 col-span-1 row-start-1 row-span-1 self-start text-[clamp(2rem,_6vw_+_1rem,_8rem)] font-alfa ">
        Gebeya{" "}
        <span className="absolute top-[20%] lg:top-[48%] left-[calc(77.5vw_-_1.5rem)] md:left-[calc(65.7vw_-_1.5rem)] ">
          Shop
        </span>
      </h1>
      <div className=" col-start-2 col-span-1 col-[2/3] lg:col-[2/3] size-[120px] md:size-[300px] justify-self-center">
        <Image
          src={HeroImage}
          className="object-left object-cover w-full h-full rounded-[50%]"
        />
      </div>
      {/* <h2 className="font-alfa text-4xl md:text-9xl col-[3/4] row-[2/3]"></h2> */}
      <p className="max-w-[35ch] text-[clamp(0.5rem,_2vw_+_0.75rem,_1rem)] md:text-[clamp(0.75rem,_2vw_+_0.75rem,_1.25rem)] col-start-1 col-span-full row-start-3 row-span-1   md:col-[3/5] md:row-[1/2] justify-self-center md:justify-self-auto self-start">
        Discover a world of convenience with our user-friendly platform, curated
        collections, and exceptional customer service
      </p>
      <div className="hidden lg:block size-[260px] flex justify-center col-span-1 row-[3/4]">
        <Image
          src={HeroImage2}
          className="rounded-[150px] object-cover w-full h-full"
        />
      </div>
      <Button className="self-end p-0 justify-self-center col-start-1 col-span-full row-start-5 row-span-1 lg:justify-self-auto md:col-[2/3] lg:row-[4/5]" />
      <div className="size-[223px] col-span-full row-[5/-1] lg:col-[3/4] lg:row-[4/-1] ml-0 hidden self-end lg:block lg:ml-8 mt-0 lg:mt-20 ">
        <Image
          src={HeroImage3}
          className="hidden md:block rounded-[150px] object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
