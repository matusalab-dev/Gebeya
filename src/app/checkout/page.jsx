const CheckoutPage = () => {
  return (
    <section className="flex flex-col gap-8 pt-12 bg-grey-300 inverse-grey full-bleed-grey">
      <div className="flex flex-col gap-4 font-poppins md:flex-col lg:flex-row">
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
          <div className="flex gap-3">
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

        <div className="flex-1 p-6 rounded-sm bg-background">
          <h6 className="text-xl font-semibold capitalize">order summary</h6>
        </div>
      </div>{" "}
    </section>
  );
};

export default CheckoutPage;
