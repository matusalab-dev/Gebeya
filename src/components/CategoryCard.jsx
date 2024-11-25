import Image from "next/image";
import { cn } from "../lib/utils";

const CategoryCard = ({
  headingText,
  paraText,
  imageUrl,
  styleWrapper,
  styleImageWrapper,
  styleImage,
  styleHeading,
  stylePara,
}) => {
  return (
    <div
      className={`${cn(
        "flex flex-col items-center px-4 py-3 space-y-3 border sm:px-7 sm:py-6 rounded-xl border-grey-200",
        styleWrapper
      )}`}
    >
      <div
        className={`${cn(
          "px-7 py-[0.436rem] sm:py-[0.623rem] sm:px-[1.88rem] bg-grey-300",
          styleImageWrapper
        )}`}
      >
        <Image
          src={imageUrl}
          width="81"
          height="81"
          className={`${cn(
            "w-[3.75rem] h-[3.75rem] w-[5.064rem] h-[5.064rem]",
            styleImage
          )}`}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h4
          className={`${cn(
            "text-base font-semibold capitalize sm:text-2xl text-light_black ",
            styleHeading
          )}`}
        >
          {headingText}
        </h4>
        <p
          className={`${cn(
            "text-xs min-w-max sm:text-base text-grey-500",
            stylePara
          )} `}
        >
          {paraText}{" "}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
