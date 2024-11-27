import Image from "next/image";
import BurberryShine from "../../../assets/img/Burberry_Shine.png";
import CardIcon from "../../../assets/icons/card.png";
import WalletIcon from "../../../assets/icons/wallet.png";
import BankTransferIcon from "../../../assets/icons/bank.png";
import Button from "../../components/Button";

const CheckoutPage = () => {
  return (
    <section className="flex flex-col gap-8 py-12 bg-grey-300 inverse-grey full-bleed-grey">
      <div className="flex flex-col gap-14 md:gap-4 font-poppins md:flex-col lg:flex-row">
        <div className="basis-[60%] flex flex-col justify-between gap-8 rounded-sm p-6 bg-background border-grey-200 border">
          <h2 className="text-xl font-semibold">Shipping Address</h2>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-medium capitalize">
              name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
              placeholder="First & Last Name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-medium capitalize">
              address 1
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
              placeholder="412, Dubai St"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-medium capitalize">
              Address 2
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
              placeholder="23rd, Boulevard Ave"
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-medium capitalize">
                city
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                placeholder="Enter city"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-medium capitalize">
                State
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                placeholder="Select State"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-medium capitalize">
                Zip
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 rounded-sm -order-1 md:-order-none bg-background">
          <h6 className="text-xl font-semibold text-center capitalize border-b-[1px] pb-4 border-grey-200">
            order summary
          </h6>
          <div className="flex gap-3 mt-6">
            <div className="p-2 bg-grey-300">
              <Image src={BurberryShine} width="82" height="82" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Burberry shine</h3>
              <p className="uppercase text-grey-200">fendi</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between text-base">
              <p className="text-grey-200">Subtotal</p>
              <p>$150</p>
            </div>
            <div className="flex justify-between text-base">
              <p className="text-grey-200">Shipping</p>
              <p>$10</p>
            </div>
            <div className="flex mb-4 border-b-[1px] pb-4 border-b-grey-200 justify-between text-base">
              <p className="text-grey-200">Tax</p>
              <p>$5</p>
            </div>
            <div className="flex justify-between">
              <p className="text-light_black">Total</p> <p>$165</p>
            </div>
            <Button className="order-1 w-full md:w-[90%] py-3 mt-6 mx-auto text-background">
              place order
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[60%] rounded-sm px-6 py-6 bg-background">
        <h4 className="text-2xl font-semibold capitalize">Payment Method</h4>
        <div className="space-y-6">
          <div className="flex justify-between gap-3 mt-4">
            <div className="flex flex-col gap-4 px-24 py-4 border rounded-sm bg-orange text-background border-light_black">
              <Image src={CardIcon} width="32" height="32" />
              <p>card</p>
            </div>
            <div className="flex flex-col gap-4 px-24 py-4 border rounded-sm border-grey-200">
              <Image src={WalletIcon} width="32" height="32" />
              <p>wallet</p>
            </div>
            <div className="flex flex-col items-center gap-4 px-16 py-4 border rounded-sm border-grey-200">
              <Image src={BankTransferIcon} width="32" height="32" />
              <p>bank transfer</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-medium capitalize">
              Name on card
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
              placeholder="First & Last Name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-medium capitalize">
              Card number
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-medium capitalize">
                Expiry
              </label>
              <div className="flex gap-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                  placeholder="MM"
                />
                {/* <label htmlFor="name" className="font-medium capitalize">
                  State
                  </label> */}
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="md:self-end py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-medium capitalize">
                CVV
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="py-4 px-2 w-full font-medium text-base border border-grey-200 rounded-sm  text-light_black/70 focus:!border-grey-500 focus:outline-none focus-within:outline-grey-500"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
