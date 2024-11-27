import Image from "next/image";

import HeroImage from "../../assets/img/person.jpg";
import HeroImage2 from "../../assets/img/shoee.jpeg";
import HeroImage3 from "../../assets/img/shirt.jpeg";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="w-full grid grid-cols-[repeat(3,_1fr),_120px_1fr] grid-rows-9 gap-x-4 lg:gap-x-2 lg:grid-cols-10 h-[calc(100vh_-_5.79rem)] justify-between inverse full-bleed text-background md:pt-16 md:pb-8 py-10">
      <h1 className="relative col-start-1 col-span-1 row-start-1 row-span-1 self-start text-[clamp(2rem,_6vw_+_1rem,_8rem)] font-alfa ">
        Gebeya{" "}
        <span className="absolute top-[86%] lg:top-[87%] left-[calc(77.5vw_-_1.5rem)] md:left-[calc(60.7vw_-_1.5rem)] ">
          Shop
        </span>
      </h1>
      <div className="col-start-2 col-span-2 lg:col-start-4 lg:col-span-2 lg:row-start-1 lg:row-span-4 size-[120px] sm:size-[160px] lg:size-[270px] justify-self-start">
        <Image
          src={HeroImage}
          className="object-left object-cover w-full h-full rounded-[50%]"
        />
      </div>

      <p className="max-w-[40ch] text-center md:text-left md:max-w-[35ch] text-base md:text-xl col-start-1 col-span-full row-start-5 row-span-1 lg:col-start-7 lg:col-span-full lg:col-span-3 lg:row-[1/2] justify-self-center lg:justify-self-start self-start">
        Discover a world of convenience with our user-friendly platform, curated
        collections, and exceptional customer service
      </p>
      <div className="hidden lg:block size-[260px] flex justify-center col-span-1 row-[3/4] md:row-start-4">
        <Image
          src={HeroImage2}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <Button className="self-end row-span-1 px-24 py-3 row-start-8 col-span-full sm:justify-self-center md:justify-self-start lg:justify-self-start md:col-start-2 md:col-span-4 lg:col-start-4 md:w-max md:px-24 md:py-3 md:row-start-7 md:row-span-2" />
      <div className="size-[210px] col-span-2 md:col-start-7 md:justify-self-end lg:row-start-8 lg:row-span-2 ml-0 hidden self-end lg:block ">
        <Image
          src={HeroImage3}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
