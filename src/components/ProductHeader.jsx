import ArrowIcon from "../../assets/icons/arrow-icon";
const ProductHeader = ({ heading }) => {
  return (
    <div className="flex items-end justify-between pt-16 md:pt-[100px] pb-10 md:pb-16">
      <h2 className="text-2xl font-semibold capitalize lg:text-4xl">
        {heading}
      </h2>
      <div className="self-center hidden gap-8 md:flex">
        <div className="p-4 bg-orange rounded-tl-xl rounded-bl-xl">
          <ArrowIcon className="rotate-90" />
        </div>
        <div className="p-4 bg-orange rounded-tr-xl rounded-br-xl">
          <ArrowIcon className="-rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
