import Image from "next/image";
import ProductHeader from "./ProductHeader";

import BurberryShine from "../../assets/img/Burberry_Shine.png";
import CasualWear from "../../assets/img/casual_shirt.png";
import Vintage from "../../assets/img/vintage_dress.png";
import BeautyProducts from "../../assets/img/beauty_products.png";
import GymWear from "../../assets/img/gym-wears.png";

import CategoryCard from "./CategoryCard";

const CATEGORIES_LABEL = [
  { label: "casual wear", imageUrl: CasualWear, count: "20" },
  { label: "vintage", imageUrl: Vintage, count: "31" },
  { label: "beauty Products", imageUrl: BeautyProducts, count: "24" },
  { label: "gym wears", imageUrl: GymWear, count: "62" },
];
const BrowseByCategory = () => {
  return (
    <section>
      <ProductHeader heading="Browse by category" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {CATEGORIES_LABEL.map(({ label, imageUrl, count }, index) => {
          return (
            <CategoryCard
              key={index}
              headingText={label}
              paraText={`Over ${count} categories in stock`}
              imageUrl={imageUrl}
              styleWrapper="p-0 sm:p-0 gap-6 border-none"
              styleImageWrapper="rounded-lg p-2 sm:p-16"
              styleImage="size-[124px] md:size-[243px]"
            />
          );
        })}
      </div>
      <div className="flex justify-center w-full gap-[1px] mx-auto mt-6 md:hidden">
        <button className="w-3 h-2 rounded-md bg-light_black"></button>
        <button className="w-3 h-2 rounded-md bg-grey-200"></button>
        <button className="w-3 h-2 rounded-md bg-grey-200"></button>
        <button className="w-3 h-2 rounded-md bg-grey-200"></button>
      </div>
    </section>
  );
};

export default BrowseByCategory;
