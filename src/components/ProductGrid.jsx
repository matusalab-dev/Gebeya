import ProductCard from "./ProductCard";

import FrenchKissBag from "../../assets/img/french_kiss_bag.png";
import jacket from "../../assets/img/Jacket.webp";
import BurberryShine from "../../assets/img/Burberry_Shine.png";
import AlveroGown from "../../assets/img/Alvero_Gown.png";

export const PRODUCTS_INFO = [
  {
    name: "french kiss bag",
    imageUrl: FrenchKissBag,
    category: "women",
    products: [],
    brand: "aldo",
    price: "500",
    rating: "2k+",
    type: "bags",
    inStock: true,
  },
  {
    name: "french kiss bag",
    imageUrl: FrenchKissBag,
    category: "women",
    products: [],
    brand: "aldo",
    price: "500",
    rating: "2k+",
    type: "bags",
    inStock: true,
  },
  {
    name: "alvero gown",
    imageUrl: AlveroGown,
    category: "women",
    products: [],
    brand: "divine",
    price: "300",
    rating: "5k+",
    type: "clothes",

    inStock: true,
  },
  {
    name: "burberry shine",
    imageUrl: BurberryShine,
    category: "kids",
    products: [],
    brand: "fendi",
    price: "150",
    rating: "1k+",
    type: "shoes",

    inStock: true,
  },
  {
    name: "alvero gown",
    imageUrl: AlveroGown,
    category: "women",
    products: [],
    brand: "divine",
    price: "300",
    rating: "5k+",
    type: "clothes",

    inStock: true,
  },
  {
    name: "french kiss bag",
    imageUrl: FrenchKissBag,
    category: "women",
    products: [],
    brand: "aldo",
    price: "500",
    rating: "2k+",
    type: "bags",
    inStock: true,
  },
  {
    name: "alvero gown",
    imageUrl: AlveroGown,
    category: "women",
    products: [],
    brand: "divine",
    price: "300",
    rating: "5k+",
    type: "clothes",

    inStock: true,
  },
];

const ProductGrid = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll overscroll-x-contain">
      {PRODUCTS_INFO.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
