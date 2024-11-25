"use client";

import { useState } from "react";
import Image from "next/image";

import SeeMoreArrow from "../../assets/icons/see-more-arrow";
import CasualWear from "../../assets/img/casual_shirt.png";
import Vintage from "../../assets/img/vintage_dress.png";
import BeautyProducts from "../../assets/img/beauty_products.png";
import GymWear from "../../assets/img/gym_wears.webp";
import { PRODUCTS_INFO } from "./ProductGrid";

const CATEGORIES_OPTIONS = [
  { label: "men", imageUrl: { CasualWear } },
  { label: "women", imageUrl: { CasualWear } },
  { label: "kids", imageUrl: { CasualWear } },
  { label: "perfumes", imageUrl: { CasualWear } },
  { label: "sport", imageUrl: { CasualWear } },
  { label: "jewelry", imageUrl: { CasualWear } },
  // { label: "casual wear", imageUrl: { CasualWear } },
  // { label: "vintage", imageUrl: { Vintage } },
  // { label: "beauty Products", imageUrl: { BeautyProducts } },
  // { label: "gym wears", imageUrl: { GymWear } },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("women");

  const filteredProducts = PRODUCTS_INFO.filter(
    (product) => product.category === activeCategory
  );
  const doesProductExists = filteredProducts.length === 0;

  return (
    <section className="flex flex-col space-y-14">
      <div className="flex gap-4 overflow-x-auto md:gap-6">
        {CATEGORIES_OPTIONS.map(({ label }) => {
          const isActive = activeCategory === label;

          return (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`${
                isActive && "bg-orange text-background"
              } px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="flex justify-start gap-4 overflow-x-scroll flex-nowrap lg:gap-6 md:gap-3 overscroll-x-contain ">
        {doesProductExists ? (
          <div className="flex flex-col items-center justify-center w-full text-center text-light_black">
            <p className="text-xl font-alfa">oops!</p>
            <h3>No Products listed on this category</h3>
          </div>
        ) : (
          filteredProducts.map(({ imageUrl, type }) => {
            return (
              <div className="flex flex-col items-center px-4 py-3 space-y-3 border sm:px-7 sm:py-6 rounded-xl border-grey-200">
                <div className="px-7 py-[0.436rem] sm:py-[0.623rem] sm:px-[1.88rem] bg-grey-300">
                  <Image
                    src={imageUrl}
                    width="81"
                    height="81"
                    className="w-[3.75rem] h-[3.75rem] w-[5.064rem] h-[5.064rem]"
                  />
                </div>
                <h4 className="text-base font-semibold capitalize sm:text-2xl text-light_black ">
                  {type}
                </h4>
                <p className="text-xs min-w-max sm:text-base text-grey-500">
                  see all collections
                </p>
              </div>
            );
          })
        )}
      </div>
      {!doesProductExists && (
        <button className="flex items-center gap-[6px] px-8 justify-center py-[10.5px] mx-auto text-base font-medium rounded-sm text-background bg-purple">
          see more <SeeMoreArrow />
        </button>
      )}
    </section>
  );
};

export default Categories;
