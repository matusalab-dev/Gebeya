import ArrowIcon from "../../assets/icons/arrow-icon";
const ProductHeader = ({ heading }) => {
  return (
    <div className="flex items-end justify-between pt-16 pb-10 md:pt-0 md:pb-16">
      <h2 className="text-3xl font-semibold capitalize lg:text-4xl">
        {heading}
      </h2>
      <div className="self-center hidden gap-8 md:flex">
        <button className="p-4 bg-orange rounded-tl-xl rounded-bl-xl">
          <ArrowIcon className="rotate-90" />
        </button>
        <button className="p-4 bg-orange rounded-tr-xl rounded-br-xl">
          <ArrowIcon className="-rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
