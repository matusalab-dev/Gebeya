"use client";

import { useState } from "react";
import Image from "next/image";

import SeeMoreArrow from "../../assets/icons/see-more-arrow";
import { PRODUCTS_INFO } from "./ProductGrid";

const CATEGORIES_OPTIONS = [
  "men",
  "women",
  "kids",
  "perfumes",
  "sport",
  "jewelry",
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
        {CATEGORIES_OPTIONS.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              onClick={() => setActiveCategory(category)}
              className={`${
                isActive && "bg-orange text-background"
              } px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between">
        {doesProductExists ? (
          <div className="flex flex-col items-center justify-center w-full text-center text-light_black">
            <p className="text-xl font-alfa">oops!</p>
            <h3>No Products listed on this category</h3>
          </div>
        ) : (
          filteredProducts.map(({ imageUrl, type }) => {
            return (
              <div className="flex flex-col items-center px-8 py-6 space-y-3 border rounded-xl border-grey-200">
                <div className="px-8 py-3 bg-grey-300">
                  <Image src={imageUrl} width="81" height="81" />
                </div>
                <h4 className="text-2xl font-semibold capitalize text-light_black ">
                  {type}
                </h4>
                <p className="text-base text-grey-500">see all collections</p>
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
