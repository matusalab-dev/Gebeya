import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";

const LatestCollection = () => {
  return (
    <section className="">
      <ProductHeader heading="latest collections" />
      <ProductGrid />
    </section>
  );
};

export default LatestCollection;
