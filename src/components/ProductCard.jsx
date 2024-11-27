"use client";
import Image from "next/image";

import HeartOutline from "../../assets/icons/heart-outline";
import StarIcon from "../../assets/icons/star1.png";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({
  name,
  imageUrl,
  category,
  brand,
  price,
  rating,
  inStock,
}) => {
  const { handleAddToCart, qty } = useContext(CartContext);
  return (
    <div className="py-4">
      <div className="flex flex-col gap-4 p-4 space-y-6 border border-grey-100 rounded-xl">
        <div className="h-[196px] w-[327px] rounded-lg  sm:h-[258px] sm:w-[403px] flex justify-between items-start p-2 md:p-4 bg-grey-300">
          <div className="p-2 rounded-full bg-background">
            <HeartOutline />
          </div>
          <Image
            src={imageUrl}
            width="227"
            height="141"
            className="flex-1 object-cover w-full h-full"
          />
          <p className="px-2 py-1 text-sm capitalize rounded-xl bg-background text-light_black">
            in stock
          </p>
        </div>
        <div className="flex justify-between">
          <p className="px-2 py-[0.2rem] border rounded-xl border-grey-100">
            {category}
          </p>
          <div className="flex items-center gap-[2px] text-light_black ">
            <Image src={StarIcon} width="24" height="24" /> {rating} rating
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-10 text-base font-semibold capitalize md:text-2xl">
            <div>
              <Link href="category/type/sub-category">{name}</Link>
              <h3 className="text-lg font-medium uppercase text-grey-200">
                {brand}
              </h3>
            </div>
            <h4 className="">${price}</h4>
          </div>
          <Link
            href="/cart"
            onClick={() => handleAddToCart(currentProduct, qty)}
            className="self-end text-sm md:text-xl font-medium rounded-xl px-12 py-[10px] md:px-[18.5px] md:py-[22px] bg-orange text-background"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
