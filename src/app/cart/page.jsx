import Image from "next/image";

import BurberryShine from "../../../assets/img/Burberry_Shine.png";
import Slippers from "../../../assets/img/slippers.png";
import Shoee from "../../../assets/img/shoe.png";

import HeartOutline from "../../../assets/icons/heart-outline";
import StarIcon from "../../../assets/icons/star1.png";
import CartIcon from "../../../assets/icons/cart-icon";
import DeliveryIcon from "../../../assets/icons/delivery-truck-icon";
import ReturnIcon from "../../../assets/icons/return-icon";
import Link from "next/link";

const CartPage = () => {
  return (
    <section className="flex flex-col gap-8 pt-12 bg-grey-300 inverse-grey full-bleed-grey">
      <div className="flex flex-col gap-4 font-poppins md:flex-col lg:flex-row">
        <div className="basis-[60%] flex flex-col sm:flex-row justify-between gap-8 rounded-xl p-6 bg-background border-grey-200 border">
          {/* product-images */}
          <div className="flex flex-col basis-[43%] gap-2">
            <div className="px-6 bg-grey-300">
              <Image
                src={BurberryShine}
                width="201"
                height="201"
                className="sm:w-[261px] sm:h-[261px] mx-auto"
              />
            </div>
            <div className="flex justify-between flex-1 gap-2">
              <div className="bg-grey-300 w-14 h-14">
                <Image src={BurberryShine} width="56" height="56" />
              </div>
              <div className="bg-grey-300 w-14 h-14">
                <Image src={BurberryShine} width="56" height="56" />
              </div>
              <div className="bg-grey-300 w-14 h-14">
                <Image src={BurberryShine} width="56" height="56" />
              </div>
              <div className="bg-grey-300 w-14 h-14">
                <Image
                  src={BurberryShine}
                  width="56"
                  height="56"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          {/* product-description */}
          <div className="flex flex-col justify-start flex-1 gap-4">
            <div className="flex items-start justify-between ">
              <div className="border-b-[1.95px] pb-3 border-b-grey-200">
                <h2 className="mb-2 text-3xl font-semibold">Burberry shine</h2>
                <h3>
                  brand: <span className="font-medium uppercase">fendi</span>
                </h3>
              </div>
              <div className="p-2 rounded-full size-10 bg-orange">
                <HeartOutline strokeColor="white" />
              </div>
            </div>
            <div className="border-b-[1.95px] border-grey-200 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-medium">$150</h4>
                <h5 className="line-through text-grey-200">$300</h5>
                <p className="rounded-[4px] px-[2px] text-green bg-green/10">
                  -50%
                </p>
              </div>
              <p className="text-green/50">50 units left</p>
              <p className="text-grey-200">
                + Shipping fee may vary on location
              </p>
              <p className="flex gap-2 pb-4 text-grey-200">
                <Image src={StarIcon} width="17" height="17" />
                1k+ rating
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>Quantity:</p>
              <div className="flex items-center gap-3 border rounded-sm border-light_black">
                <button className="self-center px-3 py-1 border-r rounded-tl-sm rounded-bl-sm text-background bg-orange">
                  -
                </button>
                <p className="font-medium">1</p>
                <button className="self-center px-3 py-1 border-l rounded-tr-sm rounded-br-sm text-background border-l-light_black bg-orange">
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3 lg:items-center lg:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <p className="capitalize">size:</p>
                  <div className="flex gap-2">
                    <button className="px-2 py-[0.0125rem] rounded-sm border border-grey-300">
                      20
                    </button>
                    <button className="px-2 py-1 border rounded-sm border-grey-300">
                      25
                    </button>
                    <button className="px-2 py-1 border rounded-sm border-grey-300">
                      32
                    </button>
                    <button className="px-2 py-1 border rounded-sm border-grey-300">
                      37
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium">see all size guides</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="capitalize">color:</p>
              <div className="flex gap-1">
                <button className="p-[1px] border-[0.025px] border-grey-200 ">
                  <span className="block bg-orange size-4"></span>
                </button>
                <button className="p-1 bg-purple size-4"></button>
                <button className="p-1 bg-red size-4"></button>
                <button className="p-1 bg-light_black size-4"></button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 mt-8 text-base font-medium lg:mt-4 md:flex-col lg:flex-row md:gap-2">
              <button className="flex items-center justify-center gap-2 py-1 pl-2 pr-4 font-semibold border rounded-lg border-grey-200">
                <CartIcon strokeColor="white" background="black" />
                Save for later
              </button>
              <Link
                href="/check-out"
                className="inline-block px-16 py-3 font-semibold text-center md:py-3 text-background rounded-xl bg-orange"
              >
                Buy now
              </Link>
            </div>
            <p className="mx-auto text-center text-green">
              Pickup & Pay on collection available
            </p>
          </div>
        </div>
        <div className="flex-1 p-6 bg-background rounded-xl">
          <h3 className="pb-3 mb-6 text-2xl font-semibold border-b border-grey-200">
            Delivery & Return
          </h3>
          <p className="font-medium capitalize">Location</p>
          <div className="flex flex-col gap-3 mt-2">
            <p className="px-2 py-3 capitalize border rounded-sm border-grey-200">
              location
            </p>
            <p className="px-2 py-3 capitalize border rounded-sm border-grey-200">
              Sub-location
            </p>
          </div>
          <div className="grid justify-start gap-3 mt-8 grid-col-2">
            {/* <div className="flex items-center gap-4 text-xl font-medium"> */}
            <DeliveryIcon className="col-start-1 col-[min-content]" />{" "}
            <h5 className="col-span-1 col-start-2">Delivery </h5>
            {/* </div>{" "} */}
            <ul className="flex flex-col col-start-2 row-start-2 gap-2 justify-self-start ">
              <li>Estimated delivery time is 1-12 business days</li>
              <li>
                <span className="font-medium">For Same-Day-Delivery</span>:
                Please place your order before 12pm
              </li>
              <li>
                <span className="font-medium">Next-Day-Delivery</span>: Orders
                placed after 12pm will be delivered the next day.
              </li>
              <li>
                <span className="font-medium">Note </span>: Availability may
                vary by location
              </li>
            </ul>
          </div>
          <div className="grid justify-start gap-3 mt-8 grid-col-2">
            {/* <div className="flex items-center gap-4 text-xl font-medium"> */}
            <ReturnIcon className="col-start-1 col-[min-content]" />{" "}
            <h5 className="col-span-1 col-start-2">Return policy </h5>
            {/* </div>{" "} */}
            <ul className="flex flex-col col-start-2 row-start-2 gap-2 justify-self-start ">
              <li>Guaranteed 7-day return policy</li>
              <li>
                For details about return shipping options, please visit our
                Contact page
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* product-details tab */}
      <div className="px-6 py-8 rounded-xl bg-background">
        <div className="border-b-2 pb-7 border-grey-200">
          <div className="flex gap-6 overflow-x-scroll">
            <button className="bg-orange text-background px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize">
              Overview
            </button>
            <button className=" text-light_black px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize">
              description
            </button>
            <button className=" text-light_black px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize">
              warranty
            </button>
            <button className=" text-light_black px-[24.5px] py-2 md:px-[56px] md:py-4 text-base font-medium md:font-normal md:text-2xl  rounded-3xl border border-grey-200 capitalize">
              reviews
            </button>
          </div>
          <ul className="flex flex-col gap-2 mt-6 text-sm text-grey-500">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-grey-500 size-1"></span>
              <li>
                Available in a wide range of colors, patterns, and patterns and
                themes to appeal to kids.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-grey-500 size-1"></span>
              <li>
                Rubber outsoles with good traction to prevent slips and falls.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-grey-500 size-1"></span>
              <li>
                Built-in arch support to help maintain healthy foot development.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-grey-500 size-1"></span>
              <li>
                Soft insoles and adequate padding to support growing feet.
              </li>
            </div>
          </ul>
        </div>

        {/* similar products to view */}
        <div className="flex flex-col gap-6 mt-8">
          <h6 className="text-xl font-semibold">similar items you may like</h6>
          <div className="flex gap-6 overflow-x-scroll overscroll-x-contain">
            <div className="py-4">
              <div className="flex flex-col gap-4 p-4 space-y-6 border border-grey-100 rounded-xl bg-background">
                <div className="h-[196px] w-[327px] rounded-lg  sm:h-[258px] sm:w-[403px] flex justify-between items-start p-2 md:p-4 bg-grey-300">
                  <div className="p-2 rounded-full bg-background">
                    <HeartOutline />
                  </div>
                  <Image
                    src={Shoee}
                    width="227"
                    height="141"
                    className="flex-1 object-cover w-full h-full"
                  />
                  <p className="px-2 py-1 text-sm capitalize rounded-xl bg-background text-light_black">
                    in stock
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="px-2 py-[0.2rem] border rounded-xl border-grey-100">
                    kids
                  </p>
                  <div className="flex items-center gap-[2px] text-light_black ">
                    <Image src={StarIcon} width="24" height="24" /> 2k+ rating
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-10 text-base font-semibold capitalize md:text-2xl">
                    <div>
                      <Link href="category/type/sub-category">butlin blue</Link>
                      <h3 className="text-base font-normal uppercase text-grey-200">
                        fendi
                      </h3>
                    </div>
                    <h4 className="">$120</h4>
                  </div>
                  <Link
                    href="/cart"
                    className="self-end text-sm md:text-xl font-medium rounded-xl px-12 py-[10px] md:px-[18.5px] md:py-[22px] bg-orange text-background"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex flex-col gap-4 p-4 space-y-6 border border-grey-100 rounded-xl bg-background">
                <div className="h-[196px] w-[327px] rounded-lg  sm:h-[258px] sm:w-[403px] flex justify-between items-start p-2 md:p-4 bg-grey-300">
                  <div className="p-2 rounded-full bg-background">
                    <HeartOutline />
                  </div>
                  <Image
                    src={Shoee}
                    width="227"
                    height="141"
                    className="flex-1 object-cover w-full h-full"
                  />
                  <p className="px-2 py-1 text-sm capitalize rounded-xl bg-background text-light_black">
                    in stock
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="px-2 py-[0.2rem] border rounded-xl border-grey-100">
                    kids
                  </p>
                  <div className="flex items-center gap-[2px] text-light_black ">
                    <Image src={StarIcon} width="24" height="24" /> 2k+ rating
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-10 text-base font-semibold capitalize md:text-2xl">
                    <div>
                      <Link href="category/type/sub-category">butlin blue</Link>
                      <h3 className="text-base font-normal uppercase text-grey-200">
                        fendi
                      </h3>
                    </div>
                    <h4 className="">$120</h4>
                  </div>
                  <Link
                    href="/cart"
                    className="self-end text-sm md:text-xl font-medium rounded-xl px-12 py-[10px] md:px-[18.5px] md:py-[22px] bg-orange text-background"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
